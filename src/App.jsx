import React from 'react'
import './App.css'
import { HeroSection } from './components/HeroSection'
import { Navigation } from './components/Navigation'
import { Services } from './components/Services'
function App() {
  return (
    <div className="App">
        <Navigation />
        <HeroSection />
        
        <div className="review-section-container">
          <h1>Review Section Here</h1>
        </div>

        <Services />
    </div>
  )
}

export default App 