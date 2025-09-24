import React from 'react'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { ComputerRepairsHeroSection } from '../components/ComputerRepairsHeroSection/ComputerReapairsHeroSection'
import { ComputerRepairsPricing } from '../components/ComputerRepairsPricing/ComputerRepairsPricing'
import { ComputerRepairsDamages } from '../components/ComputerRepairsDamages/ComputerRepairsDamages'
import { ComputerRepairsInformation } from '../components/ComputerRepairsInformation/ComputerRepairsInformation'
import { useAuth } from '../Context/AuthContext'
import { NotSignedIn } from '../components/NotSignedIn/NotSignedIn'






export const ComputerRepairs =() => {

    const { session } = useAuth();



    return(
        <>
       
        <ComputerRepairsHeroSection/>
        <ComputerRepairsInformation/>
        <ComputerRepairsDamages/>
        <ComputerRepairsPricing/>
        {(!session) && (
            <NotSignedIn />
        )}
        
       
        </>
    )
 


}