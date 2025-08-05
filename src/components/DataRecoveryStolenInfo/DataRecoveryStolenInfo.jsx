import React, { useRef , useEffect } from 'react'
import styles from './DataRecoveryStolenInfo.module.css'
import { motion , useScroll, useTransform } from 'framer-motion'



export const DataRecoveryStolenInfo = () => {

    const TextRef = useRef(null)
    const imageRef = useRef(null)



    const {scrollYProgress: textScrollYProgress} = useScroll({
        target: TextRef,
        offset: ['start 90%' , 'end 20%']
    })


    const {scrollYProgress: imageScrollYProgress} = useScroll({
        target: imageRef,
        offset: ['start 100%', 'end 10%']
    })

    const Textopacity = useTransform(textScrollYProgress, [.14, .55], [0, 1])
    const textY = useTransform(textScrollYProgress, [.14, .55 ], [200, 0])
    const textScale = useTransform(textScrollYProgress, [.14, .55 ], [.85, 1])


    const imageOpacity = useTransform(imageScrollYProgress, [.2, .44], [0, 1])
    const imageY = useTransform(imageScrollYProgress, [.14, .44], [200, 0])
    const imageScale = useTransform(imageScrollYProgress, [.14, .44], [.85, 1])
   
  


    return (
        <>
        <motion.div 
        ref={TextRef} 
        className={styles.dataRecoveryStolenInfoContainer}
        style={{opacity:Textopacity, y:textY, scale:textScale}}
        // whileInView={{opacity:1, y:0, scale:1}}
        // initial={{opacity:0, y:200, scale:.85}}
        transition={{duration:.3, ease:'easeInOut'}}
        >
       
       

            <p className={styles.dataRecoveryStolenInfoRecoveryText}>Recovery</p>
            <h3 className={styles.dataRecoveryStolenInfoHeader}>Stolen Personal Information Happens Every Day</h3>
            <p className={styles.dataRecoveryStolenInfoText}>Losing Your Personal Information Can Change Your Life, and Happens 
               Frequently. Make Sure You Know Someone To Go To When It Happens. </p>

        </motion.div>

        <motion.div 
        ref={imageRef}
        style={{opacity:imageOpacity, y:imageY, scale:imageScale}} 
        // whileInView={{opacity:1, y:0, scale:1}}
        // initial={{opacity:0, y:200, scale:.85}}
        // transition={{duration:.3, ease:'easeInOut'}}
        className={styles.dataRecoveryStolenInfoImageContainer}>
            <div className={styles.dataRecoveryStolenInfoImage}/>
            <div className={styles.dataRecoveryStolenInfoCodeImage}/>
            

        </motion.div>


        </>
    )



}