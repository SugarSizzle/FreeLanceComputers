import React from 'react'

import { DataRecoveryHeroSection } from '../components/DataRecoveryHeroSection/DataRecoveryHeroSection'
import { DataRecoveryStolenInfo } from '../components/DataRecoveryStolenInfo/DataRecoveryStolenInfo'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { DataRecoveryMethods } from '../components/DataRecoveryMethods/DataRecoveryMethods'
import { DataRecoveryGetInTouch } from '../components/DataRecoveryGetInTouch/DataRecoveryGetInTouch'

export const DataRecoveryPage = () => {

    return (
        <>
            <Navigation />
            <DataRecoveryHeroSection />
            <DataRecoveryStolenInfo />
            <DataRecoveryMethods />
            <DataRecoveryGetInTouch />
            <Footer />
        </>
    )




}