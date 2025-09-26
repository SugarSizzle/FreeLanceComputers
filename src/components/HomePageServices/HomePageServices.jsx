import React, { useState } from 'react';
import { IKContext, IKImage } from 'imagekitio-react';
import styles from './HomePageServices.module.css';
import { useTime, useTransform } from 'framer-motion';

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
      description: "We provide comprehensive malware and virus removal services to protect your system, data, and privacy. Our team uses advanced tools to detect, eliminate, and prevent infections with minimal disruption.",
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
      service: "Computer Repairs",
      description: "We offer reliable computer repair services for desktops, laptops, and custom systems. From hardware replacements to software diagnostics, we ensure fast, effective solutions to get your device running smoothly again.",
      image: "ServicesImages/florian-olivo-tGfRYSO0fjg-unsplash.jpg"
    }
  ];

  const handleServiceClick = (service) => {
    setActiveService(service.id);
  };

  const selectedService = services.find(service => service.id === activeService);

  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/irpk6rtbq">
      <div className={styles.servicesContainer}>
        <div className={styles.serviceNamesContainer}>
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`${styles.serviceName} ${activeService === service.id ? styles.selected : ''}`}
              onClick={() => handleServiceClick(service)}
            >
              {service.service}
            </div>
          ))}
        </div>

        {selectedService && (
          <div className={`${styles.serviceDetails} ${styles.fadeIn}`}>
            <div className={styles.serviceImageContainer}>
              <IKImage 
                path={selectedService.image}
                alt={selectedService.service}
                className={styles.serviceImage}
                transformation={[
                  {
                    width: 600,
                    height: 300,
                    cropMode: 'maintain_ratio'
                  }
                ]}
              />
            </div>
            <div className={styles.serviceTextContainer}>
              <h3 className={styles.serviceTitle}>{selectedService.service}</h3>
              <p className={styles.serviceDescription}>
                {selectedService.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </IKContext>
  )
}