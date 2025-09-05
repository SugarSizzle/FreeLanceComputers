import React from 'react';
import { Navigation } from '../Layout/Navigation';
import { Footer } from '../Layout/Footer';
import { HomePageHeroSection } from '../components/HomePageHeroSection/HomePageHeroSection';
import { HomePageServices } from '../components/HomePageServices/HomePageServices';
import { HomePageStoreSection } from '../components/HomePageStoreSection/HomePageStoreSection';


export const HomePage = () => {


    return(
       <>
      
       <HomePageHeroSection />
       <div className="review-section-container">
          <h1>Review Section Here</h1>
        </div>
        <HomePageServices />
       <HomePageStoreSection />
     
       </>
    )
}