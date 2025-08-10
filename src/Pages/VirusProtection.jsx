import React, { useState } from 'react'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { VirusProtectionHeroSection } from '../components/VirusProtectionHeroSection/VirusProtectionHeroSection'
import { VirusProtectionInformation } from '../components/VirusProtectionInformation/VirusProtectionInformation'
import { VirusDangersInformation } from '../components/VirusDangersInformation/VirusDangersInformation'
import { VirusGetInTouch } from '../components/VirusGetInTouch/VirusGetInTouch'
import { TypeOfVirus } from '../components/TypeOfVirues/TypeOfVirus'
import { UseVirusContext } from '../components/UseVirusContext'


export const VirusProtection = () => {

    


    return (
        <>
            <Navigation/>
            <VirusProtectionHeroSection/>
            <VirusProtectionInformation/>
            <VirusDangersInformation/>
            <UseVirusContext>
                <TypeOfVirus/>
                <VirusGetInTouch/>      
            </UseVirusContext>
            <Footer/>
        </>
    )
}
