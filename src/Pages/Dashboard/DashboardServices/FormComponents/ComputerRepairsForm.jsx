import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../FormComponents/ComputerRepairsForm.module.css'
import {IKContext, IKImage} from 'imagekitio-react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../Context/AuthContext';


export const ComputerRepairsForm = ({ formRef, serviceType }) => {

  const {session} = useAuth();
  
  const [description, setDescription] = useState('')
  const [deviceType, setDeviceType] = useState('')
  const [focusedField, setFocusedField] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({type: '', content: ''})


  const navigate = useNavigate();

  const isDescriptionFilled = description.trim().length > 0

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(!isDescriptionFilled){
      setMessage({type: 'error', content: 'Please fill in the description field'})
      return;
    }

    setLoading(true);
    console.log('This is the session', session);
    if(!session){
      setMessage({type: 'error', content: 'Please sign in to submit a request'})
      setLoading(false);
      return;
    }

    try{

      const response = await fetch(`http://localhost:5000/api/services`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({description, deviceInfo: deviceType, serviceType }),
      });

      const data = await response.json();

      if(!response.ok){
        setMessage({type: 'error', content: data.error})
        setLoading(false);
        return;
      }

      setMessage({type: 'success', content: 'Request submitted successfully!'})
      setDescription('');
      setDeviceType('');


    } catch(error){
      console.error('Error submitting request', error)
      setMessage({type: 'error', content: 'An error occurred while submitting the request. Please try again.'})
    } finally{
      setLoading(false);
    }



  }



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

        <div className={styles.buttonContainer}>
          <button 
            type='submit'
            onClick={handleSubmit}
            className={`${styles.submitButton} ${isDescriptionFilled ? styles.submitButtonActive : ''}`}
            disabled={!isDescriptionFilled}>
          Submit
          </button>
          <button onClick={() => navigate('/computer-repairs')} className={styles.learnMoreButton}>Learn More</button>
        </div>

      </form>
    </div>
  )
}

