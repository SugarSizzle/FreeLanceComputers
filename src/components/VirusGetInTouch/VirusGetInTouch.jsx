import React from 'react'
import styles from './VirusGetInTouch.module.css'

export const VirusGetInTouch = () => {
    return (
        <>
            <div className={styles.getInTouchContainer}>
                <div className={styles.getInTouchTitleContainer}>
                    <h2 className={styles.getInTouchTitle}>Get In Touch</h2>
                </div>
                
                <div className={styles.getInTouchFormContainer}>
                    <h3>Fill out the form, and we'll get to you shortly</h3>

                    <form>  
                        <div className={styles.getInTouchContactNameContainer}>
                            <input className={styles.getInTouchContactNameInput} type="text" placeholder='First Name' />
                            <input className={styles.getInTouchContactNameInput} type="email" placeholder='Last Name' />
                        </div>

                        <div className={styles.getInTouchContactMethodContainer}>
                            <p className={styles.getInTouchContactMethodTitle}>Preferred Contact Method</p>
                                <div className={styles.getInTouchContactMethodInputContainer}>   
                                    <input className={styles.getInTouchContactMethodInput} type="radio" name='contact-method' value='email' />
                                    <label htmlFor="email">Email</label>

                                    <input className={styles.getInTouchContactMethodInput} type="radio" name='contact-method' value='phone' />
                                    <label htmlFor="phone">Phone</label>

                                    <input className={styles.getInTouchContactMethodInput} type="radio" name='contact-method' value='text' />
                                    <label htmlFor="text">Text</label>
                                </div>  
                        </div>

                    <div className={styles.getInTouchContactInfoContainer}>
                        <input className={styles.getInTouchContactInfoInput} type="text" placeholder='Phone Number' />
                        <input className={styles.getInTouchContactInfoInput} type="text" placeholder='Email' />

                        <textarea className={styles.getInTouchContactInfoTextarea} placeholder='Tell Us About Your Problem' />
                        <button className={styles.getInTouchContactInfoButton} type='submit'>Submit</button>
                    </div>

                    </form>

                </div>
               
               
            </div>
        </>
    )


}