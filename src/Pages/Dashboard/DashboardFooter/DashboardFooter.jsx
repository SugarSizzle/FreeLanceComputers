import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Settings, X } from 'lucide-react';
import styles from './DashboardFooter.module.css';

export const DashboardFooter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const services = [
        { name: 'Overview', path: '/dashboard/overview' },
        { name: 'Services', path: '/dashboard/services' },
        { name: 'Orders', path: '/dashboard/orders' },
        { name: 'Appointments', path: '/dashboard/appointments' },
        
   
    ];

    const handleHomeClick = () => {
        navigate('/dashboard/overview');
    };

    const handleServiceClick = (path) => {
        navigate(path);
        setIsServicesOpen(false);
    };

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <div className={styles.dashboardFooter}>
            <div className={styles.footerContent}>
                <button 
                    className={styles.footerButton}
                    onClick={handleHomeClick}
                    title="Dashboard Home"
                >
                    <Home size={24} />
                </button>

                <button 
                    className={styles.footerButton}
                    onClick={toggleServices}
                    title="Services Menu"
                >
                    <Settings size={24} />
                </button>
            </div>

            {isServicesOpen && (
                <div className={styles.servicesOverlay}>
                    <div className={styles.servicesContainer}>
                        <div className={styles.servicesHeader}>
                            <h3 className={styles.servicesTitle}>Dashboard Services</h3>
                            <button 
                                className={styles.closeButton}
                                onClick={() => setIsServicesOpen(false)}
                            >
                                <X size={20} />
                            </button>
                        </div>
                        
                        <div className={styles.servicesList}>
                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    className={`${styles.serviceItem} ${
                                        location.pathname === service.path ? styles.activeService : ''
                                    }`}
                                    onClick={() => handleServiceClick(service.path)}
                                >
                                    {service.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
