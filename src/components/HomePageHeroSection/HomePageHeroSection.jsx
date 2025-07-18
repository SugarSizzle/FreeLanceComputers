import React from 'react'
import styles from './HomePageHeroSection.module.css'

export  const HomePageHeroSection = () =>{
    return (
      <section className={styles.heroSectionContainer}>
        <div className={styles.heroSection3DContainer}>
         
         </div>

        <div className={styles.mainTextContainer}>

          <h1 className={styles.heroSectionMainText}>
            Bringing Your Tech
            <br />
            To <span className={styles.heroSectionMainTextSpan}>Life</span>
          </h1>
          <p className={styles.heroSectionSecondaryText}>
            Offering A Wide Range of Services To Help You When
            You Most Need It. Always Transparent and Fair
            Ensures You Get The Best Service for the Lowest
            Pricing.
          </p>
        </div>
        
      <div className={styles.heroSectionButtonContainer}>
        <button className={styles.heroSectionGetStartedButton}>Get Started</button>
        <button className={styles.heroSectionGetInTouchButton}>Get In Touch</button>

      </div>
      
      </section>
    );
  };