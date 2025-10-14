import React from 'react';
import styles from './DataRecoveryCard.module.css';

export const DataRecoveryCard = () => {
    return (
        <svg className={styles.dataRecoverySvg} width="100%" height="100%" viewBox="0 0 250 220" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            
            <defs>
                <pattern id="gridPattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M0 .5H31.5V32" stroke="#b0b0b0" strokeOpacity="0.6" fill="none" strokeWidth="1"/>
                </pattern>
                <pattern id="vibrantGridPattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M0 .5H31.5V32" stroke="#ffffff" strokeOpacity="0.9" fill="none" strokeWidth="1.5"/>
                </pattern>
                <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white"/>
                    <stop offset="100%" stopColor="#b0b0b0"/>
                </linearGradient>
            </defs>
            
            {/* Grid Background Rectangle - starts below text area */}
            <rect x="0" y="35" width="100%" height="100%" fill="url(#gridPattern)"/>
            
            {/* Vibrant Section 1 - Top Right */}
            <rect x="160" y="50" width="64" height="64" fill="url(#vibrantGridPattern)" className={styles.vibrantSection}/>
            
            {/* Vibrant Section 2 - Bottom Left */}
            <rect x="30" y="140" width="64" height="64" fill="url(#vibrantGridPattern)" className={styles.vibrantSection}/>
            
        
        </svg>
    );
};

