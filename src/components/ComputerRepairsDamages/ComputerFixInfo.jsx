import React, { useState } from 'react'
import styles from './ComputerFixInfo.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import { FaArrowRight, FaArrowDown } from 'react-icons/fa'




export const ComputerFixInfo = ({damage, onToggle, viewInfo}) => {

    const [showFixes, setShowFixes] = useState(true)
    const [showDiagnostics, setShowDiagnostics] = useState(false)


    const mappedPotentialFixes = damage.fixes.map((item, index) => {
        return (
            <div key={index} className={styles.potentialFixesItemContainer}>
                <p className={styles.potentialFixesItemTitle}>{item}</p>
            </div>
        )
    })

    const mappedDiagnostics = damage.diagnostic.map((item, index) => {
        return (
            <div key={index} className={styles.diagnosticsItemContainer}>
                <p className={styles.diagnosticsItemTitle}>{item}</p>
            </div>
        )
    })



    return (
        <div className={styles.fixInfoEntireContainer}>
            <div className={styles.fixInfoContainer}>
                <div className={styles.fixInfoTitleContainer}>
                    <p
                        className={styles.fixInfoTitle}>{damage.title}</p>
                    
                </div>
            </div>


            <div className={styles.potentialFixesContainer}>
                <div 
                onClick={() => setShowFixes(!showFixes)}
                className={styles.potentialFixesTitleContainer}>
                    <div >
                        <p className={styles.potentialFixesTitle}>Potential Fixes</p>
                        <p className={styles.potentialFixesClickToSee}>Click To See {showFixes ? 'Less' : 'More'}</p>
                    </div>

                    <FaArrowDown
                        className={styles.potentialFixesArrow}
                        style={{
                            color: showFixes ? '#03ff2d' : '#B0B0B0',
                            transform: showFixes ? 'rotate(0deg)' : 'rotate(180deg)'}}      
                     />
                </div>
                <AnimatePresence initial={true}>
                    {showFixes && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ 
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className={styles.potentialFixesList}>
                            {mappedPotentialFixes}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div 
                onClick={() => setShowDiagnostics(!showDiagnostics)}
                className={styles.diagnosticsContainer}>

                    <div className={styles.diagnosticsTitleEntireContainer}>
                        <div className={styles.diagnosticsTitleContainer}>
                            <p className={styles.diagnosticsTitle}>Diagnostics</p>
                            <p className={styles.diagnosticsClickToSee}>Click To See {showDiagnostics ? 'Less' : 'More'}</p>
                        </div>
                        <FaArrowDown 
                            className={styles.diagnosticsArrow}
                            style={{
                            color: showDiagnostics ? '#03ff2d' : '#B0B0B0',
                            transform: showDiagnostics ? 'rotate(0deg)' : 'rotate(180deg)',
                            
                        }
                        
                            }/>
                            
                    </div>
                    <AnimatePresence initial={false}>
                        {showDiagnostics && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ 
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }}
                               >
                                {mappedDiagnostics}
                            </motion.div>
                        )}
                    </AnimatePresence>

            </div>


            <div className={styles.repairsContainer}>
                <div className={styles.requestServiceContainer}>
                    <button className={styles.requestServiceButton}>Request Service</button>
                </div>



                <div 
                    onClick={onToggle}
                    className={styles.pageToggleContainer}>
                    <p 
                    className={styles.toggleText}>{viewInfo ? 'Repairs' : 'Symptoms'}</p>
                    <FaArrowRight
                        className={styles.toggleArrow}
                    />
                </div>
            </div>
        </div>
    )

}
