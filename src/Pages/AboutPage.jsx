import React from 'react';
import { Navigation } from '../Layout/Navigation';
import { Footer } from '../Layout/Footer';
import CustomerReviews from '../components/AboutComponents/CustomerReviews';
import { MeetTheExperts } from '../components/AboutComponents/MeetTheExperts';
export const AboutPage = () => {
  return (
    <>
    
      <MeetTheExperts />
      <CustomerReviews />
    </>
  )
} 