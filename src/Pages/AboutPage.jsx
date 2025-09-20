import React from 'react';
import { AboutPageHeroSection } from '../components/AboutComponents/AboutPageHeroSection';
import CustomerReviews from '../components/AboutComponents/CustomerReviews';
import { MeetTheExperts } from '../components/AboutComponents/MeetTheExperts';
import ReachOutToUs from '../components/AboutComponents/ReachOutToUs';

export const AboutPage = () => {
  return (
    <>
      <AboutPageHeroSection />
      <ReachOutToUs />
      <MeetTheExperts />
      <CustomerReviews />
    </>
  )
} 