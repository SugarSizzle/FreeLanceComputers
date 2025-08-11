import React, { useState } from 'react'
import styles from './ComputerDamagesInfo.module.css'
import { FaArrowUp, FaArrowRight } from 'react-icons/fa'
import {motion, AnimatePresence, useScroll, useTransform} from 'framer-motion'
import { ComputerFixInfo } from './ComputerFixInfo'


export const ComputerDamagesInfo = ({damage}) => {


    const [showSymptoms, setShowSymptoms] = useState(false)
    const [currentDamage, setCurrentDamage] = useState(damage)  
    const [viewInfo, setViewInfo] = useState(false)

    const mapppedSymptoms = damage.symptoms.map((symptom, index) => {
        return (
            <motion.div 
            key={symptom}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
                duration: 0.25,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            exit={{ x: 200, opacity: 0 }}
            className={styles.symptomContainer}>
                <p className={styles.symptomText}>{symptom}</p>
            </motion.div>
        )
    })



    return (
        <div className={styles.computerDamagesEntireContainer}>

        <div className={styles.damagesInfoTitleContainer}>
                <p className={styles.damagesInfoTitle}>{damage.title}</p>
                <p 
                style={{color: damage.severity === 'Critical' ? ('#e53935') : damage.severity === 'Moderate' ? ('#ffe922') :  damage.severity === 'High' ? ('#F59E0B') : ('#F5F5F5')}}
                className={styles.damagesInfoSeverity}>{damage.severity}</p>
        </div>

       
            {!viewInfo && (
               
                    <div className={styles.symptomsContainer}>
                        <div onClick={() => setShowSymptoms(!showSymptoms)} className={styles.symptomsTitleContainer}>
                            <div className={styles.symptomsTitleContainerLeft}>
                                <p 
                                style={{color: showSymptoms ? '#03ff2d' : '#B0B0B0'}}
                                className={styles.symptomsTitle}>Symptoms</p>
                                <p className={styles.symptomsTitleClick} >Click To see {showSymptoms ? 'Less -' : 'More +'}</p>
                            </div>
                            <motion.div
                                animate={{ rotate: showSymptoms ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className={styles.symptomsArrow}
                            >
                                <FaArrowUp />
                            </motion.div>
                        </div>
                        <AnimatePresence initial={false}>
                            {showSymptoms && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ 
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                    className={styles.symptomsList}>
                                    {mapppedSymptoms}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

         

               


        </div>
    )
}