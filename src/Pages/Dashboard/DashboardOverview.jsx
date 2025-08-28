import React, { useState } from 'react';
import { Monitor, Settings, X, Shield, Wrench, HardDrive, Calendar, Clock, DollarSign, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardOverview.module.css';

const Overview = () => {
  const [activeTab, setActiveTab] = useState('Services');
  const [showNavPopup, setShowNavPopup] = useState(false);
  const navigate = useNavigate();

 
  const services = [
    { 
      name: 'Services', 
      route: '/dashboardservices', 
      icon: Shield, 
      description: 'Request a service' 
    },
    { 
      name: 'Contact', 
      route: '/contact', 
      icon: User, 
      description: 'Get in touch with our team' 
    },
    { 
      name: 'About', 
      route: '/about', 
      icon: User, 
      description: 'Learn more about our company' 
    },
    { 
      name: 'Orders', 
      route: '/dashboardorders', 
      icon: DollarSign, 
      description: 'View your orders' 
    },
    { 
      name: 'Financing', 
      route: '/dashboardfinancing', 
      icon: DollarSign, 
      description: 'Apply for financing' 
    },
    { 
      name: 'Appointments', 
      route: '/dashboardappointments', 
      icon: Calendar, 
      description: 'View your appointments' 
    },
    { 
      name: 'Activity Feed', 
      route: '/dashboardactivityfeed', 
      icon: Clock,
      description: 'View your activity feed' 
    }
  ];

  const handleServiceClick = (route) => {
    navigate(route);
    setShowNavPopup(false);
  };

  return (
    <div className={styles.dashboard}>
   
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <div className={styles.companyInfo}>
              <h1>Freelance Computers</h1>
            </div>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.welcomeText}>Welcome back, John Doe</span>
            <button 
              className={styles.settingsButton}
              onClick={() => setShowNavPopup(!showNavPopup)}
              title="Open Services Navigation"
            >
              <Settings className={styles.settingsIcon} />
            </button>
          </div>
        </div>
      </header>

      {showNavPopup && (
        <div className={styles.navPopup}>
          <div className={styles.navPopupContent}>
            <div className={styles.navPopupHeader}>
              <h3>Our Services</h3>
              <button 
                className={styles.closeButton}
                onClick={() => setShowNavPopup(false)}
                title="Close Navigation"
              >
                <X className={styles.closeIcon} />
              </button>
            </div>
            <div className={styles.navPopupServices}>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.name}
                    onClick={() => handleServiceClick(service.route)}
                    className={styles.navPopupService}
                  >
                    <div className={styles.serviceIconContainer}>
                      <Icon className={styles.serviceIcon} />
                    </div>
                    <div className={styles.serviceInfo}>
                      <h4>{service.name}</h4>
                      <p>{service.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.welcomeSection}>
          <h2>Welcome to Your Dashboard</h2>
          <p>Click the cog icon to explore our services</p>
        </div>
      </main>
    </div>
  );
};

export default Overview;