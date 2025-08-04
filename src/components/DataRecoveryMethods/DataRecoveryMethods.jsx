import React, { useState, useEffect } from 'react'
import styles from './DataRecoveryMethods.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../../lib/supabase'
import { FaArrowDownLong } from "react-icons/fa6";
import {MethodsCollapsableSection} from './MethodsCollapsableSection'
import { RequestService } from './RequestService'

export const DataRecoveryMethods = () => {

      
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

              <MethodsCollapsableSection />

              <RequestService />
                
            </div>

       
        </div>
        </>
    )
}