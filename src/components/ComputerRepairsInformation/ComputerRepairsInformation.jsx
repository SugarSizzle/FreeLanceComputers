import React from 'react'
import styles from './ComputerRepairsInformation.module.css'

export const ComputerRepairsInformation = () => {

    return(
    <>
        <div className={styles.computerRepairsInformationContainer}>
            <p className={styles.computerRepairsInformationHeader}>Repairs</p>
            <h3 className={styles.computerRepairsInformationTitle}>Efficient and Reliable</h3>
            <p className={styles.computerRepairsInformationText}>
                Our expert repair services are designed to not only fix problems but actively
                enhance your system's performance.With a focus on efficiency, transparency, 
                and lasting results, our technicians deliver repairs that restore 
                confidence in your tech — and keep your workflow moving without interruption.
            </p>
        </div>
    </>
    )
}