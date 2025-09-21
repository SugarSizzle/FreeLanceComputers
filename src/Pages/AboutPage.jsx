import React from 'react';
import { AboutPageHeroSection } from '../components/AboutComponents/AboutPageHeroSection';
import CustomerReviews from '../components/AboutComponents/CustomerReviews';
import { MeetTheExperts } from '../components/AboutComponents/MeetTheExperts';
import ReachOutToUs from '../components/AboutComponents/ReachOutToUs';
import { SuccessStories } from '../components/AboutComponents/SuccessStories';
import { OurStory } from '../components/AboutComponents/OurStory';
export const AboutPage = () => {
  return (
    <>
      <AboutPageHeroSection />
      <OurStory />
      <SuccessStories />
      <MeetTheExperts />
      <CustomerReviews />
      <ReachOutToUs />
    </>
  )
} 