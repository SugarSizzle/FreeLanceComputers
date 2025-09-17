import React, { useState, useEffect } from 'react'
import styles from './TypesOfVirus.module.css'
import { supabase } from '../../lib/supabase'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { VirusesDamages } from './VirusesDamages'
import { FaViruses } from "react-icons/fa";
import { FaVirus } from "react-icons/fa";
import { GiTrojanHorse } from "react-icons/gi";
import { GiLeechingWorm } from "react-icons/gi";
import { GiSpy } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useVirus } from '../../Context/UseVirusContext'

export const TypeOfVirus = () => {

    const [typesOfVirus, setTypesOfVirus] = useState([])
    const [currentVirus, setCurrentVirus] = useState(null)
    const virusContext = useVirus();
    
   
    if (!virusContext) {
        console.warn('VirusContext is not available');
        return null;
    }
    
    const {selectedVirus, setSelectedVirus} = virusContext;


    console.log(currentVirus)


    useEffect(() => {
        const fetchDataVirus = async () => {
            try {
                const { data, error } = await supabase
                    .from('viruses')
                    .select('*')

                if (error) throw error

                setTypesOfVirus(data)
                if (data && data.length > 0) {
                    setCurrentVirus(data[0])
                }
                console.log('Loaded data:', data)
            } catch (error) {
                console.error('Supabase error:', error)
            }
        }

        fetchDataVirus()
    }, [])

    console.log(typesOfVirus)

    const mappedViruses = typesOfVirus.map((virus, index) => {

        return(
            <motion.li
             
                key={virus.id}
                layoutId={`virus-${virus.id}`}
                style={{
                    color: currentVirus === virus ? '#e53935 ' : '#cccccc'
                }}
                onClick={() => {setCurrentVirus(virus), setSelectedVirus(virus)}}
                className={styles.virusTitle}>
                <div className={styles.virusTitleContent}>
                    <span>{virus.type}</span>
                    {virus.type === 'Trojan' && <GiTrojanHorse className={styles.virusIcon} style={{color: currentVirus === virus ? '#e53935' : '#cccccc'}}/>}
                    {virus.type === 'Adware' && <FaVirus className={styles.virusIcon} style={{color: currentVirus === virus ? '#e53935' : '#cccccc'}}/>}
                    {virus.type === 'Worm' && <GiLeechingWorm className={styles.virusIcon} style={{color: currentVirus === virus ? '#e53935' : '#cccccc'}}/>}
                    {virus.type === 'Spyware' && <GiSpy className={styles.virusIcon} style={{color: currentVirus === virus ? '#e53935' : '#cccccc'}}/>}
                    {virus.type === 'Ransomeware' && <FaViruses className={styles.virusIcon} style={{color: currentVirus === virus ? '#e53935' : '#cccccc'}}/>}
                </div>

                {currentVirus === virus && (
                    <motion.div
                    style={{border: currentVirus === virus ? '1px solid rgba(255,255,255,0.2) ' : '1px solid transparent'}}
                    layoutId={`virus-background`}
                    className={styles.virusBackground}></motion.div>
                )}


            </motion.li>


        )

    })



    





    return (
  <>
       
     
            <div className={styles.typeOfVirusContainer}>
                <div className={styles.virusContainer}>
                    {mappedViruses}
                    <div className={styles.scrollToSeeMoreContainer}>
                    <p className={styles.scrollToSeeMore}>Scroll</p> <FaLongArrowAltRight className={styles.scrollToSeeMoreIcon}/>
                </div>
                </div>
               

                    {
                    currentVirus && (
                    <AnimatePresence mode="wait">
                        <motion.div 
                            className={styles.virusInfoContainer}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            key={`${currentVirus.type}`}>
                            <motion.h3 
                           
                            className={styles.virusInfoHeader}>{currentVirus.type}</motion.h3>
                            <motion.p 
                            className={styles.virusInfoDescription}>{currentVirus.description}</motion.p>
                        </motion.div>
                    </AnimatePresence>
                    )}


 

                <VirusesDamages data={currentVirus} />
                
            </div>

  </>
    )
}

export default TypeOfVirus;