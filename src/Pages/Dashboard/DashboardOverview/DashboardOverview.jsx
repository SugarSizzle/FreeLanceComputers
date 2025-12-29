import React, { useState, useEffect, useRef } from 'react';
import styles from './DashboardOverview.module.css';
import { FaRegClock } from "react-icons/fa";
import {DashboardOverviewServices} from './DashboardOverviewServices.JSX';
import {DashboardActivityFeed} from '../DashboardActivityFeed';
import { DashboardFooter } from '../DashboardFooter/DashboardFooter';
import { useAuth } from '../../../Context/AuthContext';


const Overview = () => {

  const [currentTime, setCurrentTime] = useState(new Date());


  const updateTime = () => {
    setCurrentTime(new Date());
  };


  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };


  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const { session } = useAuth();
  const firstName = session?.name?.split(' ')[0];
  
  console.log(firstName);




  return (

   <>
    

      <div className={styles.welcomeSection}>
        <p className={styles.welcomeText}>Welcome, {firstName.charAt(0).toUpperCase() + firstName.slice(1) || 'User'}</p> 
        <p className={styles.welcomeText}>{formatTime(currentTime)}</p> 
        <p className={styles.welcomeText}>{formatDate(currentTime)}</p> 
      </div>

      <div className={styles.newInfoSection}>
        <div className={styles.newInfoLeft}>
          <h3 className={styles.newInfoSectionTitle}>What's Coming Up</h3>

          <p className={styles.newInfoSectionText}>Appointment: October 3rd, 10:00AM</p>
          <p className={styles.newInfoStatus}>Confirmed</p>
        </div>

        <div className={styles.newInfoRight}>

            <FaRegClock className={styles.newInfoClockIcon} />
            <button className={styles.newInfoButton}>View More</button>
        </div>
      </div>

      <DashboardOverviewServices />
      <DashboardActivityFeed />

      <DashboardFooter />

   

           
   
    </>
 
  );
};

export default Overview;