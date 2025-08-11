import React from 'react'
import styles from './ComputerDamagesInfo.module.css'

export const ComputerDamagesInfo = ({damage}) => {

    const mapppedSymptoms = damage.symptoms.map((symptom) => {
        return (
            <div 
            key={symptom}
            className={styles.symptomContainer}>
                <p className={styles.symptomText}>{symptom}</p>
            </div>
        )
    })



    return (
        <div className={styles.computerDamagesEntireContainer}>

        <div className={styles.damagesInfoTitleContainer}>
                <p className={styles.damagesInfoTitle}>{damage.title}</p>
                <p 
                style={{color: damage.severity === 'Critical' ? ('#F59E0B') : damage.severity === 'Moderate' ? ('#F5F5F5') :  damage.severity === 'High' ? ('#B0B0B0') : ('#F5F5F5')}}
                className={styles.damagesInfoSeverity}>{damage.severity}</p>
        </div>

            <div className={styles.damagesInfoDescriptionContainer}>
                <p className={styles.damagesInfoDescription}>{damage.description}</p>
            </div>
            
                {damage.symptoms && (
                    <div className={styles.symptomsContainer}>
                        <p className={styles.symptomsTitle}>Symptoms</p>
                        <div className={styles.symptomsList}>
                            {mapppedSymptoms}
                        </div>
                    </div>
                )}
        </div>
    )
}