import React, { useState } from 'react'
import styles from './VirusGetInTouch.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'


export const VirusGetInTouch = () => {

    const [selectedType, setSelectedType] = useState([]);

    const toggleSelection = (value, selectedList, setSelectedList) => {
        if(selectedList.includes(value)){
            setSelectedList(selectedList.filter(item => item !== value));
            }
        else {
            setSelectedList([...selectedList, value])

        }
    }

    const CustomCheckbox = ({checked, onChange, label}) => {

        return (
            <>
                <motion.div 
                className={`${styles.checkbox} ${checked ? styles.checked : styles.unchecked}`}
                animate={checked ? 'checked' : 'unchecked'}
                variants={{
                    unchecked: {scale:.8 , opacity:.7},
                    checked: {
                        scale:1.1,
                        rotate:360,
                        transition: {type: 'spring',}

                    }

                }}
                onClick={onChange}
                whileHover={{scale:1.02}}
                whileTap={{scale:0.98}}
                >

                {checked &&  (

                    <motion.div 
                    className={styles.checkboxInner}
                    initial={{scale:0 , opacity:0, rotate:0}}
                    animate={{scale:1 , opacity:1, rotate:360}}
                    transition={{duration:0.2}}
                
                    />

                )

                    
                }
                
                </motion.div>
                <span className={styles.checkboxLabel}>{label}</span>

            </>

        )



    }


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

                                    <CustomCheckbox
                                    checked={selectedType.includes('email')}
                                    onChange={() =>toggleSelection('email', selectedType, setSelectedType)}
                                    label="Email"
                                    />

                                   <CustomCheckbox
                                        checked={selectedType.includes('phone')}
                                        onChange={() =>toggleSelection('phone', selectedType, setSelectedType)}
                                        label="Phone"
                                   />

                                    <CustomCheckbox
                                        checked={selectedType.includes('text')}
                                        onChange={() =>toggleSelection('text', selectedType, setSelectedType)}
                                        label="Text"
                                    />


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