import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../FormComponents/ComputerRepairsForm.module.css'
import { supabase } from '../../../../lib/supabase'
import {IKContext, IKImage} from 'imagekitio-react'

export const ComputerRepairsForm = ({ formRef }) => {
  const [description, setDescription] = useState('')
  const [deviceType, setDeviceType] = useState('')
  const [focusedField, setFocusedField] = useState(null)

  return (
    <div ref={formRef} className={styles.formContainer}>
      <h2 className={styles.selectedService}>Computer Repairs</h2>
      
    
      <form className={styles.formInputsContainer}>
      
        
        <label className={`${styles.formInputLabel} ${focusedField === 'description' ? styles.labelFocused : ''}`}>
          Tell us what is wrong with your device 
        </label>
        <textarea 
          className={styles.formInput} 
          placeholder=' I am having problems with... *'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onFocus={() => setFocusedField('description')}
          onBlur={() => setFocusedField(null)}
          required
        />
        <label className={`${styles.formInputLabel} ${focusedField === 'deviceType' ? styles.labelFocused : ''}`}>
          Tell us what device you need help with 
        </label>
        <input 
          type="text"
          className={styles.formInputOptional}
          placeholder=' The device I need help with is....'
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
          onFocus={() => setFocusedField('deviceType')}
          onBlur={() => setFocusedField(null)}
        />
      </form>
    </div>
  )
}

