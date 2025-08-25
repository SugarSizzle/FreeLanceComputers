import React, { useState } from 'react'
import styles from './DropDown.module.css'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { ServicesSecondOverlay } from './ServicesSecondOverlay';
import { HelpSecondOverlay } from './HelpSecondOverlay';
import { Link } from 'react-router-dom';



export const DropDown = ({ onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);





    const openServices = () => {
        setServicesOpen(true);
    };

    const closeServices = () => {
        setServicesOpen(false);
    };

    const openHelp = () => {
        setHelpOpen(true);
    };

    const closeHelp = () => {
        setHelpOpen(false);
    };
 



    return (
        <>
            <div className={styles.dropdownOverlay}>
                <div className={styles.dropdownHeaderContainer}>
                    <h3 className={styles.dropdownHeader}>Cornwell</h3>
                    <button className={styles.closeIconDropdown} onClick={onClose}>
                        <h3 className={styles.closeIcon}>✕</h3>
                    </button>
                </div>
                
                <div className={styles.buttonContainer}>
                    <Link to="/signin" className={styles.signInButton}>Sign In</Link>
                    <Link to="/signin" className={styles.getStartedButton}>Get Started</Link>
                </div>

                <div className={styles.infoSection}>
                    <div onClick={openServices} className={styles.infoSubContainer}>
                        <h3 className={styles.servicesTitle}>Services</h3>
                        <GoArrowRight className={styles.arrowIcon} />
                    </div>

                    <div onClick={openHelp} className={styles.infoSubContainer}>
                        <h3 className={styles.helpTitle}>Help</h3>
                        <GoArrowRight className={styles.arrowIcon} />
                    </div>

                    <div className={styles.infoSubContainer}>
                        <h3 className={styles.contactTitle}>Status</h3>
                        <GoArrowRight className={styles.arrowIcon} />
                    </div>
                   
                </div>

               
            </div>

            {helpOpen && (
                <HelpSecondOverlay onClose={closeHelp} />
            )}

            {servicesOpen && (
                <ServicesSecondOverlay onClose={closeServices} />
            )}
        </>
    )
}