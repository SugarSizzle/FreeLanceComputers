import React from 'react'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { ComputerRepairsHeroSection } from '../components/ComputerReapairsHeroSection'
import { ComputerRepairsPricing } from '../components/ComputerRepairsPricing'
import { ComputerRepairsDamages } from '../components/ComputerRepairsDamages'
import { ComputerRepairsInformation } from '../components/ComputerRepairsInformation'




export const ComputerRepairs =() => {

    return(
        <>
        <Navigation/>
        <ComputerRepairsHeroSection/>
        <ComputerRepairsPricing/>
        <ComputerRepairsDamages/>
        <ComputerRepairsInformation/>
        <Footer/>
        </>
    )
 


}