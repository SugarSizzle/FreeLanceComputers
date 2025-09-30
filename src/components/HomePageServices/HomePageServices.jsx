import React, { useState, useRef } from 'react';
import { IKContext, IKImage } from 'imagekitio-react';
import styles from './HomePageServices.module.css';
import Spline from '@splinetool/react-spline';
import { useTime, useTransform , AnimatePresence, motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SplineVirusIcon } from '../../images/SpineIcons/SplineVirusIcon';

export const HomePageServices = () => {

  const [activeService, setActiveService] = useState(3);
  const navigate = useNavigate();
  
  const time = useTime();
  const rotate = useTransform(time, [0, 1000, 3000], [0, -180, -280], {clamp: false});
  const rotatingBg = useTransform(rotate , (r) =>{
      return `conic-gradient(from ${r}deg, #ffffff, transparent, transparent, transparent,transparent)`
  })

  const splineRef = useRef(null);
  const splineVirusRef = useRef(null);



  const triggerVirusIconAnimation = () => {
    if(splineVirusRef.current){
      splineVirusRef.current.emitEvent('mouseDown', 'trigger');
    }
  }

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
    if(serviceId === 1) {
      triggerVirusIconAnimation();
    }
  };

  const handleLearnMoreClick = () => {
    switch(activeService) {
      case 1:
        navigate('/virus-protection');
        break;
      case 2:
        navigate('/data-recovery');
        break;
      case 3:
        navigate('/computer-repairs');
        break;
      default:
        navigate('/computer-repairs');
    }
  };

  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/irpk6rtbq">
      <div className={styles.servicesContainer}>
        <div className={styles.serviceNamesContainer}>
          {/* Virus Removal Service */}
          <div className={styles.serviceWrapper}>
            {activeService === 1 && (
              <motion.div className={styles.animatedBorder} 
                style={{background: rotatingBg}}/>
            )}
            <div 
              className={`${styles.serviceName} ${activeService === 1 ? styles.selected : ''}`}
              onClick={() => handleServiceClick(1)}
            >
              <span>Virus Removal</span>
              <div className={styles.serviceIcon}>
                <SplineVirusIcon splineRef={splineVirusRef} />
              </div>
            </div>
          </div>

        
          <div className={styles.serviceWrapper}>
            {activeService === 2 && (
              <motion.div className={styles.animatedBorder} 
                style={{background: rotatingBg}}/>
            )}
            <div 
              className={`${styles.serviceName} ${activeService === 2 ? styles.selected : ''}`}
              onClick={() => handleServiceClick(2)}
             
            >
              <span>Data Recovery</span>
              <div className={styles.serviceIcon}>
               
          
              </div>
            </div>
          </div>

          {/* Computer Repairs Service */}
          <div className={styles.serviceWrapper}>
            {activeService === 3 && (
              <motion.div className={styles.animatedBorder} 
                style={{background: rotatingBg}}/>
            )}
            <div 
              className={`${styles.serviceName} ${activeService === 3 ? styles.selected : ''}`}
              onClick={() => handleServiceClick(3)}
             
            >
              <span>Computer Repairs</span>
              <div className={styles.serviceIcon}>
             
               
              </div>
            </div>
          </div>
        </div>

        {/* Virus Removal Service Details */}
        {activeService === 1 && (
          <div className={`${styles.serviceDetailsContainer} ${styles.fadeIn}`}>
            <div className={styles.serviceImageContainer}>
              <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                <IKImage 
                  path="ServicesImages/Virus.jpg?updatedAt=1753347115690"
                  alt="Virus Removal"
                  className={styles.serviceImage}
                  transformation={[
                    {
                      width: 600,
                      height: 300,
                      cropMode: 'maintain_ratio'
                    }
                  ]}
                />
              </IKContext>
            </div>
            <div className={styles.serviceTextContainer}>
              <h3 className={styles.serviceTitle}>Virus Removal</h3>
              <p className={styles.serviceDescription}>
                Professional virus removal and malware protection services to keep your computer safe and secure.
              </p>
              <button className={styles.requestServiceButton} onClick={handleLearnMoreClick}>
                Learn More
              </button>
            </div>
          </div>
        )}

        {/* Data Recovery Service Details */}
        {activeService === 2 && (
          <div className={`${styles.serviceDetailsContainer} ${styles.fadeIn}`}>
            <div className={styles.serviceImageContainer}>
              <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
              <IKImage 
                  path="ServicesImages/DataRecovery.jpg?updatedAt=1753347118411"
                  alt="Data Recovery"
                  className={styles.serviceImage}
                  transformation={[
                    {
                      width: 600,
                      height: 300,
                      cropMode: 'maintain_ratio'
                    }
                  ]}
                />
              </IKContext>
            </div>
            <div className={styles.serviceTextContainer}>
              <h3 className={styles.serviceTitle}>Data Recovery</h3>
              <p className={styles.serviceDescription}>
                Expert data recovery services to retrieve your lost files from damaged or corrupted storage devices.
              </p>
              <button className={styles.requestServiceButton} onClick={handleLearnMoreClick}>
                Learn More
              </button>
            </div>
          </div>
        )}

        {/* Computer Repairs Service Details */}
        {activeService === 3 && (
          <div className={`${styles.serviceDetailsContainer} ${styles.fadeIn}`}>
            <div className={styles.serviceImageContainer}>
              <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
              <IKImage 
                  path="ServicesImages/florian-olivo-tGfRYSO0fjg-unsplash.jpg?updatedAt=1753351803265"
                  alt="Computer Repairs"
                  className={styles.serviceImage}
                  transformation={[
                    {
                      width: 600,
                      height: 300,
                      cropMode: 'maintain_ratio'
                    }
                  ]}
                />
              </IKContext>
            </div>
            <div className={styles.serviceTextContainer}>
              <h3 className={styles.serviceTitle}>Computer Repairs</h3>
              <p className={styles.serviceDescription}>
                Comprehensive computer repair services including hardware fixes, software issues, and system optimization.
              </p>
              <button className={styles.requestServiceButton} onClick={handleLearnMoreClick}>
                Learn More
              </button>
            </div>
             
          </div>
        )}
      </div>
    </IKContext>
  )
}