import React from 'react'
import { Wrench, Database, DollarSign, Calendar, Shield, ShoppingCart, Info } from 'lucide-react'
import styles from './RecentActivities.module.css'


export const RecentActivities = () => {

    const mappedActivities = [
        { id: 1, type: 'Hardware Repair', status: 'Confirmed', timestamp: '2 hours ago' },
        { id: 2, type: 'Data Recovery', status: 'In Process', timestamp: '1 day ago' },
        { id: 3, type: 'Financing', status: 'Denied', timestamp: '3 days ago' },
        { id: 4, type: 'Appointment', status: 'In Process', timestamp: '5 days ago' }
    ]

    const getActivityIcon = (type) => {
        switch (type) {
            case 'Hardware Repair':
                return <Wrench size={20} />;
            case 'Data Recovery':
                return <Database size={20} />;
            case 'Financing':
                return <DollarSign size={20} />;
            case 'Appointment':
                return <Calendar size={20} />;
            case 'Virus Removal':
                return <Shield size={20} />;
            case 'Orders':
                return <ShoppingCart size={20} />;
            default:
                return <Wrench size={20} />;
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'Confirmed':
                return '#03ff2d'; // Bright green
            case 'In Process':
                return '#ffd700'; // Gold
            case 'Denied':
                return '#ff4444'; // Red
            default:
                return '#b0b0b0'; // Default gray
        }
    }

    return (
        <div className={styles.recentContainer}>
            <h2 className={styles.recentTitle}>Recent Activities</h2>
            <div className={styles.recentActivities}>
                {mappedActivities.map((activity) => (
                    <div key={activity.id} className={styles.recentCardContainer}>
                        <div className={styles.activityItem}>
                            <div className={styles.activityIcon}>
                                {getActivityIcon(activity.type)}
                            </div>
                        </div>

                        <div className={styles.activityContent}>
                            <p className={styles.activityAction}>{activity.type}</p>
                            <span 
                                className={styles.statusBadge}
                                style={{ color: getStatusColor(activity.status) }}
                            >
                                {activity.status}
                            </span>
                        </div>

                        <div className={styles.activityRight}>
                            <p className={styles.activityTimestamp}>{activity.timestamp}</p>
                            <button className={styles.viewInfoButton}>
                               
                                View Info
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
