import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../FormComponents/DataRecoveryForm.module.css'
import { supabase } from '../../../../lib/supabase'
import {IKContext, IKImage} from 'imagekitio-react'
import { useNavigate } from 'react-router-dom';


export const DataRecoveryForm = ({ formRef }) => {
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
      return 
    }

    setLoading(true);


    try{

      const {data:{user} , error:authError} = await supabase.auth.getUser();

      if(authError || !user){
        setMessage({type: 'error', content:' Please sign in to submit a requerst'
        })
        setLoading(false);
        return;
      }

      const {data , error} = await supabase
      .from('services_requests')
      .insert([
        {
          user_id: user.id,
          service_type: 'data_recovery',
          description: description.trim(),
          device_info: deviceType.trim() || null,
          status: 'pending',
        }
      ]).select();

      if(error) throw error;

      setMessage({type: 'success', content: 'Request submitted successfully!'})
      setDescription('');
      setDeviceType('');
      setLoading(false);
      console.log('request successfully submitted', data);


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
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
          onFocus={() => setFocusedField('deviceType')}
          onBlur={() => setFocusedField(null)}
        />
      </form>

      <div className={styles.buttonContainer}>
          <button d
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

