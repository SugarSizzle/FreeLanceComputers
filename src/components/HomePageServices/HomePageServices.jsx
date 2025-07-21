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
  const [selectedService, setSelectedService] = useState('Virus Removal')
  const [theme, setTheme] = useState('.selected-service')


  const mappedServices=servicesText.map((service, index)=>{
    return(
      <div  className={`${styles.individualServiceContainer} ${theme}`} key={index} onClick={()=>setSelectedService(service)}>
        <h3 className={styles.serviceTitle}>{service}</h3>
      </div>
    )
  })

  const [selected, setSelected] = useState('Virus Removal')
  



  function BackgroundColorServiceText(){
    if(selectedService === 'Virus Removal'){
      
    }
    else if(selectedService === 'Data Recovery'){
      return 'blue'
    }
    else if(selectedService === 'Computer Upgrades'){
      return 'green'
    }
    else if(selectedService === 'Computer Repairs'){
      return 'yellow'
    }
  }


  return (
    <>
      <h1 className={styles.servicesHeaderTitle}>Services</h1>
      <div className={styles.servicesContainer}>
      
        <LayoutGroup>
        <div className={styles.serviceList}>
          {servicesText.map((service) => (
            <div
              key={service}
              className={styles.serviceItem}
              onClick={() => setSelected(service)}
            >
              {selected === service && (
                <motion.div
                  className={styles.activeBackground}
                  layoutId="highlight"
                  transition={{ type: "tween", stiffness: 600, damping: 0 }}
                />
              )}
              <span className={styles.serviceText}>{service}</span>
            </div>
          ))}
        </div>
      </LayoutGroup>


      

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


      </div>
    </>
  )
}
