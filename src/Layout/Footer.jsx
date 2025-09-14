import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export const Footer = () => {

    const [emailValue, setEmailValue] = useState('')

    return(
<>
        <div className={styles.footerContainer}>
            <div className={styles.upperContainer}>
                <div className={styles.footerColumnSubscribe}>
                    <h2 className={styles.subscribeTitle}>Subscribe to our newsletter</h2>
                     <input
                    
                     onChange={(e) => setEmailValue(e.target.value)}
                      className={styles.subscribeInput}
                       type="email" 
                       placeholder="Email address" 
                       value={emailValue} />
                     <button 
                     className={`${styles.subscribeButton} ${emailValue.length > 0 ? styles.subscribeButtonActive : ''}`}
                     type="submit">Subscribe</button>
                </div>

                <div className={styles.LinkColumn}>
                    <h3 className={styles.linkTitle}>Links</h3>
                    <Link className={styles.link} to="/About">About</Link>
                    <Link className={styles.link} to="/Contact">Contact</Link>
                </div>

            </div>

            <div className={styles.lowerContainer}>
                <div className={styles.servicesColumn}>
                    <h3 className={styles.linkTitle}>Services</h3>
                    <Link className={styles.link} to="/Virus-Protection">Virus Protection</Link>
                    <Link className={styles.link} to="/Data-Recovery">Data Recovery</Link>
                    <Link className={styles.link} to="/Computer-Repairs">Computer Repairs</Link>
                </div>

                 <div className={styles.followUsColumn}>
                     <h3 className={styles.linkTitle}>Follow Us</h3>
                     <div className={styles.followUsLinks}>
                        <Link className={styles.link} to="/Facebook"><FaFacebook /></Link>
                        <Link className={styles.link} to="/Twitter"><FaTwitter /></Link>
                        <Link className={styles.link} to="/Instagram"><FaInstagram /></Link>
                     </div>
             </div>
            </div>

            <div className={styles.copyrightContainer}>
                <p className={styles.copyrightText}>© 2025 FreeLance Computers. All rights reserved.</p>
            </div>

        </div>



</>

    )


}