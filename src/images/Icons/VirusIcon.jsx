import React from 'react';
import styles from './VirusIcon.module.css';

export const VirusIcon = ({ isActive }) => {

    return (
        <div className={`${styles.virusIconContainer} ${isActive ? styles.active : ''}`}>
            <svg width="30" height="30" viewBox="0 0 157 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Virus">
                <line id="Line 1" x1="46.2702" y1="51.2468" x2="11.3407" y2="26.0938" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <circle id="Ellipse 2" cx="7.5" cy="24.5" r="7" fill="white" stroke="white"/>
                <line id="Line 6" x1="91.1121" y1="100.803" x2="124.248" y2="128.276" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <line id="Line 2" x1="102.301" y1="49.3939" x2="136.751" y2="23.5882" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <circle id="Ellipse 3" cx="139.421" cy="20.4001" r="7" transform="rotate(107.406 139.421 20.4001)" fill="white" stroke="white"/>
                <circle id="Ellipse 7" cx="127.387" cy="129.242" r="7" transform="rotate(-176.095 127.387 129.242)" fill="white" stroke="white"/>
                <g className={styles.rightAppendage} id="RightAppendage">
                    <circle id="Ellipse 4" cx="145.647" cy="73.4037" r="7" transform="rotate(146.225 145.647 73.4037)" fill="white" stroke="white"/>
                    <line id="Line 3" x1="98.551" y1="72.7245" x2="141.569" y2="74.2141" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </g>
                <g className={styles.leftBottomAppendage} id="LeftBottomAppendage">
                    <circle id="Ellipse 6" cx="27.4392" cy="119.439" r="7" transform="rotate(-72.1346 27.4392 119.439)" fill="white" stroke="white"/>
                    <line id="Line 5" x1="63.7902" y1="91.0973" x2="29.1344" y2="116.626" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </g>
                <g className={styles.topAppendage} id="TopAppendage">
                    <circle id="Ellipse 5" cx="75.4582" cy="10.4582" r="7" transform="rotate(54.5956 75.4582 10.4582)" fill="white" stroke="white"/>
                    <line id="Line 4" x1="76.1186" y1="57.5547" x2="76.3842" y2="14.5121" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </g>
                    <circle id="VirusBody" cx="75" cy="73" r="49.5" fill="black" stroke="white"/>
                    <circle className={styles.bigCircleBody} id="BigCircleBody" cx="60.5" cy="56.5" r="11" stroke="white" stroke-width="3"/>
                    <circle className={styles.littleCircleBody} id="LittleCircleBody" cx="96.5" cy="89.5" r="6" stroke="white" stroke-width="3"/>
                </g>
            </svg>

        </div>
    )
}
