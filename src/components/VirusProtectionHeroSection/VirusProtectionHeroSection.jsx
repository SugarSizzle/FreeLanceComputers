import React from 'react'
import styles from './VirusProtectionHeroSection.module.css'


export const VirusProtectionHeroSection = () => {
    return (
    <>
        <div className={styles.virusProtection3DContainer}>
        </div>

        <div className={styles.virusProtectionHeroSectionTextContainer}>
            <h1 className={styles.virusProtectionHeroSectionTitle}>Sterlizing Your Tech<br/>
                    From Viruses
            </h1>
            <p className={styles.virusProtectionHeroSectionText}>Quickly Clean Your Tech Before It's Too Late</p> 
            <button className={styles.virusProtectionHeroSectionButton}>Get In Touch</button>
        </div>
    </>

    )
}