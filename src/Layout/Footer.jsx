import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'

export const Footer = () => {

    return(
        <>
    <div className='footer-container'>

        <div className='footer-services-container'>
            <h1 className='footer-services-title'>Services</h1>

                <Link to="/virus-protection" className='footer-services-text'>Virus Removal</Link>
                <Link to="/data-recovery" className='footer-services-text'>Data Recovery</Link>
                <Link to="/computer-upgrades" className='footer-services-text'>Computer Upgrades</Link>
                <Link to="/computer-repairs" className='footer-services-text'>Computer Repairs</Link>

        </div>

        <div    className='footer-contact-container'>
            <h1 className='footer-contact-title'>Contact</h1>
                <h3 className='footer-contact-text'>Address Here</h3>
                <h3 className='footer-contact-text'>Phone Number Here</h3>

        </div>

       
    </div>

    <div className="footer-social-media-container">
        <FaInstagram className='footer-social-media-icon'/>
        <FaFacebook className='footer-social-media-icon'/>
        <FaTwitter className='footer-social-media-icon'/>
    
    </div>

    </>

    )


}