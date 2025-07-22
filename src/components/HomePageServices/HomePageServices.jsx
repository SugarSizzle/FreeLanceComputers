import React, {useState} from 'react'
import ComputerRepairs from '../../images/ComputerRepairs.jpg'
import ComputerUpgrades from '../../images/ComputerUpgrades.jpg'
import DataRecovery from '../../images/DataRecovery.jpg'
import VirusRemoval from '../../images/Virus.jpg'
import styles from './HomePageServices.module.css'
import { LayoutGroup, motion } from 'framer-motion'

const servicesText =[
    'Virus Removal',
    'Data Recovery',
    'Computer Upgrades',
    'Computer Repairs'
]

const servicesImage =[
    ComputerRepairs,
    ComputerUpgrades,
    DataRecovery,
    VirusRemoval
]




export const HomePageServices = () => {
 
  const mappedServices=servicesText.map((service, index)=>{
    return(
      <div  className={`${styles.individualServiceContainer} `} key={index} onClick={()=>setSelectedService(service)}>
        <h3 className={styles.serviceTitle}>{service}</h3>
      </div>
    )
  })


  const [currentService, setCurrentService] = useState(servicesText[0])
  const [currentServiceImage, setCurrentServiceImage] = useState(servicesImage[0])



  return (
    <>
    



      
  
        <div className={styles.servicesContainer}>
            <ul className={styles.serviceList}>
              {servicesText.map((service, index)=>(
                <>
                <motion.li 
                  key={index} 
                  layoutId='service'
                  onClick={()=>setCurrentService(service)}
                  className={styles.serviceItem}>
                  {service}


                  
                  {currentService === service && (

                  <motion.div layoutId='serviceBackground' id='serviceBackground' className={styles.serviceBackground}/>
)}

                </motion.li>

  
              

                </>
              ))}

            </ul>

        </div>

      

        <div className={styles.servicesInformationContainer}>
          <img src={ComputerRepairs} className={styles.servicesInformationImage} alt="image of service here" />
          <p className={styles.servicesInformationText}>
            We Remove Viruses, Malware, and other threats from your computer.
            Here are some of the things the right way, and make sure you get the best service.
          </p>

          <div className={styles.servicesGetTouchContainer}>
            <button className={styles.servicesGetTouchButton}>Get In Touch</button>
          </div>
        </div>

        <div className={styles.container}>
     
    </div>


  
    </>
  )
}
