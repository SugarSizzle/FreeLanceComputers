import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './FormCollapsable.module.css'


export const FormCollapsable = () => {
  return (
    <>
        <div className={styles.formContainer}>
                
            <form className={styles.formInputsContainer}>
                <textarea 
                    className={styles.formInput} 
                    placeholder='Tell us What is Wrong'
                />
                    
            </form>
        </div>

    </>
  )
}