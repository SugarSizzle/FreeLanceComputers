import React, { useState , useEffect} from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import styles from './HomePageStoreSection.module.css'
import { supabase } from '../../lib/supabase';
import { motion } from 'framer-motion';
import { IKContext, IKImage } from 'imagekitio-react';


export const HomePageStoreSection = () => {


  const [selectedType, setSelectedType] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showSubmitButton, setShowSubmitButton] = useState(false);

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
      // Clear URL parameters on component mount to start fresh
      setSearchParams(new URLSearchParams());
    }, []);

    // Monitor selections to show/hide submit button
    useEffect(() => {
      const hasSelections = selectedType.length > 0 || selectedCondition.length > 0;
      setShowSubmitButton(hasSelections);
    }, [selectedType, selectedCondition]);

    console.log(selectedType);

    return(
        
            
      <div className={styles.container}>
        <div className={styles.heroImageContainer}>
          <IKContext
            urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
          <IKImage
            className={styles.heroImage}
            loading='lazy'
            path='StoreHeroSectionDesktop.png?updatedAt=1759812775835'
            alt='Store Section'
          />
          </IKContext>
        </div>

        <div className={styles.instructionContainer}>
          <p className={styles.instructionText}>
            From phones to desktops, just click on a card to select it.</p>
        </div>

        <div className={styles.cardContainer}>

          <div 
            className={`${styles.phoneCard} ${selectedType.includes('Phone') ? styles.selected : ''}`}
            onClick={() => toggleSelection('Phone', selectedType, setSelectedType, 'type')}
          >
            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
              <h3 className={styles.phoneCardTitle}>Phones</h3>
              <IKImage
                className={styles.phoneImage}
                loading='lazy'
                path='PhoneCardMobile.png?updatedAt=1759812775737'
                alt='Phone Card'
              />
            
            </IKContext>
          </div>

          <div 
            className={`${styles.laptopCard} ${selectedType.includes('Laptop') ? styles.selected : ''}`}
            onClick={() => toggleSelection('Laptop', selectedType, setSelectedType, 'type')}
          >
            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
              <h3 className={styles.laptopCardTitle}>Laptops</h3>
              <IKImage
                className={styles.laptopImage}
                loading='lazy'
                path='StoreLaptopCard.png?updatedAt=1759812775991'
                alt='Laptop Card'
              />
            </IKContext>
          </div>
       
          <div 
            className={`${styles.desktopCard} ${selectedType.includes('Desktop') ? styles.selected : ''}`}
            onClick={() => toggleSelection('Desktop', selectedType, setSelectedType, 'type')}
          >
            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
              <h3 className={styles.desktopCardTitle}>Desktops</h3>
              <IKImage
                className={styles.desktopImage}
                loading='lazy'
                path='DesktopCard.png?updatedAt=1759815911364'
                alt='Desktop Card'
              />
            </IKContext>
          </div>
      
        </div>

        <div className={styles.newOrUsedContainer}>
          <h3 className={styles.newOrUsedTitle}>Preference in condition: </h3>
          <button 
            className={`${styles.newButton} ${selectedCondition.includes('new') ? styles.selected : ''}`}
            onClick={() => toggleSelection('new', selectedCondition, setSelectedCondition, 'condition')}
          >
            New
          </button>
          
          <button 
            className={`${styles.usedButton} ${selectedCondition.includes('used') ? styles.selected : ''}`}
            onClick={() => toggleSelection('used', selectedCondition, setSelectedCondition, 'condition')}
          >
            Used
          </button>
        </div>

        <div className={styles.submitButtonContainer}>
        {showSubmitButton && (
           
            <button className={styles.submitButton } onClick={filterProductsLogic}>Submit</button>
            
        
        )}
        <button
              onClick={() => navigate('/products')}
             className={styles.viewAllButton}>View All
             </button>
        </div>
        
        
        


      </div>


                

            
          

      
    )
}
