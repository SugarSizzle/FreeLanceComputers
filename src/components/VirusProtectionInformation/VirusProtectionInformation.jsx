import React from 'react'
import styles from './VirusProtectionInformation.module.css'




export const VirusProtectionInformation = () => {
    return (
    <>
        
        <div className={styles.virusProtectionInformationContainer}>
        <h3 className={styles.virusProtectionInformationHeader}>Security</h3>
            <h2 className={styles.virusProtectionInformationTitle}>Secure Yourself From Security Threats</h2>
            <p className={styles.virusProtectionInformationText}>In Today’s Age, You Can Never Be
                Too Cautious. Make Sure You Protect 
                Yourself Before Your Private Info 
                Gets Stolen
            </p>
        </div>        

        <div className={styles.virusProtectionImagesContainer}>
            <div className={styles.virusSecurityCodeImage} />
            <div className={styles.virusSecurityImage}/>
            
            
        </div>


           
         
        
    </>
    )
}