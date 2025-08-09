import React, { useState, useEffect } from 'react'
import styles from './TypesOfVirus.module.css'
import { supabase } from '../../lib/supabase'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { VirusesDamages } from './VirusesDamages'




export const TypeOfVirus = () => {

    const [typesOfVirus, setTypesOfVirus] = useState([])
    const [currentVirus, setCurrentVirus] = useState(null)


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
                onClick={() => setCurrentVirus(virus)}
                className={styles.virusTitle}>{virus.type}

                {currentVirus === virus && (
                    <motion.div
                    style={{border: currentVirus === virus ? '1px solid #888888 ' : '1px solid transparent'}}
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