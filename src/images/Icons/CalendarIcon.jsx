import React from 'react';
import styles from './CalendarIcon.module.css';


export const CalendarIcon = ({ isActive, onClick }) => {
    
    return (
        <div 
            className={`${styles.calendarIconContainer} ${isActive ? styles.active : ''}`}
            onClick={onClick}
        >
            <p className={styles.calendarIconText}>Appointments</p>
            <svg className={styles.calendarIcon} width="20" height="20" viewBox="0 0 198 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="CalendarIconFrame">
                <g id="Calendar">
                <g className={styles.topBanner} id="TopBanner">
                    <path id="topBanner" d="M0 75C0 69.4772 4.47715 65 10 65H120C125.523 65 130 69.4772 130 75V97H0V75Z" fill="white"/>
                    <path id="leftBump" d="M16 62C16 56.4772 20.4772 52 26 52H28C33.5228 52 38 56.4772 38 62V75H16V62Z" fill="white"/>
                    <path id="rightbump" d="M91 62C91 56.4772 95.4772 52 101 52H103C108.523 52 113 56.4772 113 62V75H91V62Z" fill="white"/>
                </g>
                    <path id="Rectangle 7" d="M0 108H130V198C130 203.523 125.523 208 120 208H10C4.47715 208 0 203.523 0 198V108Z" fill="white"/>
                    <rect id="Rectangle 10" x="91" y="120" width="22" height="23" rx="5" fill="black"/>
                    <rect id="Rectangle 8" x="16" y="120" width="22" height="23" rx="5" fill="black"/>
                    <rect className={styles.appointmentBox} id="appointmentBox" x="54" y="120" width="22" height="23" rx="5" fill="black"/>
                    <rect id="Rectangle 11" x="91" y="165" width="22" height="23" rx="5" fill="black"/>
                    <rect id="Rectangle 12" x="54" y="165" width="22" height="23" rx="5" fill="black"/>
                    <rect id="Rectangle 13" x="16" y="165" width="22" height="23" rx="5" fill="black"/>
                </g>
                <g className={styles.checkmark} id="checkmark">
                    <line id="Line 8" x1="158.25" y1="69.3354" x2="191.51" y2="32.0022" stroke="white" stroke-width="3"/>
                    <line id="Line 7" x1="139.061" y1="47.9504" x2="160.274" y2="69.1636" stroke="white" stroke-width="3"/>
                </g>
                </g>
            </svg>


        </div>
    )
}

