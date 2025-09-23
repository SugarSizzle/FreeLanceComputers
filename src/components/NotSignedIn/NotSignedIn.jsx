import React, { useState,  } from 'react'
import { motion, useTime, useTransform } from 'framer-motion'
import styles from './NotSignedIn.module.css'
import { Link } from 'react-router-dom'
export const NotSignedIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);



  
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const isValidPassword = (password) => {
        return password.length >= 6;
    };


    const checkFormValidity = (emailValue, passwordValue) => {
        const valid = isValidEmail(emailValue) && isValidPassword(passwordValue);
        setIsFormValid(valid);
    };

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        checkFormValidity(emailValue, password);
    };

    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        checkFormValidity(email, passwordValue);
    };

    return (
  
        <div className={styles.container}>
            <div className={styles.signUpNow}>
                <h3 className={styles.title}>Sign Up Now</h3>
                <p className={styles.Subtitle}>Get access to all our services and features</p>

                <form className={styles.signUpForm}>

                    <input 
                    className={styles.signUpFormInput}
                    type="email" 
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                    required />

                    <input 
                    className={styles.signUpFormInput}
                    type="password" 
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                    required />

                    <motion.button 
                    className={`${styles.signUpFormButton} ${isFormValid ? styles.buttonValid : styles.buttonInvalid}`}
                    type='submit'
                    animate={{
                        opacity: isFormValid ? 1 : 0.1
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                    whileHover={isFormValid ? {
                        scale: 1.02,
                     
                    } : {}}
                    whileTap={isFormValid ? { scale: 0.98 } : {}}>
                        Continue
                    </motion.button>

                </form>

                <div className={styles.backgroundContainer}>

                </div>

                <div className={styles.signinFooter}>
                    <h3 className={styles.signinFooterTitle}>Already have an account? <Link className={styles.signinFooterLink} to="/signin">Sign In</Link></h3>
                </div>
                <div className={styles.whySignUpContainer}>
                    <h3 className={styles.whySignUpTitle}>Why sign up?</h3>
                    <button className={styles.whySignUpButton}> Click here</button>
                </div>

            </div>

          

        </div>

 

        

        
    );
};