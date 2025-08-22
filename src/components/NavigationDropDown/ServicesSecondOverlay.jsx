import React from 'react'
import styles from './ServicesSecondOverlay.module.css'
import { IoMdArrowBack } from "react-icons/io";
import virusCardBackground from '../../images/virusCardBackground.png';
import dataCardBackground from '../../images/DataRecoveryCardBackground.png';
import computerRepairsCard from '../../images/computerRepairsCard.png';
import { Link } from 'react-router-dom';

export const ServicesSecondOverlay = ({ onClose }) => {

    return (

        <div className={styles.servicesSecondOverlay}>
            <div className={styles.servicesHeaderContainer}>
                <p className={styles.servicesHeaderSecondOverlay}>Cornwell</p>
                <IoMdArrowBack
                 onClick={onClose}
                 className={styles.arrowIcon} />
            </div>

            <div className={styles.cardContainer}>
               

                <Link to="/virus-protection">
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
                </Link>
                <Link to="/data-recovery">
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
                </Link>

                <Link
                  style={{
                    backgroundImage: `url(${computerRepairsCard})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                 className={styles.cardUpgrade} to="/computer-repairs">
                  
                        <h3 className={styles.cardTitle}>Computer Repairs</h3>
                    
            </Link>   
                
            </div>

                <div className={styles.addedInfoContainer}>
                  
                </div>

        </div>


    )


}