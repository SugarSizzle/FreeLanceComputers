import React from 'react';
import { Navigation } from '../Layout/Navigation';
import { Footer } from '../Layout/Footer';
import { HeroSection } from '../components/HeroSection';
import { Services } from '../components/Services';
import { HomePageStoreSection } from '../components/HomePageStoreSection';
import '../App.css'

export const HomePage = () => {


    return(
       <>
       <Navigation />
       <HeroSection />
       <div className="review-section-container">
          <h1>Review Section Here</h1>
        </div>
       <Services />
       <HomePageStoreSection />
       <Footer />
       </>
    )
}