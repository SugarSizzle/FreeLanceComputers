import React from 'react';
import styles from './ServicesIcon.module.css';

export const ServicesIcon = ({ isActive, onClick }) => {
    
    return (
        <div 
            className={`${styles.servicesIconContainer} ${isActive ? styles.active : ''}`}
            onClick={onClick}
        >
            <p className={styles.servicesIconText}>Services</p>
            <svg className={styles.servicesIcon} width="20" height="20" viewBox="0 0 174 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="ServicesIconFrame">
                <g className={styles.plug} id="Plug">
                    <path className={styles.outlet1} id="outlet1" d="M108.5 132.5H76.5V118.5H108.5C112.366 118.5 115.5 121.634 115.5 125.5C115.5 129.366 112.366 132.5 108.5 132.5Z" stroke="white"/>
                    <path id="Rectangle" d="M38 73.5H68.5V149.5H38C32.7533 149.5 28.5 145.247 28.5 140V83C28.5 77.7533 32.7533 73.5 38 73.5Z" stroke="white"/>
                    <rect id="Rectangle 14" x="0.5" y="84.5" width="27" height="52" stroke="white"/>
                    <path className={styles.outlet2} id="outlet2" d="M108.5 98.5H76.5V84.5H108.5C112.366 84.5 115.5 87.634 115.5 91.5C115.5 95.366 112.366 98.5 108.5 98.5Z" stroke="white"/>
                </g>
                <g className={styles.electricity} id="electricity">
                    <path className={styles.triangle2} id="triangle2" d="M134.891 39.2401L96.4623 66.2938L87.899 39.8972L134.891 39.2401Z" fill="#D9D9D9"/>
                    <path className={styles.triangle1} id="triangle1" d="M56.3002 40.01L97.3805 17.1834L103.097 44.3392L56.3002 40.01Z" fill="#D9D9D9"/>
                </g>
                </g>
            </svg>

        </div>
    )
}

