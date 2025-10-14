import React from 'react'
import styles from './ServicesSecondOverlay.module.css'
import { IoMdArrowBack } from "react-icons/io";
import virusCardBackground from '../../images/virusCardBackground.png';
import dataCardBackground from '../../images/DataRecoveryCardBackground.png';
import computerRepairsCard from '../../images/computerRepairsCard.png';
import { Link } from 'react-router-dom';
import { ComputerRepairCards } from '../../images/Icons/ComputerRepairCards';
import { VirusCard } from '../../images/Icons/VirusCard';
import { DataRecoveryCard } from '../../images/Icons/DataRecoveryCard';

export const ServicesSecondOverlay = ({ onClose }) => {

    return (

        <div className={styles.servicesSecondOverlay}>
            <div className={styles.servicesHeaderContainer}>
                <p className={styles.servicesHeaderSecondOverlay}>Freelance</p>
                <IoMdArrowBack
                 onClick={onClose}
                 className={styles.arrowIcon} />
            </div>

            <div className={styles.cardContainer}>
               

                <Link className={styles.cardVirus} to="/virus-protection">
                    <h3 className={styles.cardTitle}>Virus Removal</h3>
                    <VirusCard />
                </Link>

                <Link className={styles.cardData} to="/data-recovery">
                    <h3 className={styles.cardTitle}>Data Recovery</h3>
                    <DataRecoveryCard />
                </Link>

                <Link  className={styles.cardUpgrade} to="/computer-repairs">
                    <ComputerRepairCards />
                </Link>
            </div>
        </div>
    );
}