import React from 'react'
import styles from './AdminServicesGrid.module.css'
import {Present} from '../../images/Icons/Present'
import { useState } from 'react';
export const AdminServicesGrid = () => {

    const [currentCard, setCurrentCard] = useState('orders');

    
    return (
        <>
        <div className={styles.container}>

            <div className={styles.orderCard}>
                    <h3 className={styles.cardTitle}>Orders</h3>
                    <div className={styles.glossySmallCircle}/>
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

        
            <div className={styles.moreInfoHeaderContainer}>
                <h3 className={styles.moreInfoHeaderTitle}>Check Out Your Recent Requests</h3>
            </div>
            <div className={styles.moreInfoContainer}>
                <div className={styles.currentService}>
                    <p>Current Service: Orders </p>
                    <Present className={styles.presentIcon} />
                </div>
                <div className={styles.moreInfoTasks}>

                </div>



            </div>
</>
    )
}
