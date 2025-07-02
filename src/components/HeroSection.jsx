import React from 'react'


export  const HeroSection= () =>{
    return (
      <section className="hero-section-container">
        <div className="hero-section-3D-container">
         
         </div>

        <div className="main-text-container">

          <h1 className="hero-section-main-text">
            Bringing Your Tech
            <br />
            To <span className="">Life</span>
          </h1>
          <p className="hero-section-secondary-text">
            Offering A Wide Range of Services To Help You When
            You Most Need It. Always Transparent and Fair
            Ensures You Get The Best Service for the Lowest
            Pricing.
          </p>
        </div>
        
      <div className="hero-section-button-container">
        <button className="hero-section-get-started-button">Get Started</button>
        <button className="hero-section-get-in-touch-button">Get In Touch</button>

      </div>
      
      </section>
    );
  };