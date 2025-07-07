import React from 'react'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { VirusProtectionHeroSection } from '../components/VirusProtectionHeroSection'
import { VirusProtectionInformation } from '../components/VirusProtectionInformation'
import { VirusDangersInformation } from '../components/VirusDangersInformation'
import { VirusGetInTouch } from '../components/VirusGetInTouch'

export const VirusProtection = () => {
    return (
        <>
            <Navigation/>
            <VirusProtectionHeroSection/>
            <VirusProtectionInformation/>
            <VirusDangersInformation/>
            <VirusGetInTouch/>
            <Footer/>
        </>
    )
}
