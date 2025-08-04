import React, { useState, useEffect, useRef } from 'react'
import styles from './RequestService.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowDownLong } from "react-icons/fa6";


export const RequestService = () => {

    const [isOpenRequest, setIsOpenRequest] = useState(false)
    const [selectedType, setSelectedType] = useState([]);



    const scrollToSection = () => {
        const formSection = document.getElementById('get-in-touch');
        if(formSection){
            formSection.scrollIntoView({behavior: 'smooth'});
        }
    }

  

    const toggleSelection = (value, selectedList, setSelectedList) => {
        if(selectedList.includes(value)){
            setSelectedList(selectedList.filter(item => item !== value));
            }
        else {
            setSelectedList([...selectedList, value])

        }
    }

    const CustomCheckbox = ({checked, onChange, label}) => {
        const [isHovered, setIsHovered] = useState(false);
        const [isChecked, setIsChecked] = useState(false);

        useEffect(() => {
            setIsChecked(checked);
        }, [checked]);

        return (
            <motion.div 
                className={styles.checkboxWrapper}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <motion.div 
                className={`${styles.checkbox} ${checked ? styles.checked : styles.unchecked}`}
                animate={checked ? 'checked' : 'unchecked'}
                variants={{
                    unchecked: {scale:.8 , opacity:.9,rotate:-90},
                    checked: {
                        scale:1,
                        rotate:180,
                        opacity:1,
                        transition: {type: 'spring', rotate: {duration:0.3} }

                    }

                }}
                onClick={onChange}
                style={{
                    boxShadow: checked ? '0 0 10px 0 #ffffff' : '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                    border: checked ? '2px solid #ffffff' : '1px solid #000000',
                    backgroundColor: checked ? '#000000' : '#ffffff'}}
                whileHover={{scale:1.05, transition: {type: 'spring', duration:0.3}  }}
                whileTap={{scale:1.2}}

                >

                {checked &&  (

                    <motion.div 
                    className={styles.checkboxInner}
                    initial={{scale:0 , opacity:0, rotate:0, }}
                    animate={{scale:1 , opacity:1, rotate:90, backgroundColor: '#EDB900'}}
                    transition={{duration:0.3}}
                
                    />

                )

                    
                }
                
                </motion.div>
                <motion.span 
                className={styles.checkboxLabel}
                animate={{ 
                    color: isHovered ? '#3A8DFF' : (checked ? '#EDB900' : '#ffffff'),
                    scale: isHovered ? 1.1 : 1
                }}
                transition={{ type: 'spring', duration: 0.3 }}
                >{label}</motion.span>

            </motion.div>
        )
    }





    return (
    <>
        <div 
            onClick={() => setIsOpenRequest(!isOpenRequest)}
            className={styles.requestCollapseHeaderContainer}
        >
        <motion.h3 
            className={styles.requestServicesCollapseHeader}
            animate={{ color: isOpenRequest ? '#EDB900' : 'whitesmoke' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            Request This Service        
        </motion.h3>
        <motion.div
              animate={{ 
                color: isOpenRequest ? '#EDB900' : 'whitesmoke',
                rotate: isOpenRequest ? 0 : 180 
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <FaArrowDownLong 
            style={{color: isOpenRequest ? '#EDB900' : 'whitesmoke'}}
            className={styles.requestServicesCollapseArrow}/>
        </motion.div>
        </div>
        <AnimatePresence>
            {isOpenRequest && (
                <motion.div
                    initial={{ height: 0, opacity: 0, width: '0vw' }}
                    animate={{ height: 'auto', opacity: 1, width: '85vw' }}
                    exit={{ height: 0, opacity: 0, width: '0vw' }}
                    transition={{ duration: 0.3 }}
                    className={styles.requestCollapseInfoContainer}
                >
                    
                    <div className={styles.requestServiceFormContainer}>
                        <p className={styles.requestServiceFormHeader}>Fill out the form, and we'll get you to you shortly.</p>
                        <input className={styles.requestServiceFormNameInput} type="text" placeholder='First Name' />
                        <input className={styles.requestServiceFormNameInput} type="text" placeholder='Last Name' />
                        <input className={styles.requestServiceFormNameInput} type="text" placeholder='Email' />
                        <input className={styles.requestServiceFormNameInput} type="text" placeholder='Phone Number' />
                    </div>

                    <div className={`${styles.requestServiceFormContactMethodContainer} `}>   
                            <p className={styles.requestServiceFormContactMethodTitle}>Preferred Contact Method</p>
                            <div className={styles.requestServiceRadioGroup}>
                                <CustomCheckbox checked={selectedType.includes('email')} onChange={() => toggleSelection('email', selectedType, setSelectedType)} label='Email' />
                                <CustomCheckbox checked={selectedType.includes('phone')} onChange={() => toggleSelection('phone', selectedType, setSelectedType)} label='Phone' />
                                <CustomCheckbox checked={selectedType.includes('text')} onChange={() => toggleSelection('text', selectedType, setSelectedType)} label='Text' />
                            </div>
                    </div>

                    <div className={styles.requestServiceFormSubmitButtonContainer}>
                        <button className={styles.requestServiceFormSubmitButton}>SUBMIT</button>
                    </div>
                    
                </motion.div>
            )}

        </AnimatePresence>

        
        <motion.div
            className={styles.animatedBorder}
            animate={{
                y: isOpenRequest ? 225 : 0,
                opacity: isOpenRequest ? 1 : 1
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        />
        
        <div className={styles.notWhatYouNeed}>
            <p className={styles.notWhatYouNeedHeader}>Are These Services Not What You Need?</p>
            <button className={styles.notWhatYouNeedButton} onClick={scrollToSection}>Reach Out Here</button>


        </div>

    </>

    )
}