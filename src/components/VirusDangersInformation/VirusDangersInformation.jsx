import React, { useRef , useEffect } from 'react'
import styles from './VirusDangersInformation.module.css'
import {motion, useScroll, useTransform} from 'framer-motion'

export const VirusDangersInformation = () => {

    const red = useRef(null)
   

    const {scrollYProgress} = useScroll({
        target: red,
        offset: ["start 100%", "end 1%"]
    })
    const scaleText = useTransform(scrollYProgress, [0.00, .4], [.8, 1])
    const opacityText = useTransform(scrollYProgress, [0.00, .4], [0, 1])
    const scaleImage = useTransform(scrollYProgress, [0.43, .61], [.6, 1])
    const opacityImage = useTransform(scrollYProgress, [0.5, .75], [0, 1])

   


    // useEffect(() => {   
    //     const unsubscribe = scrollYProgressTextContainer.on("change", (value) => {
    //         console.log(` Scroll Y Progress Text ` , value.toFixed(2))
    //     })

    //     return () => unsubscribe()

    // }, [scrollYProgressTextContainer])


    useEffect(() => {

            const unsubscribe = scrollYProgress.on("change", (value) => {
                console.log(` Scroll Y Progress` , value.toFixed(2))
            })

            return () => unsubscribe()

    }, [scrollYProgress])


    return (
        <>
        <motion.div className={styles.virusDangersContainer} ref={red} >
            <motion.div  style={{scale: scaleText, opacity: opacityText}} className={styles.virusDangersInformationContainer}>
                <h3 className={styles.virusDangersInformationHeader}>Defects</h3>
                <h2 className={styles.virusDangersInformationTitle}>A Virus Can Slow Down The Performance Of Your Machine</h2>
                <p className={styles.virusDangersInformationText}> 
                    A virus Infecting Your Machine Can 
                    Potentially Slow It Down, and In Severe 
                    Cases, Render It Unusable.
                </p>
            </motion.div>
                <motion.div  style={{scale: scaleImage, opacity: opacityImage}} className={styles.virusDangersInformationImageContainer}>
                    <div className={styles.virusDangersImageVirus}></div>
                    <div className={styles.virusDangersImageVirusDeath}></div>
                    
            </motion.div>
        </motion.div>
        </>
    )


}