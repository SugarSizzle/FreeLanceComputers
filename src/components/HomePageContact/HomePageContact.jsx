 import React, { useState, useEffect } from 'react'
 import styles from './HomePageContact.module.css'
 import {motion} from 'framer-motion'

import { IKContext, IKImage } from 'imagekitio-react'
import {Present} from '../../images/Icons/Present'
import {CalendarIcon} from '../../images/Icons/CalendarIcon'
import {ServicesIcon} from '../../images/Icons/ServicesIcon'

 export const HomePageContact = ({children}) => {

    const [activeIcon, setActiveIcon] = useState(null);
    const gridBoxSize = 32;
    const BEAM_WIDTH_OFFSET = 1;

    const useWindowSize = () => {
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });


    useEffect(() => {
        const handleResize = () =>
          setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
        window.addEventListener("resize", handleResize);
    
        handleResize();
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
      
      return windowSize;
    };

    const Beam = ({ top, left, transition = {} }) => {
        return (
          <motion.div
            initial={{
              y: 0,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: 32 * 8,
            }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1.5,
              ...transition,
            }}
            style={{
              top,
              left,
            }}
            className={styles.beam}
          />
        );
      };


    const Beams = () => {

        const {width} = useWindowSize();
        const numColumns = width ? Math.floor(width / gridBoxSize) : 0;

        const placements = [

            {
                top:gridBoxSize * 0,
                left: Math.floor(numColumns * 0.05) * gridBoxSize,
                transition:{
                    duration: 3.5,
                    repeatDelay:5,
                    delay:2,
                }
            },
            {
                top: gridBoxSize * 12,
                left: Math.floor(numColumns * 0.15) * gridBoxSize,
                transition: {
                  duration: 3.5,
                  repeatDelay: 10,
                  delay: 4,
                },
              },
              {
                top: gridBoxSize * 3,
                left: Math.floor(numColumns * 0.25) * gridBoxSize,
              },
              {
                top: gridBoxSize * 9,
                left: Math.floor(numColumns * 0.75) * gridBoxSize,
                transition: {
                  duration: 2,
                  repeatDelay: 7.5,
                  delay: 3.5,
                },
              },
              {
                top: 0,
                left: Math.floor(numColumns * 0.7) * gridBoxSize,
                transition: {
                  duration: 3,
                  repeatDelay: 2,
                  delay: 1,
                },
              },
              {
                top: gridBoxSize * 2,
                left: Math.floor(numColumns * 1) * gridBoxSize - gridBoxSize,
                transition: {
                  duration: 5,
                  repeatDelay: 5,
                  delay: 5,
                },
              },

        ];

        return (
        <>
            
            {placements.map((p, i) => (
                <Beam
                key={i}
                top={p.top}
                left={p.left - BEAM_WIDTH_OFFSET}
                transition={p.transition || {}}
                />
            ))}
        </>
        )

    }


    function BGGrid(){

        return (
            <div 
                className={styles.gridBg}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23b0b0b0' stroke-opacity='0.3'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`}}>
                   
                <div className={styles.gridBox}/>
                <Beams/>
            </div>

        )
    }


    return (
      <>
        <div className={styles.getConnectedHeroContainer}>
            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                <IKImage
                    quality={100}
                    className={styles.getConnectedHeroImage}
                    loading='lazy'
                    path='NewGetConnectedDesktop.png?updatedAt=1759807840586'
                    alt='Get Connected'
                />
            </IKContext>
            
        </div>
        <div className={styles.content}>
                <Present 
                    className={styles.presentIcon}
                    isActive={activeIcon === 'orders'}
                    onClick={() => setActiveIcon(activeIcon === 'orders' ? null : 'orders')}
                />
                <CalendarIcon 
                    className={styles.calendarIcon}
                    isActive={activeIcon === 'appointments'}
                    onClick={() => setActiveIcon(activeIcon === 'appointments' ? null : 'appointments')}
                />
                <ServicesIcon 
                    className={styles.servicesIcon}
                    isActive={activeIcon === 'services'}
                    onClick={() => setActiveIcon(activeIcon === 'services' ? null : 'services')}
                />
            </div>
        <div className={styles.gridContainer}>
            
            
            <BGGrid/>
        </div>


    </>
    )
 }
