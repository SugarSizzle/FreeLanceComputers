import React from 'react'

import { DataRecoveryHeroSection } from '../components/DataRecoveryHeroSection'
import { DataRecoveryStolenInfo } from '../components/DataRecoveryStolenInfo'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { DataRecoveryMethods } from '../components/DataRecoveryMethods'
import { DataRecoveryGetInTouch } from '../components/DataRecoveryGetInTouch'

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