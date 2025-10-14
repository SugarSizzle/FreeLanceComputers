import React from 'react'
import styles from './HelpSecondOverlay.module.css'
import { IoMdArrowBack } from "react-icons/io";
import contactCardBackground from '../../images/contactCardBackground.png';
import { Link } from 'react-router-dom';
import { IKContext, IKImage } from 'imagekitio-react';


export const HelpSecondOverlay = ({ onClose }) => {

    return (

        <div className={styles.helpSecondOverlay}>
            <div className={styles.helpHeaderContainer}>
                <p className={styles.helpHeaderSecondOverlay}>Freelance</p>

            </div>

            <IoMdArrowBack onClick={onClose} className={styles.arrowIcon} />

            <div className={styles.helpCardContainer}>
                <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                <Link to="/contact" className={styles.helpContactLink}>
                    <h3 className={styles.helpContactTitle}>Contact</h3>
                    <IKImage
                        fetchPriority='low'
                        className={styles.helpContact}
                        loading='lazy'
                        path='contactCard.png?updatedAt=1759947270282'
                        alt='Contact'
                        transformation={[
                            {
                                quality: 100,
                                dpr: 'auto',
                                f: 'auto'
                            }
                        ]}
                    />
                </Link>
                </IKContext>
                

                <Link className={styles.helpQandA} to="/QandA">
                    <h3 className={styles.helpQandATitle}>Q and A</h3>
                </Link>

                <div className={styles.helpStatus}>
                    <h3 className={styles.cardTitle}>Status</h3>
                </div>

                
            </div>

                <div className={styles.helpAddedInfoContainer}>
                  
                </div>

        </div>


    )


}