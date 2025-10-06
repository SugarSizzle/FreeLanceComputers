import React from 'react';

import { HomePageHeroSection } from '../components/HomePageHeroSection/HomePageHeroSection';
import { HomePageServices } from '../components/HomePageServices/HomePageServices';
import { HomePageStoreSection } from '../components/HomePageStoreSection/HomePageStoreSection';
import { HomePageContact } from '../components/HomePageContact/HomePageContact';

export const HomePage = () => {


    return(
       <>
      
       <HomePageHeroSection />
       <div className="review-section-container">
          <h1>Review Section Here</h1>
        </div>
        <HomePageServices />
       <HomePageStoreSection />
       <HomePageContact />
       
       </>
    )
}