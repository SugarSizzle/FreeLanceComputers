import React, { useEffect, useState } from 'react';
import { X, Calendar, Clock, Info, Smartphone, ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';
import styles from './ServiceDetailPage.module.css';
import { ServiceTimeline } from './ServiceTimeline';
import { ServiceTimelineModal } from './ServiceTimelineModal';
export const ServiceDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedUpdate, setSelectedUpdate] = useState(null);

    useEffect(() => {
        
        const fetchServiceDetail = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('services_requests')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;
                setService(data);

                const {data: updatesData, error: updatesError} = await supabase
                .from('service_updates')
                .select('*')
                .eq('service_request_id', id)
                .order('created_at' , {ascending:true}); 

                if(updatesError) throw updatesError;

                console.log(updatesData);
                setUpdates(updatesData);



            } catch (error) {
                console.error('Error fetching service details:', error);
                setError('Failed to load service details');
            } finally {
                setLoading(false);
            }
        };

        fetchServiceDetail();
    }, [id]);


 

    useEffect(() => {
        const fetchServiceUpdates = async () => {

            if(!service) return;
           

            const subscription = supabase
            .channel('service_updates')
            .on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'service_updates',
                filter: `service_request_id=eq.${service.id}`,

            }, (payload) => {
                if(payload.eventType === 'UPDATE'){
                    setUpdates(prev => {
                        prev.map(update =>
                            update.id === payload.new.id ? payload.new :update
                        )
                    })
                }

                if(payload.eventType === 'INSERT'){
                    setUpdates(prev => [...prev,payload.new]).sort((a,b) => 
                        new Date(b.created_at) - new Date(a.created_at));
                }

                if(payload.eventType === 'DELETE'){
                    setUpdates(prev => 
                        prev.filter(update =>update.id !== payload.old.id)
                    )
                }
            
        

            })
            .subscribe();

            return() =>{
                console.log('unsubscribing from real time subscription');
                subscription.unsubscribe();


            }
            
        }
        console.log(fetchServiceUpdates.id);
        fetchServiceUpdates();
    },[service,id]);

   

    console.log(service);

    if (loading) return <div className={styles.loadingContainer}>Loading...</div>;
    if (error) return <div className={styles.errorContainer}>{error}</div>;
    if (!service) return <div className={styles.errorContainer}>Service not found</div>;

    const getServiceDisplayName = (serviceType) => {
        const serviceMap = {
            'virus_protection': 'Virus Removal',
            'data_recovery': 'Data Recovery',
            'computer_repair': 'Device Repair',
        };
        return serviceMap[serviceType] || serviceType;
    };

    const getStatusDisplay = (status) => {
        const statusMap = {
            'pending': 'Pending',
            'in-progress': 'In Process',
            'completed': 'Completed',
            'cancelled': 'Cancelled',
        };
        return statusMap[status] || status;
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return '#4a9eff';
            case 'in-progress':
                return '#ffd700';
            case 'completed':
                return '#03ff2d';
            case 'cancelled':
                return '#ff4444';
            default:
                return '#b0b0b0';
        }
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
            <div className={styles.backButtonContainer}>

                <button className={styles.backButton} onClick={() => navigate(-1)}>
                    <ArrowLeft size={24} />
                    <span>Back</span>
                </button>
            </div>

                <div className={styles.modalHeader}>
                
                    <h2 className={styles.modalTitle}>Service Request Details</h2>
                </div>

               
                <div className={styles.serviceTypeSection}>
                    <h3 className={styles.serviceName}>
                        {getServiceDisplayName(service.service_type)}
                    </h3>
                    <span 
                        className={styles.statusBadge}
                        style={{ 
                            color: getStatusColor(service.status),
                            
                        }}
                    >
                        {getStatusDisplay(service.status)}
                    </span>
                </div>
   
            </div>
            <ServiceTimelineModal update={updates} selectedUpdate={selectedUpdate} setSelectedUpdate={setSelectedUpdate} />
            <ServiceTimeline updates={updates} selectedUpdate={selectedUpdate} setSelectedUpdate={setSelectedUpdate} />
        </div>
    );
};