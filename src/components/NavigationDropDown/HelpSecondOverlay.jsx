import React from 'react'
import styles from './HelpSecondOverlay.module.css'
import { IoMdArrowBack } from "react-icons/io";
import virusCardBackground from '../../images/virusCardBackground.png';

export const HelpSecondOverlay = ({ onClose }) => {

    return (

        <div className={styles.helpSecondOverlay}>
            <div className={styles.helpHeaderContainer}>
                <p className={styles.helpHeaderSecondOverlay}>Cornwell</p>
                <button className={styles.closeIconSecondOverlay} onClick={onClose}>✕</button>

            </div>
            <IoMdArrowBack onClick={onClose} className={styles.arrowIcon} />

            <div className={styles.helpCardContainer}>

                <div className={styles.helpQandA}>
                    <h3 className={styles.helpQandATitle}>Q and A</h3>
                </div>

                <div 
                    className={styles.helpContact}
                    style={{
                        backgroundImage: `url(${virusCardBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <h3 className={styles.cardTitle}>Contact</h3>
                </div>

                <div className={styles.helpStatus}>
                    <h3 className={styles.cardTitle}>Status</h3>
                </div>

                
            </div>

                <div className={styles.helpAddedInfoContainer}>
                  
                </div>

        </div>


    )


}