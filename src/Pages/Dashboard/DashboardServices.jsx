import React from 'react';
import styles from './DashboardServices.module.css';

const renderServices = () => {

    const services = [
        { id: 1, type: 'Virus Removal', status: 'In Progress', device: 'Dell Laptop', requestDate: '2024-08-25', estimatedCompletion: '2024-08-29' },
        { id: 2, type: 'Hardware Upgrade', status: 'Completed', device: 'Custom PC', requestDate: '2024-08-20', estimatedCompletion: '2024-08-28' },
        { id: 3, type: 'Data Recovery', status: 'Pending', device: 'MacBook Pro', requestDate: '2024-08-27', estimatedCompletion: '2024-09-02' }
      ];
    return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Services</h2>
        <button className={styles.primaryButton}>
          Request New Service
        </button>
      </div>

      <div className={styles.servicesGrid}>
        <div className={`${styles.card} ${styles.servicesGridWide}`}>
          <h3 className={styles.cardTitle}>Recent Services</h3>
          <div className={styles.statsContainer}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceItem}>
                <div className={styles.serviceItemLeft}>
                  {getStatusIcon(service.status)}
                  <div className={styles.serviceInfo}>
                    <h4>{service.type}</h4>
                    <p>{service.device}</p>
                  </div>
                </div>
                <div className={styles.serviceItemRight}>
                  <span className={getStatusClass(service.status)}>
                    {service.status}
                  </span>
                  <p className={styles.estimatedCompletion}>Est: {service.estimatedCompletion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default renderServices;
