import React, {useState} from 'react'
import ComputerRepairs from '../../images/ComputerRepairs.jpg'
import ComputerUpgrades from '../../images/ComputerUpgrades.jpg'
import DataRecovery from '../../images/DataRecovery.jpg'
import VirusRemoval from '../../images/Virus.jpg'
import '../../App.css'

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


export const Services = () => {
  const [selectedService, setSelectedService] = useState('Virus Removal')
  const [theme, setTheme] = useState('.selected-service')


  const mappedServices=servicesText.map((service, index)=>{
    return(
      <div  className={`individual-service-container ${theme}`} key={index} onClick={()=>setSelectedService(service)}>
        <h3 className='service-title'>{service}</h3>
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
      <h1 className="services-header-title">Services</h1>
      <div className='services-container'>
        <div className="services-section-container">
          {mappedServices}
        </div>

        <div className='services-information-container'>
          <img src={ComputerRepairs} className='services-information-image' alt="image of service here" />
          <p className='services-information-text'>
            We Remove Viruses, Malware, and other threats from your computer.
            Here are some of the things the right way, and make sure you get the best service.
          </p>

          <div className="services-get-touch-container">
            <button className="services-get-touch-button">Get In Touch</button>
          </div>
        </div>
      </div>
    </>
  )
}
