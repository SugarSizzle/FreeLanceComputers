import React, { useState, useEffect } from 'react'
import styles from './DataRecoveryMethods.module.css'
import { motion } from 'framer-motion'
import { supabase } from '../../lib/supabase'

export const DataRecoveryMethods = () => {

      

        
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

                <div className={styles.dataRecoveryMethodsInfoContainer}>
                    <p className={styles.dataRecoveryMethodsInfoText}>{currentMethod.methods[0]}</p>
                    <p className={styles.dataRecoveryMethodsInfoText}>{currentMethod.methods[1]}</p>

                </div>
            </div>
         ) : null


    return (
        <>
        <div className={styles.dataRecoveryMethodsContainer}>
            <p className={styles.dataRecoveryMethodsHeader}>Recovery Methods</p>
            <h3 className={styles.dataRecoveryMethodsTitle}>Using Modern Methods, We Can Recover Your Lost Data</h3>
            <p className={styles.dataRecoveryMethodsText}>
                Offering Professional Data Recovery Services, 
                We Are Confident That We Can Regain Your Precious Memories 
                or Your Confidential Information.
            </p>

            <p className={styles.dataRecoveryMethodsInformationHeader}>Methods</p>
            <div className={styles.dataRecoveryMethodsInformationContainer}>
                
            <div className={styles.dataRecoveryMethodsSectionContainer}>
                {mappedDataRecoveryMethods}
            </div>

                {methodInfo}

            </div>


        </div>
        
        
        
        </>

    )


}