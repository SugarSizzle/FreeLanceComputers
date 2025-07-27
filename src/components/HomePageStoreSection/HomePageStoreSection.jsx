import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import styles from './HomePageStoreSection.module.css'
import { FaCheck } from 'react-icons/fa'; 
import { supabase } from '../../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';


export const HomePageStoreSection = () => {


  const [selectedType, setSelectedType] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);
   


    const toggleSelection = (value , selectedList, setSelectedList) => {

      if(selectedList.includes(value)){
        setSelectedList(selectedList.filter(item => item !== value));
      }else{
        setSelectedList([...selectedList, value]);
      }
    };


    const filterProductsLogic = async () => {

        const {data , error} = await supabase
        .from('products')
        .select('*')
        .in('type', selectedType)
        .in('condition',selectedCondition)
      
        
    }



    const CustomCheckbox = ({ checked, onChange, label }) => {
      
   
      return (
      
        <motion.div
          className={styles.checkboxContainer}
          onClick={onChange}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className={`${styles.checkbox} ${checked ? styles.checked : styles.unchecked}`}
            animate={checked ? 'checked' : 'unchecked'}
            variants={{
              unchecked: { scale: .8, opacity:1},
              checked: {
                scale: 1.1,
                rotate: 360,
                transition: { type: 'spring', }
              }
            }}
          >
            
              {checked && (
                <motion.div
                  key="checkbox-inner"
                  className={styles.checkboxInner}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, rotate: 360 }}
                 
                  transition={{ duration: 0.2 }}
                />
              )}
            
          </motion.div>
              
        </motion.div>
    
      );
    };

    return(
        <>
        <h3 className={styles.homePageStoreTitle}>Check out our store</h3>
        
          <div className={styles.homePageStoreContainer}>
            
            <h3 className={styles.homePageStorePreferenceText}>Tech Preference</h3>
                                 <div className={styles.homePageStorePreferenceContainer}>
                   <div className={styles.preferencePair}>
                     
                     <CustomCheckbox
                     checked ={selectedType.includes('Laptop')}
                     onChange={() => toggleSelection('Laptop', selectedType, setSelectedType)}
                     label="Laptop"
                     />
                     <motion.h3 
                       className={styles.homePageStorePreferenceText}
                       animate={{ opacity: selectedType.includes('Laptop') ? 1 : 0.5 }}
                       transition={{ duration: 0.3 }}
                     >
                       Laptop
                     </motion.h3>
                   </div>
                   <div className={styles.preferencePair}>
                     <CustomCheckbox
                     checked ={selectedType.includes('Desktop')}
                     onChange={() => toggleSelection('Desktop', selectedType, setSelectedType)}
                     label="Desktop"
                     />
                     <motion.h3  
                       className={styles.homePageStorePreferenceText}
                       animate={{ opacity: selectedType.includes('Desktop') ? 1 : 0.5 }}
                       transition={{ duration: 0.3 }}
                     >
                       Desktop
                     </motion.h3>
                   </div>
                 </div>

              
             <h3 className={styles.homePageStoreNewPreferenceText}>New Or Used?</h3>
             <div className={styles.homePageStorePreferenceContainer}>
               <div className={styles.preferencePair}>
                 <CustomCheckbox
                 checked ={selectedCondition.includes('New')}
                 onChange={() => toggleSelection('New', selectedCondition, setSelectedCondition)}
                 label="New"
                 />
                 <motion.h3 
                   className={`${styles.homePageStorePreferenceText}`}
                 
                   animate={{ opacity: selectedCondition.includes('New') ? 1 : 0.5 }}
                   transition={{ duration: 0.3 }}
                 >
                   New
                 </motion.h3>
               </div>
               <div className={styles.preferencePair}>
                 <CustomCheckbox
                 checked ={selectedCondition.includes('Used')}
                 onChange={() => toggleSelection('Used', selectedCondition, setSelectedCondition)}
                 label="Used"
                 />
                 <motion.h3 
                   className={styles.homePageStorePreferenceText}
                   animate={{ opacity: selectedCondition.includes('Used') ? 1 : 0.5 }}
                   transition={{ duration: 0.3 }}
                 >
                   Used
                 </motion.h3>
               </div>
             </div>

            <div className={styles.homePageSubmitButtonContainer}>

              <button className={styles.homePageSubmitButton}>Submit</button>
              <Link to="/products"><button className={styles.allSelectionsButton}>All Selections</button></Link>

              </div>

          </div>  
          


     
 
        </>
    )
}
