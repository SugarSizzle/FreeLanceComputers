import React, { useState } from 'react'
import styles from './VirusesDamages.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowDownLong } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useVirus } from '../UseVirusContext';

export const VirusesDamages = ({ data, }) => {

    const { setSelectedVirus } = useVirus();

    const scrollToSection = () => {
        const formSection = document.getElementById('get-in-touch');
        if(formSection){
            formSection.scrollIntoView({behavior: 'smooth'});
        }
    }






    const [isOpenDamages, setIsOpenDamages] = useState(false)

    const highlightTextBeforeColon = (text) => {
        if (!text) return null;
        
        const colonIndex = text.indexOf(':');
        if (colonIndex === -1) {
            return <span>{text}</span>;
        }
        
        const beforeColon = text.substring(0, colonIndex);
        const afterColon = text.substring(colonIndex);
        
        return (
            <span>
                <span style={{ color: '#e53935', fontWeight: 'bold', fontSize: '.86rem' }}>{beforeColon}</span>
                <span>{afterColon}</span>
            </span>
        );
    };


    
    const damagesMoreInfo = data ? (
        <div className={styles.damagesInfoContainer}>
            <p className={styles.damagesInfoText}>
                {highlightTextBeforeColon(data.damages[0])}
              
            </p>
            <p className={styles.damagesInfoText}>
                {highlightTextBeforeColon(data.damages[1])}
            </p>
        </div>
    ) : null

 


    return (
        <>
        
            <div 
                onClick={() => setIsOpenDamages(!isOpenDamages)}
                className={styles.damagesCollapseHeaderContainer}
            >
                <motion.h3 
                    className={styles.damagesCollapseHeader}
                    animate={{ color: isOpenDamages ? '#e53935' : '#d7d7d7' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    Damages
                </motion.h3>
             
                <p 
                style={{color: isOpenDamages ? '#e53935' : '#d7d7d7'}}
                className={styles.clickToSeeMore}>Click to see more</p>
                
                <motion.div
                    animate={{ 
                        color: isOpenDamages ? '#e53935' : '#d7d7d7',
                        rotate: isOpenDamages ? 0 : 180 
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <FaArrowDownLong 
                        style={{color: isOpenDamages ? '#e53935' : '#d7d7d7'}}
                        className={styles.damagesCollapseArrow}/>
                </motion.div>

               
                    
         
                
              
                <motion.div
                    className={styles.animatedBorder}
                    animate={{
                        y: isOpenDamages ? 250 : 0,
                        opacity: isOpenDamages ? 1 : 1
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
            </div>
           
              
           
           
            
            <AnimatePresence>
                {isOpenDamages && (
                    <motion.div 
                        initial={{  opacity: 0,  }}
                        animate={{  opacity: 1, }}
                        exit={{ opacity: 0,  }}
                        transition={{ duration: 0.3 }}
                        className={styles.damagesCollapseInfoContainer}
                    >
                        {damagesMoreInfo}
                    </motion.div>
                )}
            </AnimatePresence>


        <div className={styles.reportButtonContainer}>
            <button 
                className={styles.reportButton} 
                onClick={() => {
                    if (data) {
                        setSelectedVirus({
                            ...data,
                            reportClicked: true
                        });
                        scrollToSection();
                    }
                }}
            >
                Report This Virus
            </button>
        </div>

        </>
    )
}