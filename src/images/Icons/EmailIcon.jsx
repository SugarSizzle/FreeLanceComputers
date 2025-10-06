import React from 'react';
import styles from './EmailIcon.module.css';
import { motion } from 'framer-motion';

export const EmailIcon = ({ className }) => {

    return (
        <div className={`${styles.mailWrap} ${className || ''}`}>
        
            <svg width="135" height="134" viewBox="0 0 135 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 1">
                <g id="Rectangle 2" filter="url(#filter0_d_332_13)">
                <rect x="18" y="46" width="100" height="75" rx="5" fill="white"/>
                </g>
                <rect id="Rectangle 3" x="18" y="51" width="100" height="57" fill="url(#paint0_linear_332_13)"/>
                <path 
                    id="Polygon 1" 
                    className={styles.triangleTop}
                    d="M116.118 46.75H19.8818L68 0.691406L116.118 46.75Z" 
                    fill="white" 
                    stroke="black"
                />
                <path id="Polygon 2" d="M121.895 121.5H16.1055L69 86.5986L121.895 121.5Z" fill="white" stroke="black"/>
                <path id="Polygon 4" d="M18.5 49.4941L18.5 119.506L71.0977 84.5L18.5 49.4941Z" fill="white" stroke="black"/>
                <path id="Polygon 3" d="M117.5 46.9658V122.034L67.8281 84.5L117.5 46.9658Z" fill="white" stroke="black"/>
                </g>
                <defs>
                <filter id="filter0_d_332_13" x="14" y="46" width="108" height="83" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_332_13"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_332_13" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_332_13" x1="68" y1="51" x2="68" y2="108" gradientUnits="userSpaceOnUse">
                <stop offset="0.182692" stop-color="#1E1E1E"/>
                <stop offset="0.889423" stop-color="white"/>
                </linearGradient>
                </defs>
</svg>

            
       
        </div>
      );


}




