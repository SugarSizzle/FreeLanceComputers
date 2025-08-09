import React, { useState } from 'react'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { VirusProtectionHeroSection } from '../components/VirusProtectionHeroSection/VirusProtectionHeroSection'
import { VirusProtectionInformation } from '../components/VirusProtectionInformation/VirusProtectionInformation'
import { VirusDangersInformation } from '../components/VirusDangersInformation/VirusDangersInformation'
import { VirusGetInTouch } from '../components/VirusGetInTouch/VirusGetInTouch'
import { TypeOfVirus } from '../components/TypeOfVirues/TypeOfVirus'


export const VirusProtection = () => {

    


    return (
        <>
            <Navigation/>
            <VirusProtectionHeroSection/>
            <VirusProtectionInformation/>
            <VirusDangersInformation/>
            <TypeOfVirus/>
            <VirusGetInTouch/>
           
            <Footer/>
        </>
    )
}
