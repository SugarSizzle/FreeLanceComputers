import React, { useState } from 'react'
import styles from './DashboardOverviewServices.module.css'
import { ChevronRight, Settings, ShoppingCart, Calendar, DollarSign } from 'lucide-react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const DashboardOverviewServices = () => {
    const scrollContainerRef = useRef(null);
    const [showScrollArrow, setShowScrollArrow] = useState(true);
    const navigate = useNavigate();

    const services = [
        { name: 'Services', icon: <Settings size={24} />, path: '/dashboard/services' },
        { name: 'Orders', icon: <ShoppingCart size={24} />, path: '/dashboard/orders' },
        { name: 'Appointments', icon: <Calendar size={24} />, path: '/dashboard/appointments' },
        { name: 'Financing', icon: <DollarSign size={24} />, path: '/dashboard/financing' }
      ];
    

    const handleScroll = () => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1; // -1 for rounding errors
          setShowScrollArrow(!isAtEnd);
        }
      };
    
      const scrollToNext = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: 350, // Adjust based on card width + gap
            behavior: 'smooth'
          });
        }
      };


    return (
<div className={styles.servicesContainer}>
        <h3 className={styles.servicesTitle}>Services</h3>
        <div className={styles.servicesScrollWrapper}>
          <div 
            className={styles.servicesScroll}
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {services.map((service, index) => (
              <div 
              key={index} 
              className={styles.serviceCard}
              onClick={() => navigate(service.path)}
              >
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <p className={styles.serviceName}>{service.name}</p>
              </div>
            ))}
          </div>
          {showScrollArrow && (
            <button 
              className={styles.scrollArrow}
              onClick={scrollToNext}
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    )
}

