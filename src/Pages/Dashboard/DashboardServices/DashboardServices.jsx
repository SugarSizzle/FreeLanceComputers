import React from 'react';

import styles from './DashboardServices.module.css';
import {Navigation} from '../../../Layout/Navigation';
import {Footer} from '../../../Layout/Footer';
import {SwipeCarousel} from './SwipeCarousel';
import {FormCollapsable} from './FormCollapsable';
import { DashboardFooter } from '../DashboardFooter';

export const DashboardServices = () => {
 


    return (
        <>
            <Navigation />
            <div className={styles.sectionContainer}>
            <h3 className={styles.servicesTitle}>Services</h3>
            <SwipeCarousel />
            </div>
            <FormCollapsable />

            <Footer />
            <DashboardFooter />
        </>
    )
};


