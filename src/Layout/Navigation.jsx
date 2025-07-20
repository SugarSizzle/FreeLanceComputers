import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.websiteNameContainer}>
        <Link to="/" className={styles.websiteName}>Cornwell</Link>
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
    </nav>
  );
};
