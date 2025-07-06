import React from 'react';
import { Navigation } from '../Layout/Navigation';
import { Footer } from '../Layout/Footer';

export const AboutPage = () => {
  return (
    <>
      <Navigation />
      <div className="about-container">
        <h1>About Cornwell Computers</h1>
        <p>We are your trusted computer repair and service specialists.</p>
        <p>With years of experience in computer repairs, virus removal, and data recovery, 
           we provide reliable and affordable solutions for all your computer needs.</p>
      </div>
      <Footer />
    </>
  )
} 