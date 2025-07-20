import React from 'react'
import styles from './VirusDangersInformation.module.css'

export const VirusDangersInformation = () => {
    return (
        <>
        <div className={styles.virusDangersInformationContainer}>
            <h3 className={styles.virusDangersInformationHeader}>Defects</h3>
            <h2 className={styles.virusDangersInformationTitle}>A Virus Can Slow Down The Performance Of Your Machine</h2>
            <p className={styles.virusDangersInformationText}> 
                A virus Infecting Your Machine Can 
                Potentially Slow It Down, and In Severe 
                Cases, Render It Unusable.
            </p>
        </div>
            <div className={styles.virusDangersInformationImageContainer}>
                <div className={styles.virusDangersImageVirus}></div>
                <div className={styles.virusDangersImageVirusDeath}></div>
                
            </div>
        
        </>
    )


}