import React from 'react';

import styles from './DashboardServices.module.css';
import {SwipeCarousel} from './SwipeCarousel';
import {FormCollapsable} from './FormCollapsable';
import { DashboardFooter } from '../DashboardFooter';

export const DashboardServices = () => {
 


    return (
        <>
            <div className={styles.sectionContainer}>
            <h3 className={styles.servicesTitle}>Services</h3>
            <SwipeCarousel />
            </div>
            <FormCollapsable />

            <DashboardFooter />
        </>
    )
};


