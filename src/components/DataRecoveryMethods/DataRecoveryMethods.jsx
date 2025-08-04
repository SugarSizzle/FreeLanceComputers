import React, { useState, useEffect } from 'react'
import styles from './DataRecoveryMethods.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../../lib/supabase'
import { FaArrowDownLong } from "react-icons/fa6";

export const DataRecoveryMethods = () => {

      
        const [method, setMethod] = useState([])
        const [currentMethod, setCurrentMethod] = useState(null)
        const [isOpen, setIsOpen] = useState(false)
        
        useEffect(() => {
            const fetchDataMethod = async () => {
              try {
                const { data, error } = await supabase
                  .from('methods')
                  .select('*');
         
                if (error) throw error;
         
                setMethod(data);
                if (data && data.length > 0) {
                    setCurrentMethod(data[0]); 
                }
                console.log('Loaded data:', data)
              } catch (error) {
                console.error('Supabase error:', error);
             
              }
            };
            
            fetchDataMethod();
          }, []);
     
 
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
                    <span style={{ color: '#EDB900', fontWeight: 'bold' }}>{beforeColon}</span>
                    <span>{afterColon}</span>
                </span>
            );
        };
     
        const mappedDataRecoveryMethods=method.map((method, index)=>{
         
            return(
           
            <motion.li
            key={method.id}
              layoutId={`method-${method.id}`}
              style= {{
                color: currentMethod === method ? '#EDB900' : 'whitesmoke',
                
            }}
              onClick={() => setCurrentMethod(method)}
              className={styles.dataRecoveryIndividualMethodTitle}>{method.title}
           
                {currentMethod === method && (
                    <motion.div 
                    style={{border: currentMethod === method ? '1px solid #EDB900' : '1px solid transparent'}}
                    layoutId={`method-background`}
                    className={styles.methodBackground}></motion.div>
                )}
            </motion.li>
          )
        })
        
        const methodInfo = currentMethod ? (
            <div className={styles.dataRecoveryMethodsInformationTextContainer}>
                <h3 className={styles.dataRecoveryMethodsInformationTextHeader} >{currentMethod.header}</h3>
                <p className={styles.dataRecoveryMethodsInformationText} >{currentMethod.description}</p>
            </div>
         ) : null


          
         const methodMoreInfo = currentMethod ? (
          <div className={styles.dataRecoveryMethodsInfoContainer}>
            <p className={styles.dataRecoveryMethodsInfoText}>
                {highlightTextBeforeColon(currentMethod.methods[0])}
            </p>
            <p className={styles.dataRecoveryMethodsInfoText}>
                {highlightTextBeforeColon(currentMethod.methods[1])}
            </p>
          </div>
         ) : null



    return (
        <>
        <div className={styles.dataRecoveryMethodsContainer}>
         
            <p className={styles.dataRecoveryMethodsInformationHeader}>Methods</p>
            <div className={styles.dataRecoveryMethodsInformationContainer}>
                
                <div className={styles.dataRecoveryMethodsSectionContainer}>
                    {mappedDataRecoveryMethods}
                </div>

                <div className={styles.dataRecoveryMethodsInformationTextContainer}>
                    {methodInfo}
                </div>

                <div 
                    onClick={() => setIsOpen(!isOpen)}
                    className={styles.recoveryCollapseHeaderContainer}
                >
                    <motion.h3 
                        className={styles.recoveryMethodsCollapseHeader}
                        animate={{ color: isOpen ? '#EDB900' : 'whitesmoke' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        Methods
                    </motion.h3>
                    <motion.div
                        animate={{ 
                            color: isOpen ? '#EDB900' : 'whitesmoke',
                            rotate: isOpen ? 0 : 180 
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <FaArrowDownLong 
                        style={{color: isOpen ? '#EDB900' : 'whitesmoke'}}
                        className={styles.recoveryMethodsCollapseArrow}/>
                    </motion.div>
                    
                
                    <motion.div
                        className={styles.animatedBorder}
                        animate={{
                            y: isOpen ? 225 : 0,
                            opacity: isOpen ? 1 : 1
                        }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    />
                </div>
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0, width: '0vw' }}
                            animate={{ height: '30vh', opacity: 1, width: '85vw' }}
                            exit={{ height: 0, opacity: 0, width: '0vw' }}
                            transition={{ duration: 0.3 }}
                            className={styles.recoveryCollapseInfoContainer}
                        >
                            {methodMoreInfo}
                            
                           
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className={styles.requestServicesContainer}>
                  <h3 className={styles.requestServicesHeader}>Request This Service</h3>
                  <FaArrowDownLong />
                </div>
                
            </div>

       
        </div>
        </>
    )
}