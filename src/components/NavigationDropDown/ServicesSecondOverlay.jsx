import React from 'react'
import styles from './ServicesSecondOverlay.module.css'
import { IoMdArrowBack } from "react-icons/io";
import virusCardBackground from '../../images/virusCardBackground.png';
import dataCardBackground from '../../images/DataRecoveryCardBackground.png';

export const ServicesSecondOverlay = ({ onClose }) => {

    return (

        <div className={styles.servicesSecondOverlay}>
            <div className={styles.servicesHeaderContainer}>
                <p className={styles.servicesHeaderSecondOverlay}>Cornwell</p>
                <button className={styles.closeIconSecondOverlay} onClick={onClose}>✕</button>

            </div>
            <IoMdArrowBack className={styles.arrowIcon} />

            <div className={styles.cardContainer}>
               

                <div 
                    className={styles.cardVirus}
                    style={{
                        backgroundImage: `url(${virusCardBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'right',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <h3 className={styles.cardTitle}>Virus Removal</h3>
                </div>
                <div
                style={{
                    backgroundImage: `url(${dataCardBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'saturate(0)'
                }}
                 className={styles.cardData}>
                    <h3 className={styles.cardTitle}>Data Recovery</h3>
                </div>
                <div className={styles.cardUpgrade}>
                    <h3 className={styles.cardTitle}>Computer Repairs</h3>
                </div>
                
            </div>

                <div className={styles.addedInfoContainer}>
                  
                </div>

        </div>


    )


}