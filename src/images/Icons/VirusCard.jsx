import React from 'react';
import styles from './VirusCard.module.css';

export const VirusCard = () => {
    return (
        <svg className={styles.virusCard} width="60%" height="60%" viewBox="0 0 216 236" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="78.2278" y1="204.103" x2="64.2278" y2="235.103" stroke="white" stroke-width="0.5"/>
            <line x1="32.5517" y1="78.1779" x2="0.714188" y2="66.2041" stroke="white" stroke-width="0.5"/>
            <circle className={styles.virusBody} cx="116" cy="112" r="99.75" fill="black" stroke="url(#paint0_linear_370_7)" stroke-width="0.5"/>
            <circle cx="193.5" cy="201.5" r="2.5" fill="black"/>
            <circle cx="45.5" cy="137.5" r="12.25" fill="black" stroke="white" stroke-width="0.5"/>
            <circle cx="146.5" cy="72.5" r="12.25" fill="black" stroke="url(#paint2_linear_370_7)" stroke-width="0.5"/>
            <circle cx="115.5" cy="112.5" r="37.25" fill="black" stroke="white" stroke-width="0.5"/>
            <circle cx="118.5" cy="109.5" r="2.25" fill="white" stroke="white" stroke-width="0.5"/>
            <circle className={styles.halfCircle} cx="195.5" cy="12.5" r="12" stroke="url(#paint3_linear_370_7)"/>
            <defs>
            <linearGradient id="paint0_linear_370_7" x1="16" y1="114.575" x2="216" y2="109.425" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.861048" stop-color="black"/>
            </linearGradient>
            <linearGradient id="paint1_linear_370_7" x1="191" y1="201.48" x2="196" y2="201.52" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.764423" stop-color="#202020"/>
            </linearGradient>
            <linearGradient id="paint2_linear_370_7" x1="134" y1="85" x2="159" y2="85" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#202020"/>
            </linearGradient>
            <linearGradient id="paint3_linear_370_7" x1="183" y1="12.4899" x2="208" y2="12.5101" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.8" stop-color="black"/>
            </linearGradient>
            </defs>
           
</svg>

    )
}

