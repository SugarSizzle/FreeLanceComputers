import React from 'react'
import styles from './AdminServicesGrid.module.css'
import {Present} from '../../images/Icons/Present'

export const AdminServicesGrid = () => {
    return (
        <div className={styles.container}>

            <div className={styles.orderCard}>
                    <h3 className={styles.cardTitle}>Orders</h3>
                    <div className={styles.glossySmallCircle}/>
                    <div className={styles.glossyLargeBoxFar}/>
                    <div className={styles.glossySmallCirlceFar}/>
                    <div className={styles.glossyUpClose}/>
                    <div className={styles.glossyLargeCircle}/>
            </div>

            <div className={styles.financingCard}>
                <h3 className={styles.cardTitle}>Financing</h3>
            </div>

            <div className={styles.appointmentCard}>
                <h3 className={styles.cardTitle}>Appointments</h3>
            </div>


        </div>

    )
}
