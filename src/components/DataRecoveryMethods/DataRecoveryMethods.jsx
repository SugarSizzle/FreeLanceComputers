import React, { useState, useEffect , useRef} from 'react'
import styles from './DataRecoveryMethods.module.css'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { supabase } from '../../lib/supabase'
import { FaArrowDownLong } from "react-icons/fa6";
import {MethodsCollapsableSection} from './MethodsCollapsableSection'
import { RequestService } from './RequestService'


export const DataRecoveryMethods = () => {
        const ref = useRef(null)
      
        const [method, setMethod] = useState([])
        const [currentMethod, setCurrentMethod] = useState(null)
      
        
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




      const {scrollYProgress} = useScroll({
        target:ref,
        offset: ['start 90%', 'end 20%']

      })  
        
      const opacity = useTransform(scrollYProgress, [0, .3], [0, 1])

     


    return (
        <>
        <motion.div 
        ref={ref} 
        id='methods' 
        className={styles.dataRecoveryMethodsContainer} 
        style={{opacity:opacity}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, ease:'easeInOut'}}
        >
         
            <p className={styles.dataRecoveryMethodsInformationHeader}>Methods</p>
            <div className={styles.dataRecoveryMethodsInformationContainer}>
                
                <div className={styles.dataRecoveryMethodsSectionContainer}>
                    {mappedDataRecoveryMethods}
                </div>

                <div className={styles.dataRecoveryMethodsInformationTextContainer}>
                    {methodInfo}
                </div>

              <MethodsCollapsableSection currentMethod={currentMethod} />

              <RequestService />
                
            </div>

       
        </motion.div>
        </>
    )
}