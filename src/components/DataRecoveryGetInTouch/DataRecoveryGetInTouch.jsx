import React from 'react'
import styles from './DataRecoveryGetInTouch.module.css'

export const DataRecoveryGetInTouch = () => {

    return(
        <>
        <div className={styles.dataRecoveryLineLight} />
            <div className={styles.dataRecoveryGetInTouchHeaderContainer}>
                <h3 className={styles.dataRecoveryGetInTouchHeader}>Get In Touch</h3>
                <p className={styles.dataRecoveryGetInTouchText}>
                    Each individual case is unique, making it difficult to have a specific amount up front. 
                    In order to give a more accurate amount, you can fill out the form below. 
                </p>
            </div>

            <div className={styles.dataRecoveryGetInTouchFormContainer}>

                <form>

                    <div className={styles.dataRecoveryGetInTouchFormContactInfoContainer}>
                        <p className={styles.dataRecoveryGetInTouchFormHeader}>Fill out the form, and we'll get you to you shortly.</p>
                        <input className={styles.dataRecoveryGetInTouchFormNameInput} type="text" placeholder='First Name' />
                        <input className={styles.dataRecoveryGetInTouchFormNameInput} type="text" placeholder='Last Name' />
                        <input className={styles.dataRecoveryGetInTouchFormNameInput} type="text" placeholder='Email' />
                        <input className={styles.dataRecoveryGetInTouchFormNameInput} type="text" placeholder='Phone Number' />
                    </div>

                    <div className={styles.dataRecoveryGetInTouchFormContactMethodContainer}>   
                            <p className={styles.dataRecoveryGetInTouchFormContactMethodTitle}>Preferred Contact Method</p>
                            <div className={styles.dataRecoveryRadioGroup}>
                                <input className={styles.dataRecoveryGetInTouchFormContactMethodInput} type="radio" name='contact-method' value='email' id="email" />
                                <label className={styles.dataRecoveryGetInTouchFormContactMethodLabel} htmlFor="email">Email</label>
                                <input className={styles.dataRecoveryGetInTouchFormContactMethodInput} type= 'radio' name='contact-method' value='phone' id="phone" />
                                <label className={styles.dataRecoveryGetInTouchFormContactMethodLabel} htmlFor='phone'>Phone</label>
                            </div>
                    </div>

                    <div className={styles.dataRecoveryGetInTouchFormTextareaContainer}>
                        <p className={styles.dataRecoveryGetInTouchFormTextareaHeader}>Give a detailed description of your problem, this will help us ensure the best approach to helping you!</p>
                        <textarea className={styles.dataRecoveryGetInTouchFormTextarea} placeholder='Tell Us About Your Problem' />
                        <button className={styles.dataRecoveryGetInTouchFormSubmitButton}> SUBMIT </button>


                    </div>

                </form>
            </div>


        </>
    )


}