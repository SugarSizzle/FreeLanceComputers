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

    // Format date as Day, Month DD, YYYY
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    // Get user display name from session
    const getUserName = () => {
        if (!session || !session.user) return 'Guest'
        
        // Try to get name from user metadata, fallback to email
        const metadata = session.user.user_metadata
        if (metadata?.full_name) return metadata.full_name
        if (metadata?.name) return metadata.name
        
        // Fallback to email (show first part before @)
        const email = session.user.email
        return email ? email.split('@')[0] : 'User'
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
