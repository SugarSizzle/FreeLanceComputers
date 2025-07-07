import React from 'react'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { VirusProtectionHeroSection } from '../components/VirusProtectionHeroSection'
import { VirusProtectionInformation } from '../components/VirusProtectionInformation'
import { VirusDangersInformation } from '../components/VirusDangersInformation'
import { GetInTouch } from '../components/GetInTouch'

export const VirusProtection = () => {
    return (
        <>
            <Navigation/>
            <VirusProtectionHeroSection/>
            <VirusProtectionInformation/>
            <VirusDangersInformation/>
            <GetInTouch/>
            <Footer/>
        </>
    )
}
