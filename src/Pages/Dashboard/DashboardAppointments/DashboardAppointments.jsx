import React, { useState, useEffect } from 'react'
import styles from './DashboardAppointments.module.css'
import { supabase } from '../../../lib/supabase'
import { DashboardAppointmentsPrevAppointments } from './DashboardAppointmentsPrevAppointments'

export const DashboardAppointments = () => {



    const [currentTime, setCurrentTime] = useState(new Date());
    const [technicians, setTechnicians] = useState([]);
 

    const updateTime = () => {
      setCurrentTime(new Date());
    };
  
  
    const formatTime = (date) => {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    };
  
  
    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
    };
  
  
    useEffect(() => {
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const fetchDataTechnicians = async () => {
            try {
                const { data, error } = await supabase
                    .from('technicians')
                    .select('*')

                if (error) throw error

                setTechnicians(data)
                if (data && data.length > 0) {
                    
                }
                console.log('Loaded data:', data)
            } catch (error) {
                console.error('Supabase error:', error)
            }
        }
        
        fetchDataTechnicians()
    }, []) 
    
    // Only log when technicians actually changes
    useEffect(() => {
        console.log('Technicians updated:', technicians)
    }, [technicians])


    return (
        <>
            <div className={styles.userInfoSection}>
                <h3 className={styles.helloUser}>Hello, user</h3>
                <p className={styles.currentTime}>{formatTime(currentTime)}</p>
                <p className={styles.currentDate}>{formatDate(currentTime)}</p>
                
            </div>

            <div className={styles.myAppointmentsSection}>
                <h3 className={styles.myAppointmentsTitle}>My Appointments</h3>
                <div className={styles.appointmentInfoContainer}>
                    <div className={styles.techInfoLeft}>
                        {technicians.length > 0 ? (
                            <>
                                <div className={styles.techPhoto} style={{backgroundImage: `url(${technicians[0].photo})`}}/>
                                <p className={styles.techName}>{technicians[0].name}</p>
                                <p className={styles.techAction}>Hardware Repair</p>

                            </>
                        ) : (
                            <p className={styles.techName}>Loading...</p>
                        )}
                    </div>
                    <div className={styles.appointmentInfoRight}>
                        <div className={styles.appointmentInfoDate}>
                            <h3 className={styles.appointmentDate}>Dec, 13 2025</h3>
                            <p className={styles.appointmentTime}> 1:00 PM</p>
                        </div>
                        
                        <div className={styles.appointmentInfoButtons}>
                            <button className={styles.moreInfoButton}>More Info</button>
                            <button className={styles.rescheduleButton}>Reschedule</button>
                        </div>

                    </div>
                </div>


            </div>
            <DashboardAppointmentsPrevAppointments />

                

        </>
    )
}

