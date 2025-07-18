import React from 'react'
import styles from './ComputerRepairsDamages.module.css'

export const ComputerRepairsDamages = () => {

    return(
        <>
        <div className={styles.computerRepairsDamagesContainer}>

            <p className={styles.computerRepairsDamagesSectionHeader}>Damages</p>
            <div className={styles.computerRepairsDamagesListContainer}>
               
                    <p  className={styles.computerRepairsDamagesListItem}>Over Heating</p>
                    <p className={styles.computerRepairsDamagesListItem}>Damaged RAM</p>
                    <p className={styles.computerRepairsDamagesListItem}>Power Supply</p>
                    <p className={styles.computerRepairsDamagesListItem}>GPU Issues</p>
                    <p className={styles.computerRepairsDamagesListItem}>Memory Leaks</p>
                    <p className={styles.computerRepairsDamagesListItem}>CPU Repairs</p>
                
            </div>

        </div>
        </>
    )



}