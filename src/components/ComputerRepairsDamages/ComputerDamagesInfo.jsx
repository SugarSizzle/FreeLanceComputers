import React, { useState } from 'react'
import styles from './ComputerDamagesInfo.module.css'
import { FaArrowUp, FaArrowRight } from 'react-icons/fa'
import {motion, AnimatePresence, useScroll, useTransform} from 'framer-motion'
import { ComputerFixInfo } from './ComputerFixInfo'


export const ComputerDamagesInfo = ({damage, onToggle, viewInfo}) => {

    const [showSymptoms, setShowSymptoms] = useState(true)
    const [currentDamage, setCurrentDamage] = useState(damage)  

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
                className={styles.damagesInfoSeverity}>Damage Severity: <span style={{color: damage.severity === 'Critical' ? ('#e53935') : damage.severity === 'Moderate' ? ('#ffe922') :  damage.severity === 'High' ? ('#F59E0B') : ('#F5F5F5')}}>{damage.severity}</span></p>
            </div>

            <div className={styles.symptomsContainer}>
                <div onClick={() => setShowSymptoms(!showSymptoms)} className={styles.symptomsTitleContainer}>
                    <div className={styles.symptomsTitleContainerLeft}>
                        <p 
                        style={{color: showSymptoms ? '#F5F5F5' : '#B0B0B0'}}
                        className={styles.symptomsTitle}>Symptoms</p>
                        <p className={styles.symptomsTitleClick} >Click To see {showSymptoms ? 'Less -' : 'More +'}</p>
                    </div>
                    <motion.div
                        animate={{ 
                            rotate: showSymptoms ? 180 : 0,
                            color: showSymptoms ? '#03ff2d' : '#B0B0B0'
                        }}
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

            <div className={styles.repairsContainer}>
                <div className={styles.requestServiceContainer}>
                    <button className={styles.requestServiceButton}>Request Service</button>
                </div>

                <div 
                    onClick={onToggle}
                    className={styles.pageToggleContainer}>
                    <p 
                    className={styles.repairsTitle}>{viewInfo ? 'Repairs' : 'Symptoms'}</p>
                    <FaArrowRight/>
                </div>
            </div>
        </div>
    )
}