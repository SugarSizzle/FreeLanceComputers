import React, { useState, useEffect } from 'react'
import styles from './VirusGetInTouch.module.css'
import { motion } from 'framer-motion'
import { FaWpforms } from "react-icons/fa";
import { useVirus } from '../../Context/UseVirusContext';


export const VirusGetInTouch = () => {

    const [selectedType, setSelectedType] = useState([]);
    const { selectedVirus } = useVirus();
    const [message, setMessage] = useState('');

    // Auto-fill the message only when report button is clicked
    useEffect(() => {
        if (selectedVirus && selectedVirus.type && selectedVirus.reportClicked) {
            setMessage(`I am contacting you about ${selectedVirus.type} virus. Please help me resolve this issue.`);
        }
    }, [selectedVirus]);



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
                    unchecked: {scale:.8 , opacity:.7, rotate:-90},
                    checked: {
                        scale:1.1,
                        rotate: [0, -90, 360],
                        opacity:1,
                        transition: {
                            type: 'spring', 
                            rotate: {
                                duration: .8,
                                times: [0, 0.5, 1],
                                ease: "easeInOut"
                            }
                        }
                    }
                }}
                onClick={onChange}
                style={{ backgroundColor: 'whitesmoke' }}
                whileHover={{scale:1.05, backgroundColor: '#ffffff', transition: {type: 'spring', duration:0.3}  }}
                whileTap={{scale:1.2}}

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
                <motion.span 
                className={styles.checkboxLabel}
                animate={{ 
                    color: isHovered ? '#E63946' : (checked ? '#E63946' : '#ffffff'),
                    scale: isHovered ? 1.1 : 1
                }}
                transition={{ type: 'spring', duration: 0.3 }}
                >{label}</motion.span>

            </motion.div>
        )
    }


    return (
        <>
        <motion.div 
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.1, duration: 0.2, type: 'ease-in-out', }}
            initial={{opacity: 0, y: 200}}
            className={styles.getInTouchTitleContainer}>
           
            <div className={styles.getInTouchTitleDivider}/>
            <h2 className={styles.getInTouchTitle}>Get In Touch</h2>
        </motion.div>
      
            <motion.div
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.3, type: 'ease-in-out', }}
            initial={{opacity: 0, y: 200}}
            id="get-in-touch"
            className={styles.getInTouchContainer}>
                <div className={styles.getInTouchTitleContainer}>
                </div>
                
                <div className={styles.getInTouchFormContainer}>
                    <FaWpforms className={styles.getInTouchFormIcon} />
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

                        <textarea 
                        id='virus-report-message' 
                        className={styles.getInTouchContactInfoTextarea}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Tell Us About Your Problem' />
                        <button className={styles.getInTouchContactInfoButton} type='submit'>Submit</button>
                    </div>

                    </form>

                </div>
               
               
            </motion.div>
        </>
    )


}

