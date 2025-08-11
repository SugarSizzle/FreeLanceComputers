import React from 'react'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { ComputerRepairsHeroSection } from '../components/ComputerRepairsHeroSection/ComputerReapairsHeroSection'
import { ComputerRepairsPricing } from '../components/ComputerRepairsPricing/ComputerRepairsPricing'
import { ComputerRepairsDamages } from '../components/ComputerRepairsDamages/ComputerRepairsDamages'
import { ComputerRepairsInformation } from '../components/ComputerRepairsInformation/ComputerRepairsInformation'





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