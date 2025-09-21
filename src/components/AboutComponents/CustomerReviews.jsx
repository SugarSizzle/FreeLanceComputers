import React, { useState, useRef, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import styles from './CustomerReviews.module.css';
const testimonials = [
  {
    id: 1,
    name: "Michael Carter",
    title: "Customer Success Manager",
    text: "This CRM has transformed the way we handle customer interactions. The automation features saved us hours of manual work every week, and the analytics have given us insights we never had before.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },

  {
    id: 2,
    name: "David Chen",
    title: "Operations Manager",
    text: "Outstanding customer support and seamless integration with our existing tools. The reporting capabilities have given us unprecedented visibility into our daily operations and workflow.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Marketing Lead",
    text: "The automation workflows have revolutionized our marketing campaigns completely. We're seeing better engagement rates and more qualified leads than ever before.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "James Wilson",
    title: "VP of Technology",
    text: "Robust, scalable, and secure platform that exceeded our expectations. The API integration was smooth, and the system has handled our growth without any performance issues.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "CEO",
    text: "Exceptional service and support from day one. The team went above and beyond to ensure our success and I highly recommend this to any business looking to grow.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Robert Martinez",
    title: "CTO",
    text: "The technical implementation was absolutely flawless from start to finish. Our development team was impressed with the clean architecture and comprehensive documentation.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 7,
    name: "Amanda Foster",
    title: "Head of Sales",
    text: "Game-changing platform that has completely revolutionized our sales process. The ROI has been incredible and our entire team absolutely loves using it daily.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
  }
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(4);
  const avatarContainerRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToAvatar = (index) => {
    if (avatarContainerRef.current) {
      const container = avatarContainerRef.current;
      const normalAvatarWidth = 72; // 4.5rem = 72px
      const activeAvatarWidth = 96; // 6rem = 96px
      const gap = 20; 
      const containerWidth = container.clientWidth;
      
      // Calculate position considering the larger active avatar
      const isActive = index === currentIndex;
      const avatarWidth = isActive ? activeAvatarWidth : normalAvatarWidth;
      const totalAvatarWidth = normalAvatarWidth + gap;
      
      // Calculate the position to center the avatar
      const scrollPosition = (index * totalAvatarWidth) - (containerWidth / 2) + (avatarWidth / 2);
      
      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };


  useEffect(() => {
    scrollToAvatar(currentIndex);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];



  return (
    <div className={`${styles.container} `}>
    
      <div className={styles.innerContainer}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={`${styles.headerTitle1} `}>
            What our customers
          </h2>
          <h2 className={`${styles.headerTitle2} `}>
            are saying
          </h2>
        </div>

        <div className={styles.avatarContainer} ref={avatarContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.id}
              src={testimonial.avatar}
              alt={testimonial.name}
              className={index === currentIndex ? styles.avatarActive : styles.avatar}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className={`${styles.contentContainer} `}>
    
      
          <div className={styles.testimonialCard}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className={`${styles.testimonialText} `}>
                  {currentTestimonial.text}
                </p>
                
                <div>
                  <h3 className={styles.testimonialName}>
                    {currentTestimonial.name}
                  </h3>
                  <p className={styles.testimonialTitle}>
                    {currentTestimonial.title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

 
     

     
        <div className={styles.mobileControls}>
          <button
            onClick={prevTestimonial}
            className={`${styles.arrowButton} `}
          >
            <FaChevronLeft className={styles.arrowIcon} />   
          </button>
          
          <button
            onClick={nextTestimonial}
            className={`${styles.arrowButton} `}
          >
            <FaChevronRight className={styles.arrowIcon}/> 
          </button>
        </div>
      </div>
    </div>
  );
}