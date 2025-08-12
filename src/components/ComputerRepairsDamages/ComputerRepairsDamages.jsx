import React, { useEffect, useState } from 'react'
import styles from './ComputerRepairsDamages.module.css'
import { supabase } from '../../lib/supabase.js'
import { FaArrowRight } from 'react-icons/fa'
import { ComputerDamagesInfo } from './ComputerDamagesInfo.jsx'
import { ComputerFixInfo } from './ComputerFixInfo.jsx'
import { motion, AnimatePresence } from 'framer-motion'

export const ComputerRepairsDamages = () => {

    const [typeOfDamages, setTypeOfDamages] = useState([])
    const [currentDamage, setCurrentDamage] = useState(null)
    const [currentGroup, setCurrentGroup] = useState(0)
    const itemsPerPage = 3
    const [viewInfo, setViewInfo] = useState(true)


    useEffect(() => {
        const fetchDataVirus = async () => {
            try {
                const { data, error } = await supabase
                    .from('repairs')
                    .select('*')

                if (error) throw error

                setTypeOfDamages(data)
                if (data && data.length > 0) {
                    setCurrentDamage(data[0])
                }
                console.log('Loaded data:', data)
            } catch (error) {
                console.error('Supabase error:', error)
            }
        }

        fetchDataVirus()
    }, []) 
    
    

    console.log(currentDamage)

   
    const totalGroups = Math.ceil(typeOfDamages.length / itemsPerPage)
    
  
    const startIndex = currentGroup * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const itemsToShow = typeOfDamages.slice(startIndex, endIndex)

 

    const showNextGroup = () => {
        setCurrentGroup(prev => (prev + 1) % totalGroups)
    }

    const showPreviousGroup = () => {
        setCurrentGroup(prev => prev === 0 ? totalGroups - 1 : prev - 1)
    }

    const shouldShowNavigation = totalGroups > 1


    const mappedDamages = itemsToShow.map((damage, index) => {
        return (
        <AnimatePresence initial={false} mode='wait'>
            <motion.div 
            key={damage.id || index}
            initial={{ x: 300, }}
            animate={{ x: 0,  }}
            exit={{ x: -300, }}
            transition={{ duration: 0.3, ease: "easeInOut", }}
            onClick={() => setCurrentDamage(damage)}
            className={styles.damageTitleContainer}>
                <p className={styles.damageTitle}>{damage.title}</p>
            </motion.div>
        </AnimatePresence>
        )
    })


    return(
     
        <div className={styles.computerRepairsDamagesContainer}>
            
      
            <div className={styles.computerRepairsDamagesListContainer}>
                {currentDamage && mappedDamages }
            </div>
        

            {shouldShowNavigation && (
                <div className={styles.navigationContainer}>
                 
                    <span className={styles.groupIndicator}>
                        Group {currentGroup + 1} of {totalGroups}
                    </span>
                    
                    <p 
                        onClick={showNextGroup}
                        className={styles.navButton}
                    >
                        Next <FaArrowRight/>
                    </p>
                </div>
            )}
                                         <AnimatePresence 
                         initial={false}
                         mode='wait'
                         
                     >
                         {currentDamage && (
                             <AnimatePresence mode="wait">
                                 {viewInfo ? (
                                     <motion.div
                                         key={`damages-${currentDamage.id}`}
                                         initial={{ x: 300, opacity: 0 }}
                                         animate={{ x: 0, opacity: 1 }}
                                         exit={{ x: -300, opacity: 0 }}
                                         transition={{ duration: 0.4, ease: "easeInOut" }}
                                     >
                                         <ComputerDamagesInfo 
                                             damage={currentDamage}
                                             onToggle={() => setViewInfo(!viewInfo)}
                                             viewInfo={viewInfo}
                                         />
                                     </motion.div>
                                 ) : (
                                     <motion.div
                                         key={`fixes-${currentDamage.id}`}
                                         initial={{ x: 300, opacity: 0 }}
                                         animate={{ x: 0, opacity: 1 }}
                                         exit={{ x: -300, opacity: 0 }}
                                         transition={{ duration: 0.4, ease: "easeInOut" }}
                                     >
                                         <ComputerFixInfo 
                                             damage={currentDamage}
                                             onToggle={() => setViewInfo(!viewInfo)}
                                             viewInfo={viewInfo}
                                         />
                                     </motion.div>
                                 )}
                             </AnimatePresence>
                         )}
                     </AnimatePresence>

        </div>

            
       
   
        
    )
}