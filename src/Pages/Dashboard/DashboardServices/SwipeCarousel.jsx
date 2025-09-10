import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Shield, Database, Wrench } from "lucide-react";
import styles from './SwipeCarousel.module.css';
import { SiStyleshare } from "react-icons/si";

const imgs = [
  { name: "Virus Removal", image: "/imgs/nature/1.jpg", icon: <Shield size={24} /> },
  { name: "Data Recovery", image: "/imgs/nature/2.jpg", icon: <Database size={24} /> },
  { name: "Device Repair", image: "/imgs/nature/3.jpg", icon: <Wrench size={24} /> },
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

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
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
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <>
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
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />

     
     
    </div>

    <div className={styles.moreInfoContainer}>
        <button className={styles.moreInfoButton}>Request Service</button>
        <button className={styles.moreInfoButton}>Learn More</button>
    </div>
    </>
  );
};

const Images = ({ imgIndex }) => {
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
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className={styles.carouselImage}
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


