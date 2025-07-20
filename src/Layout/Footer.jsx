import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export const Footer = () => {

    return(
        <>
    <div className={styles.footerContainer}>

        <div className={styles.footerServicesContainer}>
            <h1 className={styles.footerServicesTitle}>Services</h1>

                <Link to="/virus-protection" className={styles.footerServicesText}>Virus Removal</Link>
                <Link to="/data-recovery" className={styles.footerServicesText}>Data Recovery</Link>
                <Link to="/computer-upgrades" className={styles.footerServicesText}>Computer Upgrades</Link>
                <Link to="/computer-repairs" className={styles.footerServicesText}>Computer Repairs</Link>

        </div>

        <div    className={styles.footerContactContainer}>
            <h1 className={styles.footerContactTitle}>Contact</h1>
                <h3 className={styles.footerContactText}>Address Here</h3>
                <h3 className={styles.footerContactText}>Phone Number Here</h3>

        </div>

       
    </div>

    <div className={styles.footerSocialMediaContainer}>
        <FaInstagram className={styles.footerSocialMediaIcon}/>
        <FaFacebook className={styles.footerSocialMediaIcon}/>
        <FaTwitter className={styles.footerSocialMediaIcon}/>
    
    </div>

    </>

    )


}