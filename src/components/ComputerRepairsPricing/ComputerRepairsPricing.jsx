import React from 'react'
import styles from './ComputerRepairsPricing.module.css'


export const ComputerRepairsPricing = () => {

    return(
        <>
        <div className={styles.computerRepairsPricingInformationContainer}>
            <p className={styles.computerRepairsPricingSectionHeader}>Pricing</p>
            <h3 className={styles.computerRepairsPricingSectionTitle}>Transparent Pricing</h3>
            <p className={styles.computerRepairsPricingSectionText}>
                At Cornwell Computers, we know how disruptive computer troubles can be, 
                so we make repairs fast, transparent, and worry-free. 
                Here we start with a free, no-obligation diagnostic and offer transparent pricing.
            </p>
        </div>
        </>
    )


}