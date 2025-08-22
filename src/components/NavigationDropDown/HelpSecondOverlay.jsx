import React from 'react'
import styles from './HelpSecondOverlay.module.css'
import { IoMdArrowBack } from "react-icons/io";
import virusCardBackground from '../../images/virusCardBackground.png';
import contactCardBackground from '../../images/contactCardBackground.png';
import { Link } from 'react-router-dom';

export const HelpSecondOverlay = ({ onClose }) => {

    return (

        <div className={styles.helpSecondOverlay}>
            <div className={styles.helpHeaderContainer}>
                <p className={styles.helpHeaderSecondOverlay}>Cornwell</p>

            </div>
            <IoMdArrowBack onClick={onClose} className={styles.arrowIcon} />

            <div className={styles.helpCardContainer}>

                <Link to="/contact">
                    <div 
                    style={{
                        backgroundImage: `url(${contactCardBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className={styles.helpContact}>
                        <h3 className={styles.helpContactTitle}>Contact</h3>
                    </div>
                </Link>

                <div 
                    className={styles.helpQandA}
                    style={{
                       
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <h3 className={styles.helpQandATitle}>Q and A</h3>
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