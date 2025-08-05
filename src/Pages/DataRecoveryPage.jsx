import React from 'react'

import { DataRecoveryHeroSection } from '../components/DataRecoveryHeroSection/DataRecoveryHeroSection'
import { DataRecoveryStolenInfo } from '../components/DataRecoveryStolenInfo/DataRecoveryStolenInfo'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { DataRecoveryMethods } from '../components/DataRecoveryMethods/DataRecoveryMethods'
import { DataRecoveryGetInTouch } from '../components/DataRecoveryGetInTouch/DataRecoveryGetInTouch'
import { motion } from 'framer-motion'

export const DataRecoveryPage = () => {


    const pageVariants ={
        initial:{opacity:0, x:100, transition:{duration:1, ease:'easeInOut'}},
        animate:{opacity:1, x:0, transition:{duration:1, ease:'easeInOut'}},
        exit:{opacity:0, x:-100, transition:{duration:1, ease:'easeInOut'}},
        transition:{duration:1, ease:'easeInOut'}


    }


    return (
        <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        
        onAnimationComplete={ () => {
            window.scrollTo({top:0, })
        }}
        >
            <Navigation />
            <DataRecoveryHeroSection />
            <DataRecoveryStolenInfo />
            <DataRecoveryMethods />
            <DataRecoveryGetInTouch />
            <Footer />
        </motion.div>
    )




}