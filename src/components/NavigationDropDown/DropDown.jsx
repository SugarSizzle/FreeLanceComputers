import React, { useState } from 'react'
import styles from './DropDown.module.css'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export const DropDown = ({ onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);

    const openServices = () => {
        setServicesOpen(true);
    };

    const closeServices = () => {
        setServicesOpen(false);
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
                    <button className={styles.signInButton}>Sign In</button>
                    <button className={styles.getStartedButton}>Get Started</button>
                </div>

                <div className={styles.servicesSection}>
                    <h3 className={styles.servicesTitle}>Services</h3>
                   
                </div>

                <div className={styles.iconContainer}>
                    <a href="#" className={styles.navIcon}>
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" className={styles.navIcon}>
                        <FaTwitter size={24} />
                    </a>
                    <a href="#" className={styles.navIcon}>
                        <FaFacebook size={24} />  
                    </a>
                </div>
            </div>

            {servicesOpen && (
                <div className={styles.servicesOverlay}>
                    <div className={styles.servicesContent}>
                        <div className={styles.servicesHeaderContainer}>
                            <h3 className={styles.servicesHeader}>Services</h3>
                            <button className={styles.closeIcon} onClick={closeServices}>✕</button>
                        </div>
                        <div className={styles.servicesList}>
                            <h3 className={styles.serviceItem}>Data Recovery</h3>
                            <h3 className={styles.serviceItem}>Virus Removal</h3>
                            <h3 className={styles.serviceItem}>Computer Upgrades</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}