import React from 'react';
import styles from './Present.module.css';

export const Present = ({ isActive, onClick }) => {

  return (
    <div
      className={`${styles.presentContainer} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
        <p className={styles.presentText}>Orders</p>
 
        <svg className={styles.presentSvg} width="25" height="25" viewBox="0 0 150 163" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="PresentFrame">
            <g id="Present">
            <rect className={styles.presentBox} id="Rectangle 17" x="39" y="63" width="54" height="100" fill="white"/>
            <rect className={styles.rightRibbon} id="rightRibbon" x="63.7071" y="71.3553" width="41.9289" height="19.4609" rx="9.73045" transform="rotate(-45 63.7071 71.3553)" fill="black" stroke="white"/>
            <rect className={styles.leftRibbon} id="leftRibbon" x="53.468" y="41.7071" width="41.9289" height="19.4609" rx="9.73045" transform="rotate(45 53.468 41.7071)" fill="black" stroke="white"/>
            <rect id="Rectangle 4" x="25.5" y="63.5" width="99" height="99" rx="19.5" fill="black" stroke="white"/>
            <rect id="Rectangle 6" x="66" y="163" width="100" height="18" transform="rotate(-90 66 163)" fill="white"/>
            <rect className={styles.lid} id="lid" x="25.5" y="63.5" width="99" height="17" rx="8.5" fill="black" stroke="white"/>
            </g>
            </g>
        </svg>



    </div>
  );
};