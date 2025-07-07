import React from 'react';
import { Navigation } from '../Layout/Navigation';
import { Footer } from '../Layout/Footer';
import { HeroSection } from '../components/HeroSection';
import { Services } from '../components/Services';
import { Store } from '../components/Store';
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
       <Store />
       <Footer />
       </>
    )
}