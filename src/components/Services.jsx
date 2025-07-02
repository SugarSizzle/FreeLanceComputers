import React, {useState} from 'react'
import ComputerRepairs from '../images/ComputerRepairs.jpg'
import ComputerUpgrades from '../images/ComputerUpgrades.jpg'
import DataRecovery from '../images/DataRecovery.jpg'
import VirusRemoval from '../images/Virus.jpg'


const servicesText =[
    'We Remove Viruses, Malware, and other threats from your computer.',
    'We Recover Data from your computer.',
    'We Upgrade your computer to the latest and greatest.',
    'We Repair your computer.'
]

const servicesImage =[
    ComputerRepairs,
    ComputerUpgrades,
    DataRecovery,
    VirusRemoval
]

// const [serviceTextState, setServiceTextState] = useState(servicesText)
// const [serviceImageState, setServiceImageState] = useState(servicesImage)

export const Services = () => {

  return (
<>
<h1 className="services-header-title">Services</h1>
    <div className='services-container'>
      <div className="services-section-container">

        <div className="individual-service-container">
            <h3 className='service-title'>Virus Removal</h3>
        </div>

        <div className="individual-service-container">
            <h3 className='service-title'>Data Recovery</h3>
        </div>

        <div className="individual-service-container">
            <h3 className='service-title'>Computer Upgrades</h3>
        </div>

        <div className="individual-service-container">
            <h3 className='service-title'>Computer Repairs</h3>
        </div>
      </div>

    <div className='services-information-container'>
        {/* <img src={serviceImageState} className='services-information-image' alt="image of service here" /> */}
        <p className='services-information-text'>howdy</p>
    </div>


    </div>
</>
  )
}
