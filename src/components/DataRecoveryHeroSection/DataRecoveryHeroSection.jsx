import React from 'react'
import styles from './DataRecoveryHeroSection.module.css'



export const DataRecoveryHeroSection = () => {

    return (
        <>
        <div className={styles.dataRecovery3DHeroSectionContainer}>
            
        </div>

        <div className={styles.dataRecoveryHeroSectionHeaderContainer}>
            <h1 className={styles.dataRecoveryHeroSectionHeader}>Helping <span className={styles.dataRecoveryHeroSectionHeaderSpan}>Recover</span> Your Precious Data</h1>
            <p className={styles.dataRecoveryHeroSectionText}>
            Losing valuable data can be devastating, may it be priceless
            memories, or confidential information that has been  stolen. 
            </p>

            <button className={styles.dataRecoveryHeroSectionButton}>
                Get Started
            </button>

        </div>


        </>
    )



}