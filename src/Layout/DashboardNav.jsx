import React, { useState, useEffect } from 'react'
import { useAuth } from '../Context/AuthContext'
import styles from './DashboardNav.module.css'

export const DashboardNav = () => {
    const { session } = useAuth()
    const [currentTime, setCurrentTime] = useState(new Date())

  
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

  
    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
    }

  
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    
    const getUserName = () => {
        if (!session || !session.name) return 'Guest'
        
       
        const name = session.name
        return name ? name : 'User'
    }

    return (
        <div className={styles.dashboardNav}>
            <div className={styles.container}>
                <div className={styles.userInfo}>
                    <span className={styles.welcomeText}>Welcome, </span>
                    <span className={styles.userName}>{getUserName()}</span>
                </div>
                
                <div className={styles.timeDisplay}>
                    {formatTime(currentTime)}
                </div>
                
                <div className={styles.dateDisplay}>
                    {formatDate(currentTime)}
                </div>
            </div>
        </div>
    )
}
