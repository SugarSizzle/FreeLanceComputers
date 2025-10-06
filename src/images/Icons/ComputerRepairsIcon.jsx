import React from 'react';
import styles from './ComputerRepairsIcon.module.css';

export const ComputerRepairsIcon = ({ isActive }) => {

    return (
        <div className={`${styles.computerRepairsIconContainer} ${isActive ? styles.active : ''}`}>
                <svg width="25" height="25" viewBox="0 0 127 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 2">
                    <path className={styles.monitor} id="monitor" d="M5 3.11835H92.5977C93.9784 3.11835 95.0977 4.23763 95.0977 5.61835V64.174C95.0977 65.5547 93.9784 66.674 92.5977 66.674H5C3.61929 66.674 2.5 65.5547 2.5 64.174V5.61835C2.5 4.23764 3.61929 3.11835 5 3.11835Z" stroke="white" stroke-width="5"/>
                    <rect className={styles.rectangle} id="Rectangle 16" x="39.0392" y="69.1742" width="16.2663" height="19.1553" fill="white"/>
                    <rect className={styles.rectangle} id="deskstand" x="20.604" y="88.3295" width="54.2212" height="18.1471" fill="white"/>
                    <path className={styles.upgradeArrow} id="upgradeArrow" d="M109.719 56.1908C108.716 55.2381 107.133 55.2758 106.184 56.275L90.7172 72.558C89.7681 73.5572 89.8118 75.1395 90.8147 76.0922C91.8177 77.0449 93.4001 77.0072 94.3492 76.008L108.097 61.5342L122.625 75.3339C123.628 76.2866 125.211 76.2489 126.16 75.2496C127.109 74.2504 127.065 72.6681 126.063 71.7155L109.719 56.1908ZM109.084 97.3193L111.584 97.2597L110.499 57.9404L108 58L105.501 58.0596L106.585 97.3789L109.084 97.3193Z" fill="white"/>
                    </g>
                </svg>


          
        </div>
    )
}




         
