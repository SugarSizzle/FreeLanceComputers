import React from 'react';

import { HomePageHeroSection } from '../components/HomePageHeroSection/HomePageHeroSection';
import { HomePageServices } from '../components/HomePageServices/HomePageServices';
import { HomePageStoreSection } from '../components/HomePageStoreSection/HomePageStoreSection';
import { HomePageContact } from '../components/HomePageContact/HomePageContact';
import { HomePageCustomerFeedback } from '../components/HomePageCustomerFeedback/HomePageCustomerFeedback';
export const HomePage = () => {


    return(
       <>
      
       <HomePageHeroSection />
       <HomePageCustomerFeedback />
        <HomePageServices />
        <HomePageContact />
       <HomePageStoreSection />
       
       
       </>
    )
}