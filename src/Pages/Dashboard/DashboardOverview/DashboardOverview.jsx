import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Settings, X, Shield, Wrench, HardDrive, Calendar, Clock, DollarSign, User, Bug, Database, ShoppingCart, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardOverview.module.css';
import {Navigation} from '../../../Layout/Navigation';
import {Footer} from '../../../Layout/Footer';
import { FaRegClock } from "react-icons/fa";
import Spline from '@splinetool/react-spline';
import {DashboardOverviewServices} from './DashboardOverviewServices.JSX';
import {RecentActivities} from './RecentActivities.JSX';

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


  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);



  return (

   <>
    

      <div className={styles.welcomeSection}>
        <p className={styles.welcomeText}>Welcome, user</p> 
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
      <RecentActivities />

   

           
             {/* <iframe src="https://my.spline.design/virusicon-3GkORIWP7858sjIHh0p3q9zX-XLh/" frameborder="0" width="100%" height="100%"></iframe>  */}
   
    </>
 
  );
};

export default Overview;