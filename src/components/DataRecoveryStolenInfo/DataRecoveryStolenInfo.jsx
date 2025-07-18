import React from 'react'
import styles from './DataRecoveryStolenInfo.module.css'




export const DataRecoveryStolenInfo = () => {

    return (
        <>
        <div className={styles.dataRecoveryStolenInfoContainer}>

            <p className={styles.dataRecoveryStolenInfoRecoveryText}>Recovery</p>
            <h3 className={styles.dataRecoveryStolenInfoHeader}>Stolen Personal Information Happens Every Day</h3>
            <p className={styles.dataRecoveryStolenInfoText}>Losing Your Personal Information Can Change Your Life, and Happens 
               Frequently. Make Sure You Know Someone To Go To When It Happens. </p>

        </div>

        <div className={styles.dataRecoveryStolenInfoImageContainer}>
            <div className={styles.dataRecoveryStolenInfoImage}/>\
            <div className={styles.dataRecoveryStolenInfoCodeImage}/>
            

        </div>


        </>
    )



}