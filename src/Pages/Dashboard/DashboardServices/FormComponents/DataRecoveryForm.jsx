import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../FormComponents/DataRecoveryForm.module.css'
import {IKContext, IKImage} from 'imagekitio-react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../Context/AuthContext';


export const DataRecoveryForm = ({ formRef, serviceType }) => {

  const {session} = useAuth();

  const [description, setDescription] = useState('')
  const [deviceInfo, setDeviceInfo] = useState('')
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({type: '', content: ''})


  const navigate = useNavigate();

  const isDescriptionFilled = description.trim().length > 0
  const isDeviceFilled = deviceInfo.trim().length > 0


  const handleSubmit = async (e) => {
    e.preventDefault();


    if(!isDescriptionFilled || !isDeviceFilled){
      setMessage({type: 'error', content: 'Please fill in the description field'})
      return 
    }



    setIsSubmitting(true);
    if(!session){
      setMessage({type: 'error', content: 'Please sign in to submit a request'})
      setIsSubmitting(false);
      return;
    }

    try{

    
      const response = await fetch(`http://localhost:5000/api/services`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({description, deviceInfo, serviceType }),
      });
  
      const data = await response.json();
  
      if(!response.ok){
        setMessage({type: 'error', content: data.error})
        setIsSubmitting(false);
        return;
      }
  
      setMessage({type: 'success', content: 'Request submitted successfully!'})
      setDescription('');
      setDeviceInfo('');


    } catch(error){

      console.error('Error submitting request', error)
      setMessage({type: 'error', content: 'An error occurred while submitting the request. Please try again.'})
    } finally{
      setLoading(false);
    }

    }

  return (
    <div ref={formRef} className={styles.formContainer}>
      <h2 className={styles.selectedService}>Data Recovery</h2>
      
      <h3 className={styles.formHeader}>The more information you provide, the better we can help you.</h3>
      
      <form className={styles.formInputsContainer}>
        <label className={`${styles.formInputLabel} ${focusedField === 'description' ? styles.labelFocused : ''}`}>
          Tell us what is wrong with your device 
        </label>
        <textarea 
          className={styles.formInput} 
          placeholder='Describe the issue (Required)*'
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
          placeholder='Device Type (Optional)'
          value={deviceInfo}
          onChange={(e) => setDeviceInfo(e.target.value)}
          onFocus={() => setFocusedField('deviceType')}
          onBlur={() => setFocusedField(null)}
        />
      </form>

      <div className={styles.buttonContainer}>
          <button
            type='submit'
            onClick={handleSubmit}
            className={`${styles.submitButton} ${isDescriptionFilled ? styles.submitButtonActive : ''}`}
            disabled={!isDescriptionFilled}>
          Submit
          </button>
          <button
            onClick={() => navigate('/data-recovery')}
           className={styles.learnMoreButton}>Learn More</button>
        </div>


    </div>
  )
}

