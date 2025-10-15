import React, { useState } from 'react'
import styles from './CustomerOrFounderToggle.module.css'
import { FaHeadset } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const CustomerOrFounderToggle = ({ onToggle }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        const newToggleState = !isToggled;
        setIsToggled(newToggleState);
        onToggle(newToggleState);
    };

    return (
        <div className={styles.toggleContainer}>
            <h2 className={styles.sectionTitle}>
                {isToggled ? "Meet the Founders" : "What they're saying"}
            </h2>
            
            <div className={styles.toggleWrapper}>
                <div 
                    className={`${styles.toggleSwitch} ${isToggled ? styles.toggled : ''}`}
                    onClick={handleToggle}
                >
                    <div className={styles.toggleCircle}>
                        {!isToggled ? (
                            <FaHeadset className={styles.toggleIcon} />
                        ) : (
                            <FaUser className={styles.toggleIcon} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
