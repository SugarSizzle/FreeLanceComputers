import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardReviewOverlay.module.css';

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
            Photo placeholder
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
      
      {showSuccessMessage && (
        <div className={`${styles.successMessage} ${styles.show}`}>
          Thanks for leaving a review!
        </div>
      )}
    </div>
  );
};

export default DashboardReviewOverlay;