import React, { useState } from 'react'
import styles from './ContactPage.module.css'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { Link } from 'react-router-dom'



export const ContactPage = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    const isFormValid = email.trim() !== '' && message.trim() !== ''
    
    return (
        <>
        <Navigation />
            <div className={styles.contactPageContainer}>
                <h1 className={styles.contactPageTitle}>Get In Touch</h1>


                <form className={styles.contactForm}>
                    <div className={styles.contactFormInputsContainer}>
                        <label className={styles.contactFormLabel} htmlFor="name">Email Address</label>
                        <input 
                        className={styles.contactFormInput}
                        type="text" 
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="name" />
                    </div>

                    <div className={styles.contactFormTextareaContainer}>
                        <label className={styles.contactFormLabelTextarea} htmlFor="message">How can we help?</label>
                        <textarea 
                        className={styles.contactFormTextarea}
                        placeholder='I was wondering if you can help me with...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        id="message" />

                    </div>
                    <Link 
                    to="/signin"
                    className={`${styles.contactFormButton} ${isFormValid ? styles.contactFormButtonActive : ''}`}
                    >
                        Submit
                    </Link>
                </form>

            
                <div className={styles.altContactContainer}>
                    <div className={styles.getHelpContainer}>
                        <h3 className={styles.getHelpTitle}>Get Help</h3>
                        <p className={styles.getHelpText}>freelancecomputers@gmail.com</p>
                    </div>

                    <div className={styles.phoneContainer}>
                        <h3 className={styles.phoneTitle}>Phone</h3>
                        <p className={styles.phoneText}>+234 810 555 5555</p>

                    </div>



                </div>

                <div className={styles.workingHoursContainer}>
                   
                   <h3 className={styles.workingHoursTitle}>Meet in person</h3>
                       <p className={styles.workingHoursText}>Monday - Friday: 9:00 AM - 5:00 PM</p>
                       <p className={styles.workingHoursText}>Saturday: 10:00 AM - 2:00 PM</p>
                       <p className={styles.workingHoursText}>Sunday: Closed</p>

               </div>

                <div className={styles.addressContainer}>
                    <p className={styles.addressText}>123 Main St, Coldwater, USA</p>
                </div>

                    
            </div>
        <Footer />
        </>
    )
}