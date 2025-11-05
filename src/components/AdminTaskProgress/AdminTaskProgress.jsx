import React, { useEffect, useState } from 'react'
import styles from './AdminTaskProgress.module.css'
import { useLocation } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export const AdminTaskProgress = () => {
    const location = useLocation()
    const requestData = location.state?.requestData
    const [taskProgress, setTaskProgress] = useState([])
  
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
        }
        fetchTaskProgress()
    }, [requestData.id])

    console.log('requestData: ', requestData)
    console.log('taskProgress: ', taskProgress)


  


  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Admin Task Progress</h3>

        {taskProgress.length > 0 && (
            <div className={styles.taskProgressContainer}>
                {taskProgress.map((update) => (
                    <div key={update.id} className={styles.taskProgressItem}>
                        <h4>{update.update_type}</h4>
                        <p>{update.note}</p>
                        <p>{update.created_at}</p>
                    </div>
                ))}
            </div>
        )}


    </div>
  )
}

export default AdminTaskProgress;