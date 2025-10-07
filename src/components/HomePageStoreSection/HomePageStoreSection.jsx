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

        <div className={styles.cardContainer}>

          <div className={styles.phoneCard}>
            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
              <IKImage
                className={styles.phoneImage}
                loading='lazy'
                path='PhoneCardMobile.png?updatedAt=1759812775737'
                alt='Phone Card'
              />
            
            </IKContext>
          </div>

          <div className={styles.laptopCard}>
            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
              <IKImage
                className={styles.laptopImage}
                loading='lazy'
                path='StoreLaptopCard.png?updatedAt=1759812775991'
                alt='Laptop Card'
              />
            </IKContext>
          </div>
       
          <div className={styles.desktopCard}>
            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
              <IKImage
                className={styles.desktopImage}
                loading='lazy'
                path='DesktopCard.png?updatedAt=1759815911364'
                alt='Desktop Card'
              />
            </IKContext>
          </div>
      
        </div>



      </div>


                

            
          

      
    )
}
