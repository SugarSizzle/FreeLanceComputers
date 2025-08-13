import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import styles from './Navigation.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {DropDown} from '../components/NavigationDropDown/DropDown'

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.websiteNameContainer}>
        <Link to="/" className={styles.websiteName}>Cornwell</Link>
      </div>

      <div className={`${styles.navigationLinks} ${styles.desktopOnly}`}>
        <h3>Virus Removal</h3>
        <h3>Computer Repairs</h3>
        <h3>Data Recovery</h3>
      </div>

      <div className={`${styles.mobileMenu} ${styles.mobileOnly}`}>
        <GiHamburgerMenu 
          size={24} 
          className={styles.hamburgerIcon}
          onClick={toggleMobileMenu}
        />
        {isMobileMenuOpen && (
          <DropDown onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`${styles.iconContainer} ${styles.desktopOnly}`}>
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

