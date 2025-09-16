import React, { useState , useEffect} from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import styles from './HomePageStoreSection.module.css'
import { supabase } from '../../lib/supabase';
import { motion } from 'framer-motion';


export const HomePageStoreSection = () => {


  const [selectedType, setSelectedType] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();


    const toggleSelection = (value , selectedList, setSelectedList, key ,) => {
      let updatedList;
      if(selectedList.includes(value)){
        updatedList = selectedList.filter(item => item !== value);
      }else{
        updatedList = [...selectedList, value];
      }

      setSelectedList(updatedList);
      console.log(updatedList);
      const params = new URLSearchParams(searchParams);
      console.log(params);
      if (updatedList.length > 0){
        console.log(key);
        params.set(key, updatedList.join(','));
      } else {

        params.delete(key);

      }
      console.log(params);
      setSearchParams(params);

    };


    const filterProductsLogic = async () => {
        navigate({
          pathname:'/products',
          search: `${searchParams.toString()}`
        })
    }

    useEffect(() => {

      const type = searchParams.get('type');
      const condition = searchParams.get('condition');

      if(type) setSelectedType(type.split(','));
      if(condition) setSelectedCondition(condition.split(','))

    }, []);




    
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
                     onChange={() => toggleSelection('Laptop', selectedType, setSelectedType, 'type')}
                     label="Laptop"
                     />
                     <motion.h3 
                       className={styles.homePageStorePreferenceText}
                       animate={{ opacity: selectedType.includes('Laptop') ? 1 : 0.5 , color: selectedType.includes('Laptop') ? '#ffffff' : '#ffffff' }}
                       transition={{ duration: 0.5 }}
                     >
                       Laptop
                     </motion.h3>
                   </div>
                   <div className={styles.preferencePair}>
                     <CustomCheckbox
                     checked ={selectedType.includes('Desktop')}
                     onChange={() => toggleSelection('Desktop', selectedType, setSelectedType, 'type')}
                     label="Desktop"
                     />
                     <motion.h3  
                       className={styles.homePageStorePreferenceText}
                       animate={{ opacity: selectedType.includes('Desktop') ? 1 : 0.5 , color: selectedType.includes('Desktop') ? '#ffffff' : '#ffffff' }}
                       transition={{ duration: 0.5 }}
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
                 onChange={() => toggleSelection('New', selectedCondition, setSelectedCondition, 'condition')}
                 label="New"
                 />
                 <motion.h3 
                   className={`${styles.homePageStorePreferenceText}`}
                 
                   animate={{ opacity: selectedCondition.includes('New') ? 1 : 0.5 , color: selectedCondition.includes('New') ? '#ffffff' : '#ffffff' }}
                   transition={{ duration: 0.5 }}
                 >
                   New
                 </motion.h3>
               </div>
               <div className={styles.preferencePair}>
                 <CustomCheckbox
                 checked ={selectedCondition.includes('Used')}
                 onChange={() => toggleSelection('Used', selectedCondition, setSelectedCondition, 'condition')}
                 label="Used"
                 />
                 <motion.h3 
                   className={styles.homePageStorePreferenceText}
                   animate={{ opacity: selectedCondition.includes('Used') ? 1 : 0.5 , color: selectedCondition.includes('Used') ? '#ffffff' : '#ffffff' }}
                   transition={{ duration: 0.5 }}
                 >
                   Used
                 </motion.h3>
               </div>
             </div>

            <div className={styles.homePageSubmitButtonContainer}>

              <button onClick={filterProductsLogic} className={styles.homePageSubmitButton}>Submit</button>
              {
                (selectedType.length > 0 || selectedCondition.length > 0) && (
                  <button onClick={() => {
                    setSelectedType([]);
                    setSelectedCondition([]);
                    setSearchParams(new URLSearchParams());
                  }} className={styles.clearFiltersButton}>Clear Filters</button>
                )
              }

              </div>

          </div>  
          

        </>
    )
}
