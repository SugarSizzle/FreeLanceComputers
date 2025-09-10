import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './FormCollapsable.module.css'


export const FormCollapsable = () => {
  return (
    <>
        <div className={styles.formContainer}>
              <h3 className={styles.formHeader}>The more information you provide, the better we can help you.</h3>
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