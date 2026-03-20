import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardOverview.module.css';
import { FaRegClock } from "react-icons/fa";
import {DashboardOverviewServices} from './DashboardOverviewServices.JSX';
import {DashboardActivityFeed} from '../DashboardActivityFeed';
import { DashboardFooter } from '../DashboardFooter/DashboardFooter';
import { useAuth } from '../../../Context/AuthContext';
import {DashboardTickets} from './DashboardTickets';



const Overview = () => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [latestUpdate, setLatestUpdate] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestUpdate = async () => {
      try {
        setUpdateLoading(true);
        const response = await fetch('http://localhost:5000/api/user/tickets/latest-update', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setLatestUpdate(data.update);
        }
      } catch (error) {
        console.error('Error fetching latest update:', error);
      } finally {
        setUpdateLoading(false);
      }
    };

    fetchLatestUpdate();
  }, []);

  const formatServiceType = (serviceType) => {
    if (!serviceType) return '';
    return serviceType
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formatStatus = (status) => {
    if (!status) return '';
    return status
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formatUpdateTime = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    }) + ' at ' + date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

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
  const firstName = session?.name?.split(' ')[0] || 'User';


  return (

   <>
    

      <div className={styles.welcomeSection}>
        <p className={styles.welcomeText}>Welcome, {firstName.charAt(0).toUpperCase() + firstName.slice(1)}</p> 
        <p className={styles.welcomeText}>{formatTime(currentTime)}</p> 
        <p className={styles.welcomeText}>{formatDate(currentTime)}</p> 
      </div>

      <div className={styles.newInfoSection}>
        <div className={styles.newInfoLeft}>
          <h3 className={styles.newInfoSectionTitle}>Latest Service Update</h3>

          {updateLoading ? (
            <p className={styles.newInfoSectionText}>Loading...</p>
          ) : latestUpdate ? (
            <>
              <p className={styles.newInfoSectionText}>
                {formatServiceType(latestUpdate.service_type)}: {formatUpdateTime(latestUpdate.update_time)}
              </p>
              <p className={styles.newInfoStatus}>
                {formatStatus(latestUpdate.previous_status)} → {formatStatus(latestUpdate.new_status)}
              </p>
            </>
          ) : (
            <p className={styles.newInfoSectionText}>No recent updates</p>
          )}
        </div>

        <div className={styles.newInfoRight}>

            <FaRegClock className={styles.newInfoClockIcon} />
            <button 
              className={styles.newInfoButton}
              onClick={() => latestUpdate && navigate(`/dashboard/ticket-progress/${latestUpdate.service_request_id}`)}
              disabled={!latestUpdate}
            >
              View More
            </button>
        </div>
      </div>
      
      <DashboardTickets />
      <DashboardOverviewServices />
      <DashboardActivityFeed />

      <DashboardFooter />

   

           
   
    </>
 
  );
};

export default Overview;