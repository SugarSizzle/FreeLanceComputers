import React from 'react';
import styles from './DashboardActivityFeed.module.css';
import { supabase } from '../../lib/supabase';
import { useEffect, useState } from 'react';
import { Wrench, Database, Shield, Calendar, ShoppingCart, DollarSign } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


    


export const DashboardActivityFeed = () => {

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();


  const handleViewInfo = (activity) => {
    navigate(`/dashboard/service-detail/${activity.id}`);
  }

  useEffect(() => {
      const initializeData = async () => {
        const {data:{user}} = await supabase.auth.getUser();

        if(user){
          setCurrentUser(user);
          await fetchServiceRequests(user.id);
        } else{
            setError('Please sign in to view your activity feed');
            setLoading(false);
        }
      };
      initializeData();
    }, []);


      useEffect(() => {

        if (!currentUser) return;
        const subscription = supabase
        .channel('services_requests_changes')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'services_requests',
          filter: `user_id=eq.${currentUser.id}`,

        }, (payload) => {
          console.log('Real Time chnage detected', payload);

          if(payload.eventType === 'INSERT'){
            setActivities(prevActivities => [payload.new, ...prevActivities]);
          }

          if(payload.eventType === 'UPDATE'){
            setActivities(prevActivities => prevActivities.map(activity => 
              activity.id === payload.new.id ? payload.new : activity
            ));
          }
          
        })
        .subscribe();

        console.log('Real Time subscription active');

        return () => {
          subscription.unsubscribe();
          console.log('Real Time subscription closed');
        }
      },[currentUser]);



 

  const fetchServiceRequests = async (userId) => { 
    
      try {
        setLoading(true);

  
        const {data, error} = await supabase
        .from('services_requests')
        .select('*')
        .eq('user_id', userId)
        .order('requested_at', {ascending:false})
        .limit(4);

        if(error) throw error;

        setActivities(data || []);
        setLoading(false);
      } catch(error){
        console.error('Error fetching service requests', error);
        setError('An error occurred while fetching your activity feed.');
        setLoading(false);
      }
  }
 


const getServiceDisplayName = (serviceType) => {

  const serviceMap = {
    'virus_protection': 'Virus Removal',
    'data_recovery': 'Data Recovery',
    'computer_repair': 'Device Repair',
  
  };

  return serviceMap[serviceType] || serviceType;

 
}

const getStatusDisplay = (status) => {
  const statusMap = {
    'pending': 'Pending',
    'in_process': 'In Process',
    'completed': 'Completed',
    'cancelled': 'Cancelled',
    
    
  }

  return statusMap[status] || status;
}

const getActivityIcon = (serviceType) => {
    switch(serviceType){
      case 'virus_protection':
        return <Shield className={styles.activityIcon}  />;
      case 'data_recovery':
        return <Database className={styles.activityIcon}  />;
      case 'computer_repair':
        return <Wrench className={styles.activityIcon}  />;
      default:
        return <Wrench className={styles.activityIcon}  />;
    }

}

const getStatusColor = (status) => {

  switch(status){
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

}

const getRelativeTime = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return past.toLocaleDateString();
};




  return (
    <div className={styles.recentContainer}>
        <h2 className={styles.recentTitle}>Recent Activities</h2>
        <div className={styles.recentActivities}>
            {activities.map((activity) => (
                <div key={activity.id} className={styles.recentCardContainer}>
                    <div className={styles.activityItem}>
                        <div className={styles.activityIcon}>
                            {getActivityIcon(activity.service_type)}
                        </div>
                    </div>

                    <div className={styles.activityContent}>
                        <p className={styles.activityAction}>
                            {getServiceDisplayName(activity.service_type)}
                        </p>
                        <span 
                            className={styles.statusBadge}
                            style={{ color: getStatusColor(activity.status) }}
                        >
                            {getStatusDisplay(activity.status)}
                        </span>
                    </div>

                    <div className={styles.activityRight}>
                        <p className={styles.activityTimestamp}>
                            {getRelativeTime(activity.requested_at)}
                        </p>
                        <button className={styles.viewInfoButton} onClick={() => handleViewInfo(activity)}>
                            View Info
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
   
);
};

