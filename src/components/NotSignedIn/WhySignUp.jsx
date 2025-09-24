import React from 'react'
import { motion } from 'framer-motion'
import styles from './WhySignUp.module.css'

export const WhySignUp = ({ onBack }) => {
    return (
        <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
                // Close overlay when clicking on backdrop
                if (e.target === e.currentTarget) {
                    onBack();
                }
            }}
        >
            <motion.div 
                className={styles.container}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <div className={styles.imageSection}>
                    <motion.button 
                        className={styles.closeButton}
                        onClick={onBack}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        ×
                    </motion.button>
                </div>
                
                <motion.div 
                    className={styles.contentSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className={styles.header}>Get Full Access Now</h1>
                    <p className={styles.description}>
                        Unlock online ordering, appointments, financing , discounts and more!
                    </p>
                    
                    <motion.button 
                        className={styles.signInButton}
                        onClick={onBack}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        Sign Up Now
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}