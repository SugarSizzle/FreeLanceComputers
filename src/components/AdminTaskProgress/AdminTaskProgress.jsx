import React, { useEffect, useState } from 'react'
import styles from './AdminTaskProgress.module.css'
import { useLocation } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { AdminTimeLine } from './AdminTimeLine'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


export const AdminTaskProgress = () => {
    const location = useLocation()
    const requestData = location.state?.requestData
    const [taskProgress, setTaskProgress] = useState([])
    const [selectedUpdate, setSelectedUpdate] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchTaskProgress = async () => {
            const { data, error } = await supabase
            .from('service_updates')
            .select('*')
            .eq('service_request_id', requestData.service_request_id)
            .order('created_at', { ascending: false })
            .limit(10);

            if (error) throw error;
            console.log( 'data: ', data)
            setTaskProgress(data)
            // Set first update as default selected
            if (data && data.length > 0) {
                setSelectedUpdate(data[0])
            }
        }
        fetchTaskProgress()
    }, [requestData.id])

    console.log('requestData: ', requestData)
    console.log('taskProgress: ', taskProgress)


    const formattedDate = selectedUpdate?.created_at 
        ? new Date(selectedUpdate.created_at).toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        }) 
        : '';

  return (
    <div className={styles.container}>

        <div className={styles.backButtonContainer}>
            <FaChevronLeft 

            className={styles.backButtonIcon} 
            onClick={() => navigate('/admin/overview')} />

        </div>
        
            <div className={styles.infoCardContainer}>
                <AnimatePresence mode='wait'>
                    {selectedUpdate && (
                        <motion.div 
                            key={selectedUpdate.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={styles.infoCard}
                        >
                            <h3 className={styles.currentView}>Currently Viewing</h3>
                            <h3 className={styles.infoCardTitle}>Update ID : {selectedUpdate?.id}</h3>
                            <h3 className={styles.infoCardTitle}>Status : {selectedUpdate?.update_type}</h3>
                            <h3 className={styles.infoCardTitle}>Note : {selectedUpdate?.note}</h3>
                            <h3 className={styles.infoCardTitle}>Created : {formattedDate}</h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AdminTimeLine 
                taskProgress={taskProgress} 
                selectedUpdate={selectedUpdate}
                setSelectedUpdate={setSelectedUpdate}
            />

    </div>
  )
}

