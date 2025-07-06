import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export const Navigation = () => {
  return (
    <nav className="navigation-container">
      <div className="website-name-container">
        <Link to="/" className="website-name">Cornwell</Link>
      </div>
      
      <div className="icon-container">
        <a href="#" className="nav-icon">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="nav-icon">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="nav-icon">
          <FaFacebook size={24} />  
        </a>
      </div>
    </nav>
  );
};
