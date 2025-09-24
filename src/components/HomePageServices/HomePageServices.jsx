import React from 'react';
import { useState, useEffect, useRef, } from 'react';
import { motion, AnimatePresence, useTime, useTransform } from 'framer-motion';
import { IKContext, IKImage } from 'imagekitio-react';
import styles from './HomePageServices.module.css';


export const HomePageServices = () => {

  const [activeService, setActiveService] = useState(3);
  const time = useTime();
  const rotate = useTransform(time, [0, 1000, 3000], [0, -180, -280], {clamp: false});
  const rotatingBg = useTransform(rotate , (r) =>{
      return `conic-gradient(from ${r}deg, #ffffff, transparent, transparent, transparent,transparent)`
  })




  const services = [
    {
      id: 1,
      service: "Virus Removal",
      description: " We provide comprehensive malware and virus removal services to protect your system, data, and privacy. Our team uses advanced tools to detect, eliminate, and prevent infections with minimal disruption.",
      image: "ServicesImages/Virus.jpg"
    },
    {
      id: 2,
      service: "Data Recovery",
      description: "We specialize in advanced data recovery solutions, utilizing state-of-the-art tools and techniques to retrieve lost or inaccessible data. Whether it's personal files or critical business information, we're committed to recovering what matters most.",
      image: "ServicesImages/DataRecovery.jpg"
    },
    {
      id: 3,
      service: "Computer Upgrades",
      description: "Boost your system's speed, storage, and performance with professional upgrade services. Whether for gaming, work, or everyday use, we help extend the life and capability of your machine with optimized, future-ready components.",
      image: "ServicesImages/ComputerUpgrades.jpg"
    },
    {
      id: 4,
      service: "Computer Repairs",
      description: "We offer reliable computer repair services for desktops, laptops, and custom systems. From hardware replacements to software diagnostics, we ensure fast, effective solutions to get your device running smoothly again.",
      image: "ServicesImages/florian-olivo-tGfRYSO0fjg-unsplash.jpg"
    }
  ];

  const currentService = services.find(service => service.id === activeService);



  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/irpk6rtbq">
      <div className={styles.serviceTableContainer}>
        <div className={styles.serviceTabs}>
          {services.map((service) => (
            <div
              key={service.id}
              className={styles.serviceTab}
              onClick={() => setActiveService(service.id)}
            >
              {service.service}
              {activeService === service.id && (
                <motion.div
                  layoutId="activeTab"
                  className={styles.activeTabBackground}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className={styles.serviceContent}>
          <AnimatePresence mode="wait">
            <motion.div
              layoutId="serviceContent"
              key={activeService}
            
          
              className={styles.contentWrapper}
            >
              <div className={styles.contentLayout}>
                <div className={styles.imageSection}>
                  <IKImage 
                    path={currentService.image}
                    alt={currentService.service}
                    className={styles.serviceImage}
                    transformation={[
                      {
                        width: 300,
                        height: 200,
                        cropMode: 'maintain_ratio'
                      }
                    ]}
                  />
                </div>
                <div className={styles.textSection}>
                  <p className={styles.serviceDescription}>
                    {currentService.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className={styles.ctaButton}>
            Get Started
          </button>
        </div>
      </div>

      
      <div className={styles.signUpButtonContainer}>
            <button className={styles.signUpButton}>Sign Up</button>
            <motion.div 
            style={{background:rotatingBg}}
            className={styles.animatedBorder}>
            </motion.div>
        </div>
    </IKContext>
  )
}

