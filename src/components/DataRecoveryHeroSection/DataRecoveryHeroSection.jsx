import React from 'react'
import styles from './DataRecoveryHeroSection.module.css'
import { useRef } from 'react'



export const DataRecoveryHeroSection = () => {

    const methodsRef = useRef(null)

    const scrollToSection = () => {
        const formSection = document.getElementById('methods');
        if(formSection){
            formSection.scrollIntoView({behavior: 'smooth'});
        }
    }

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

            <button onClick={() => scrollToSection()} className={styles.dataRecoveryHeroSectionButton}>
                Get Started
            </button>

        </div>


        </>
    )



}