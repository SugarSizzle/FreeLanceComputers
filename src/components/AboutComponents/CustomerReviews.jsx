import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    name: "Sarah Johnson",
    title: "Sales Director",
    text: "The platform's intuitive design and powerful features have streamlined our entire sales process. Our team productivity has increased by 40% since implementation.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "David Chen",
    title: "Operations Manager",
    text: "Outstanding customer support and seamless integration with our existing tools. The reporting capabilities have given us unprecedented visibility into our operations.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "Marketing Lead",
    text: "The automation workflows have revolutionized our marketing campaigns. We're seeing better engagement rates and more qualified leads than ever before.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "James Wilson",
    title: "VP of Technology",
    text: "Robust, scalable, and secure. The API integration was smooth, and the platform has handled our growth without any performance issues.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
  }
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];



  return (
    <div className={styles.container} className="testimonial-container">
    
    
      <div className={styles.innerContainer}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.headerTitle1} className="header-title">
            What our customers
          </h2>
          <h2 className={styles.headerTitle2} className="header-title">
            are saying
          </h2>
        </div>

        {/* Avatar Row */}
        <div className={styles.avatarContainer}>
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

        {/* Testimonial Content */}
        <div className={styles.contentContainer} className="content-container">
          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className={{...styles.arrowButton, ...styles.leftArrow}}
            className="desktop-arrows"
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4B5563'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
          >
            <ChevronLeft style={{width: '24px', height: '24px', color: '#FFFFFF'}} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className={{...styles.arrowButton, ...styles.rightArrow}}
            className="desktop-arrows"
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4B5563'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
          >
            <ChevronRight style={{width: '24px', height: '24px', color: '#FFFFFF'}} />
          </button>

          {/* Testimonial Card */}
          <div className={styles.testimonialCard}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className={styles.testimonialText} className="testimonial-text">
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

        {/* Desktop Dots Indicator */}
        <div className={styles.dotsContainer} className="desktop-controls">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={{
                ...styles.dot,
                ...(index === currentIndex ? styles.dotActive : styles.dotInactive)
              }}
            />
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="mobile-controls">
          <button
            onClick={prevTestimonial}
            className={styles.arrowButton}
            className="arrow-button"
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4B5563'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
          >
            <ChevronLeft style={{width: '24px', height: '24px', color: '#FFFFFF'}} />
          </button>
          
          <div className="mobile-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={{
                  ...styles.dot,
                  ...(index === currentIndex ? styles.dotActive : styles.dotInactive)
                }}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className={styles.arrowButton}
            className="arrow-button"
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4B5563'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
          >
            <ChevronRight style={{width: '24px', height: '24px', color: '#FFFFFF'}} />
          </button>
        </div>
      </div>
    </div>
  );
}