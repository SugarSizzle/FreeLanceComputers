import React from 'react'
import styles from './ServicesSecondOverlay.module.css'
import { IoMdArrowBack } from "react-icons/io";

export const ServicesSecondOverlay = ({ onClose }) => {

    return (

        <div className={styles.servicesSecondOverlay}>
            <div className={styles.servicesHeaderContainer}>
                <p className={styles.servicesHeaderSecondOverlay}>Cornwell</p>
                <button className={styles.closeIconSecondOverlay} onClick={onClose}>✕</button>

            </div>
            <IoMdArrowBack className={styles.arrowIcon} />

            <div className={styles.cardContainer}>
               

                <div className={styles.cardVirus}>
                    <h3 className={styles.cardTitle}>Virus Removal</h3>
                </div>
                <div className={styles.cardData}>
                    <h3 className={styles.cardTitle}>Data Recovery</h3>
                </div>
                <div className={styles.cardUpgrade}>
                    <h3 className={styles.cardTitle}>Computer Upgrades</h3>
                </div>
                
            </div>

                <div className={styles.addedInfoContainer}>
                  
                </div>

        </div>


    )


}