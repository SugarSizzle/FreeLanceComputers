import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './DashboardReviewOverlay.module.css';
import { IKImage, IKContext } from 'imagekitio-react'


export const DashboardReviewOverlay = () => {
  const navigate = useNavigate();
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form whenever dependencies change
  useEffect(() => {
    const hasRating = selectedRating > 0;
    const hasText = reviewText.trim().length > 0;
    const hasRecommendation = selectedRecommendation !== null;
    
    setIsFormValid(hasRating && hasText && hasRecommendation);
  }, [selectedRating, reviewText, selectedRecommendation]);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleStarHover = (rating) => {
    setHoveredRating(rating);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const handleRecommendationClick = (recommendation) => {
    setSelectedRecommendation(recommendation);
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSubmit = () => {
    if (isFormValid) {
      setShowSuccessMessage(true);
      
      // Hide success message after 3 seconds and navigate back
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate(-1); // Go back to previous page
      }, 3000);
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const rating = index + 1;
      const isActive = rating <= (hoveredRating || selectedRating);
      
      return (
        <div
          key={rating}
          className={`${styles.star} ${isActive ? styles.active : ''}`}
          onClick={() => handleStarClick(rating)}
          onMouseEnter={() => handleStarHover(rating)}
          onMouseLeave={handleStarLeave}
        >
          {isActive ? '★' : '☆'}
        </div>
      );
    });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent}>
        <div className={styles.header}>
          <div className={styles.backArrow} onClick={handleBackClick}>←</div>
          <div className={styles.title}>Write a Review</div>
        </div>

        <div className={styles.profileSection}>
          <div className={styles.profileImage}>
            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
              <IKImage
                width={200}
                height={250}
                loading='lazy'
                src={'https://ik.imagekit.io/irpk6rtbq/chalo-garcia-2mWKL_I70qk-unsplash.jpg?updatedAt=1757094994513'} className={styles.technicianPhoto} />
            </IKContext>
          </div>
          
          <div className={styles.stars}>
            {renderStars()}
          </div>
        </div>

        <div className={styles.experienceSection}>
          <label className={styles.experienceLabel}>Share your Experience with Steve</label>
          <textarea 
            className={styles.experienceTextarea} 
            placeholder="Write your review here"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>

        <div className={styles.recommendSection}>
          <div className={styles.recommendQuestion}>Would you recommend Steve to your friends?</div>
          <div className={styles.recommendOptions}>
            <div 
              className={`${styles.recommendOption} ${selectedRecommendation === 'yes' ? styles.selected : ''}`}
              onClick={() => handleRecommendationClick('yes')}
            >
              <div className={`${styles.recommendRadio} ${selectedRecommendation === 'yes' ? styles.selected : ''}`}></div>
              <div className={styles.recommendLabel}>Yes</div>
            </div>
            <div 
              className={`${styles.recommendOption} ${selectedRecommendation === 'no' ? styles.selected : ''}`}
              onClick={() => handleRecommendationClick('no')}
            >
              <div className={`${styles.recommendRadio} ${selectedRecommendation === 'no' ? styles.selected : ''}`}></div>
              <div className={styles.recommendLabel}>No</div>
            </div>
          </div>
        </div>

        <button 
          className={`${styles.submitButton} ${isFormValid ? styles.enabled : ''}`}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
      
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div 
            className={styles.successMessage}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.5 
            }}
          >
            <div className={styles.successMessageContent}>
              Thanks for leaving a review!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardReviewOverlay;