import React, { useState, useRef } from 'react';

import styles from './DashboardServices.module.css';
import {Navigation} from '../../../Layout/Navigation';
import {SwipeCarousel} from './SwipeCarousel';
import { VirusRemovalForm } from './FormComponents/VirusRemovalForm';
import { DataRecoveryForm } from './FormComponents/DataRecoveryForm';
import { ComputerRepairsForm } from './FormComponents/ComputerRepairsForm';
import { DashboardFooter } from '../DashboardFooter/DashboardFooter';

export const DashboardServices = () => {
    const [selectedService, setSelectedService] = useState(null);
    const formRef = useRef(null);

    const handleServiceSelect = (serviceName) => {
        setSelectedService(serviceName);
        
        setTimeout(() => {
            formRef.current?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    };

    const renderForm = () => {
        switch (selectedService) {
            case 'Virus Removal':
                return <VirusRemovalForm formRef={formRef} serviceType='virus_removal' />;
            case 'Data Recovery':
                return <DataRecoveryForm formRef={formRef} serviceType='data_recovery' />;
            case 'Device Repair':
                return <ComputerRepairsForm formRef={formRef} serviceType='device_repair' />;
            default:
                return null;
        }
    };

    return (
        <>
            <Navigation />
            <div className={styles.sectionContainer}>
            <h3 className={styles.servicesTitle}>Services</h3>
            <SwipeCarousel onServiceSelect={handleServiceSelect} />
            </div>
            {renderForm()}

            <DashboardFooter />
        </>
    )
};


