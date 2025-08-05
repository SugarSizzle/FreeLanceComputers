import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './DataRecoveryGetInTouch.module.css'
import { FaWpforms } from "react-icons/fa";


export const DataRecoveryGetInTouch = () => {

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
                    color: isHovered ? '#EDB900' : (checked ? '#EDB900' : '#ffffff'),
                    scale: isHovered ? 1.1 : 1
                }}
                transition={{ type: 'spring', duration: 0.3 }}
                >{label}</motion.span>

            </motion.div>
        )
    }



    return(
    <>
        <motion.div 
        initial={{opacity:0, scale:0.85, y:200}}
        whileInView={{opacity:1, scale:1, y:0}}
        transition={{duration:.25, ease:'easeInOut'}}
        viewport={{ once: true }}
        className={styles.dataRecoveryLineLight} />
            <motion.div 
            initial={{opacity:0, scale:0.85, y:200}}
            whileInView={{opacity:1, scale:1, y:0}}
            transition={{duration:.25, ease:'easeInOut'}}
            viewport={{ once: true }}
            className={styles.getInTouchContainer} 
            id='get-in-touch'>
            
                <div className={styles.dataRecoveryGetInTouchHeaderContainer}>
                    <FaWpforms className={styles.dataRecoveryGetInTouchIcon} />
                    <h3 className={styles.dataRecoveryGetInTouchHeader}>Get In Touch</h3>
                    <p className={styles.dataRecoveryGetInTouchText}>
                    Did you not find what you were looking for? Fill out the form below
                    with your custom request, and we'll get back to you shortly!
                    </p>
                </div>

                <div className={styles.dataRecoveryGetInTouchFormContainer}>

                    <form>

                        <div className={styles.dataRecoveryGetInTouchFormContactInfoContainer}>
                            <motion.input 
                                initial={{opacity:0, scale:0.85, x:200}}
                                whileInView={{opacity:1, scale:1, x:0}}
                                transition={{duration:.25, ease:'easeInOut'}}
                                viewport={{ once: true }}
                                className={styles.dataRecoveryGetInTouchFormNameInput} 
                                type="text" 
                                placeholder='First Name' />
                            <motion.input 
                                initial={{opacity:0, scale:0.85, x:200}}
                                whileInView={{opacity:1, scale:1, x:0}}
                                transition={{duration:.25, ease:'easeInOut'}}
                                viewport={{ once: true }}
                                className={styles.dataRecoveryGetInTouchFormNameInput} 
                                type="text" 
                                placeholder='Last Name' />
                            <motion.input 
                                initial={{opacity:0, scale:0.85, x:200}}
                                whileInView={{opacity:1, scale:1, x:0}}
                                transition={{duration:.25, ease:'easeInOut'}}
                                viewport={{ once: true }}
                                className={styles.dataRecoveryGetInTouchFormNameInput} 
                                type="text" 
                                placeholder='Email' />
                            <motion.input 
                                initial={{opacity:0, scale:0.85, x:200}}
                                whileInView={{opacity:1, scale:1, x:0}}
                                transition={{duration:.25, ease:'easeInOut'}}
                                viewport={{ once: true }}
                                className={styles.dataRecoveryGetInTouchFormNameInput} 
                                type="text" 
                                placeholder='Phone Number' />
                        </div>

                        <div className={styles.dataRecoveryGetInTouchFormContactMethodContainer}>   
                                <p className={styles.dataRecoveryGetInTouchFormContactMethodTitle}>Preferred Contact Method</p>
                                <motion.div 
                                    initial={{opacity:0, scale:0.85, x:200}}
                                    whileInView={{opacity:1, scale:1, x:0}}
                                    transition={{duration:.25, ease:'easeInOut'}}
                                    viewport={{ once: true }}
                                    className={styles.dataRecoveryRadioGroup}>
                                    <CustomCheckbox className={styles.dataRecoveryGetInTouchFormContactMethodInput} checked={selectedType.includes('email')} onChange={() => toggleSelection('email', selectedType, setSelectedType)} label='Email' />
                                    <CustomCheckbox className={styles.dataRecoveryGetInTouchFormContactMethodInput} checked={selectedType.includes('phone')} onChange={() => toggleSelection('phone', selectedType, setSelectedType)} label='Phone' />
                                    <CustomCheckbox className={styles.dataRecoveryGetInTouchFormContactMethodInput} checked={selectedType.includes('text')} onChange={() => toggleSelection('text', selectedType, setSelectedType)} label='Text' />
                                </motion.div>
                        </div>

                        <motion.div 
                            initial={{opacity:0, scale:0.85, x:200}}
                            whileInView={{opacity:1, scale:1, x:0}}
                            transition={{duration:.25, ease:'easeInOut'}}
                            viewport={{ once: true }}
                            className={styles.dataRecoveryGetInTouchFormTextareaContainer}>

                                
                            <p className={styles.dataRecoveryGetInTouchFormTextareaHeader}>Give a detailed description of your problem, this will help us ensure the best approach to helping you!</p>
                            <textarea className={styles.dataRecoveryGetInTouchFormTextarea} placeholder='Tell Us About Your Problem' />
                            <button className={styles.dataRecoveryGetInTouchFormSubmitButton}> SUBMIT </button>


                        </motion.div>

                    </form>
            </div>


        </motion.div>
    </>
    )


}