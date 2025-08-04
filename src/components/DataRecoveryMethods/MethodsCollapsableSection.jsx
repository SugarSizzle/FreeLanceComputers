import React, { useState, useEffect } from 'react'
import styles from './MethodsCollapsableSection.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowDownLong } from "react-icons/fa6";
import { supabase } from '../../lib/supabase'



export  const MethodsCollapsableSection = () => {

    const [method, setMethod] = useState([])
    const [currentMethod, setCurrentMethod] = useState(null)
    const [isOpenMethods, setIsOpenMethods] = useState(false)
    const [isOpenRequest, setIsOpenRequest] = useState(false)
    
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
        <div 
            onClick={() => setIsOpenMethods(!isOpenMethods)}
            className={styles.recoveryCollapseHeaderContainer}
        >
            <motion.h3 
                className={styles.recoveryMethodsCollapseHeader}
                animate={{ color: isOpenMethods ? '#EDB900' : 'whitesmoke' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                Methods
            </motion.h3>
            <motion.div
                animate={{ 
                    color: isOpenMethods ? '#EDB900' : 'whitesmoke',
                    rotate: isOpenMethods ? 0 : 180 
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <FaArrowDownLong 
                style={{color: isOpenMethods ? '#EDB900' : 'whitesmoke'}}
                className={styles.recoveryMethodsCollapseArrow}/>
            </motion.div>
            
        
            <motion.div
                className={styles.animatedBorder}
                animate={{
                    y: isOpenMethods ? 225 : 0,
                    opacity: isOpenMethods ? 1 : 1
                }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
            />
        </div>
        
        <AnimatePresence>
            {isOpenMethods && (
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

    </>


    )


}