import React, { useEffect, useState } from 'react'
import styles from './ComputerRepairsDamages.module.css'
import { supabase } from '../../lib/supabase.js'
import { FaArrowRight } from 'react-icons/fa'
import { ComputerDamagesInfo } from './ComputerDamagesInfo.jsx'

export const ComputerRepairsDamages = () => {

    const [typeOfDamages, setTypeOfDamages] = useState([])
    const [currentDamage, setCurrentDamage] = useState(null)
    const [currentGroup, setCurrentGroup] = useState(0)
    const itemsPerPage = 3

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
            <div 
            onClick={() => setCurrentDamage(damage)}
            key={damage.id || index} className={styles.damageTitleContainer}>
                <p className={styles.damageTitle}>{damage.title}</p>
            </div>
        )
    })


    return(
     
        <div className={styles.computerRepairsDamagesContainer}>
            <p className={styles.computerRepairsDamagesSectionHeader}>Need Repairs?</p>
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
           
            {currentDamage && (
              
                    <ComputerDamagesInfo damage={currentDamage}/>
             
            )}

                <div className={styles.repairsContainer}>
                        <p 
                      
                        className={styles.repairsTitle}>Repairs</p>
                        <FaArrowRight/>
                    </div>

        </div>

            
       
   
        
    )
}