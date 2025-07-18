import React, {useState} from 'react'
import ComputerRepairs from '../../images/ComputerRepairs.jpg'
import ComputerUpgrades from '../../images/ComputerUpgrades.jpg'
import DataRecovery from '../../images/DataRecovery.jpg'
import VirusRemoval from '../../images/Virus.jpg'
import styles from './HomePageServices.module.css'

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
        <div className={styles.servicesSectionContainer}>
          {mappedServices}
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
      </div>
    </>
  )
}
