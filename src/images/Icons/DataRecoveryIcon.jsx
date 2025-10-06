import React from 'react';
import styles from './DataRecoveryIcon.module.css';



export const DataRecoveryIcon = ({ isActive }) => {

    return (
        <div className={`${styles.dataRecoveryIconContainer} ${isActive ? styles.active : ''}`}>
            <svg width="25" height="25" viewBox="0 0 98 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Data Icon">
                <rect className={styles.largeBar} id="large bar" x="73.5" y="0.5" width="24" height="66" stroke="white"/>
                <rect className={styles.midBar} id="mid bar" x="37.5" y="18.5" width="24" height="48" stroke="white"/>
                <rect className={styles.smallBar} id="small bar" x="0.5" y="41.5" width="24" height="25" stroke="white"/>
                </g>
            </svg>

        </div>
    )
}