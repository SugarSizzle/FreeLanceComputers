import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Shield, Database, Wrench } from "lucide-react";
import styles from './SwipeCarousel.module.css';
import { SiStyleshare } from "react-icons/si";
import VirusImage from '../../../images/Virus.jpg';
import DataRecoveryImage from '../../../images/DataRecovery.webp';
import ComputerRepairsImage from '../../../images/ComputerRepairs.webp';

const imgs = [
  { name: "Virus Removal", image: VirusImage, icon: <Shield size={24} /> },
  { name: "Data Recovery", image: DataRecoveryImage, icon: <Database size={24} /> },
  { name: "Device Repair", image: ComputerRepairsImage, icon: <Wrench size={24} /> },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = ({ onServiceSelect }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const dragX = useMotionValue(0);

  useEffect(() => {
    if (!autoScroll) return;
    
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [autoScroll]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setAutoScroll(false);
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setAutoScroll(false);
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <>
    <p>Click on a card to request a servi</p>
    <div className={styles.carouselContainer}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className={styles.carouselTrack}
      >
        <Images imgIndex={imgIndex} onServiceSelect={onServiceSelect} setAutoScroll={setAutoScroll} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} setAutoScroll={setAutoScroll} />

     
     
    </div>

 
    </>
  );
};

const Images = ({ imgIndex, onServiceSelect, setAutoScroll }) => {
  return (
    <>
      {imgs.map((item, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className={styles.carouselImage}
            onClick={() => {
              setAutoScroll(false);
              onServiceSelect(item.name);
            }}
          >
            <div className={styles.serviceText}>
              {item.name}
            </div>
            <motion.div 
              className={styles.serviceIcon}
          
              animate={{
                scale: imgIndex === idx ? 1.3 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.3,
                delay: 0.5
              }}
            >
              {item.icon}
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className={styles.dotsContainer}>
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`${styles.dot} ${
              idx === imgIndex ? styles.activeDot : styles.inactiveDot
            }`}
          />
        );
      })}
    </div>
  );
};


