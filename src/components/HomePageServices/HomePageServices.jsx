import React, { useState, useEffect } from 'react';
import ComputerRepairs from '../../images/ComputerRepairs.webp';
import ComputerUpgrades from '../../images/ComputerUpgrades.webp';
import DataRecovery from '../../images/DataRecovery.webp';
import VirusRemoval from '../../images/Virus.jpg';
import styles from './HomePageServices.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';


const imageMap = {
   VirusRemoval,
   DataRecovery,
   ComputerUpgrades,
   ComputerRepairs
};

export const HomePageServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [currentService, setCurrentService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*');

        if (error) throw error;

        setServices(data);
        setCurrentService(data[0]); // set first service by default
      } catch (error) {
        console.error('Supabase error:', error);
        setError(error.message);
      }
    };

    fetchServices();
  }, []);


  console.log( currentService)
  console.log(  services)

  return (
    <>
      <div className={styles.servicesContainer}>
        <ul className={styles.serviceList}>
          {services.map((service, index) => (
            <motion.li
              key={service.id || index}
              layoutId="service"
              onClick={() => setCurrentService(service)}
              className={styles.serviceItem}
            >
              {service.service}

              {currentService.id === service.id && (
                <motion.div
                  layoutId="serviceBackground"
                  className={styles.serviceBackground}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>

        
      <AnimatePresence
      mode='wait'
      >     
      {currentService && (
     
        <motion.div
        
        key={currentService.id}
        initial={{ opacity: 0, x:'-100%', scale:0 }}
        animate={{ opacity: 1, x:0, scale:1 }}
        exit={{ opacity: 0 , x:'-100%', scale:0}}
        transition={{ duration: 0.25 }}
        
        className={styles.servicesInformationContainer}>
          <img
            src={currentService.image || ''}

            className={styles.servicesInformationImage}
            alt="Service"
          />
          <p className={styles.servicesInformationText}>
            {currentService.description}
          </p>

          <div className={styles.servicesGetTouchContainer}>
            <button className={styles.servicesGetTouchButton}>Get In Touch</button>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

     
    </>
  );
};