import React from 'react'
import styles from './ContactPage.module.css'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'



export const ContactPage = () => {
    return (
        <>
        <Navigation />
            <div className={styles.contactPageContainer}>
                <h1 className={styles.contactPageTitle}>Get In Touch</h1>


                <form className={styles.contactForm}>
                    <label className={styles.contactFormLabel} htmlFor="name">Email Address</label>
                    <input 
                    className={styles.contactFormInput}
                    type="text" placeholder='Enter Your Email' />

                    <label className={styles.contactFormLabel} htmlFor="message">Message</label>
                    <textarea 
                    className={styles.contactFormTextarea}
                    placeholder='I was wondering if you can help me with...' />

                    <button 
                    className={styles.contactFormButton}
                    type="submit">Submit</button>
                </form>

                <div className={styles.altContactContainer}>
                    <h1 className={styles.altContactTitle}>Call Us</h1>
                    <p className={styles.altContactText}>We can be reached at +234 810 555 5555</p>

                    <h1 className={styles.altContactTitle}>Visit Us</h1>
                    <p className={styles.altContactText}>We are located at 123 Main St, Coldwater, USA</p>

                    <h3 className={styles.altContactTitle}>Working hours</h3>
                        <p className={styles.altContactText}>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className={styles.altContactText}>Saturday: 10:00 AM - 2:00 PM</p>
                        <p className={styles.altContactText}>Sunday: Closed</p>

                </div>
                    
            </div>
        <Footer />
        </>
    )
}