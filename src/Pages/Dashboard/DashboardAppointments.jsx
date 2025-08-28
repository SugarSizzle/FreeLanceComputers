import React, { useState } from 'react';
import { Settings, X, Shield, Wrench, HardDrive, Calendar, Clock, DollarSign, User, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardAppointments.module.css';

const DashboardAppointments = () => {
  const [showNavPopup, setShowNavPopup] = useState(false);
  const navigate = useNavigate();

  // Define all available services with their routes and icons
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

  // Function to get status class based on status
  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'completed': case 'approved': case 'confirmed':
        return styles.statusCompleted;
      case 'denied':
        return styles.statusDenied;
      case 'pending': case 'counter offer':
        return styles.statusPending;
      default:
        return styles.statusInProgress;
    }
  };

  const renderAppointments = () => {
    const appointments = [
      { 
        id: 301, 
        date: '2024-09-02', 
        time: '10:00 AM', 
        service: 'On-site Setup', 
        status: 'Confirmed',
        technician: { name: 'Mike Johnson', rating: 4.8, phone: '(555) 123-4567', specialty: 'Network Setup' }
      },
      { 
        id: 302, 
        date: '2024-09-05', 
        time: '2:00 PM', 
        service: 'Hardware Diagnostic', 
        status: 'Pending',
        technician: { name: 'Sarah Chen', rating: 4.9, phone: '(555) 987-6543', specialty: 'Hardware Repair' }
      }
    ];

    return (
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Appointments</h2>
          <button className={styles.primaryButton}>
            Schedule Appointment
          </button>
        </div>

        <div className={styles.appointmentsGrid}>
          {appointments.map((appointment) => (
            <div key={appointment.id} className={styles.appointmentItem}>
              <div className={styles.appointmentHeader}>
                <div>
                  <h3 className={styles.appointmentService}>{appointment.service}</h3>
                  <p className={styles.appointmentDateTime}>{appointment.date} at {appointment.time}</p>
                </div>
                <span className={getStatusClass(appointment.status)}>
                  {appointment.status}
                </span>
              </div>

              <div className={styles.technicianSection}>
                <h4 className={styles.technicianTitle}>Assigned Technician</h4>
                <div className={styles.technicianInfo}>
                  <div className={styles.technicianAvatar}>
                    <User className={styles.technicianAvatarIcon} />
                  </div>
                  <div className={styles.technicianDetails}>
                    <p className={styles.technicianName}>{appointment.technician.name}</p>
                    <p className={styles.technicianSpecialty}>{appointment.technician.specialty}</p>
                    <div className={styles.technicianRating}>
                      <span className={styles.ratingStar}>★</span>
                      <span className={styles.ratingValue}>{appointment.technician.rating}</span>
                    </div>
                  </div>
                  <div className={styles.technicianActions}>
                    <button className={styles.iconButton}>
                      <Phone className={styles.iconButtonIcon} />
                    </button>
                    <button className={styles.iconButton}>
                      <Mail className={styles.iconButtonIcon} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.appointmentActions}>
                <button className={`${styles.primaryButton} ${styles.actionButton}`}>
                  Reschedule
                </button>
                <button className={`${styles.secondaryButton} ${styles.actionButton}`}>
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.dashboard}>
      {/* Sticky Header */}
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

      {/* Services Navigation Popup */}
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
        {renderAppointments()}
      </main>
    </div>
  );
};

export default DashboardAppointments;