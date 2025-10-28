import React , { useState } from 'react'
import styles from './AdminOverviewHeroSection.module.css'
import { IKContext, IKImage } from 'imagekitio-react'
import { VirusIcon } from '../../images/Icons/VirusIcon'
import { DataRecoveryIcon } from '../../images/Icons/DataRecoveryIcon'
import { ComputerRepairsIcon } from '../../images/Icons/ComputerRepairsIcon'
import { AnimatePresence,motion } from 'framer-motion'
import { GoChevronUp } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";

export const AdminOverviewHeroSection = () => {


    const hardCodedDataReviewRequests = [
        {
            service_request_id: 2,
            id: 1,
            admin_id: 3,
            update_type: 'reviewing',
            note: 'We have noticed damages to the RAM causing blue screens. Investigating further...',
            created_at: '2025-01-01',
        },
        {
            service_request_id: 3,
            id: 2,
            admin_id: 3,
            update_type: 'reviewing',
            note: 'We have noticed damages to the CPU causing slow performance. Investigating further...',
            created_at: '2025-01-01',
        }

    ]

    const hardCodedInProgressRequests = [
        {
            service_request_id: 4,
            id: 3,
            admin_id: 3,
            update_type: 'in_progress',
            note: 'We have revieved that this computer has a virus, we are currently implementing a virus clean up',
            created_at: '2025-01-01',
        },
        {
            service_request_id: 5,
            id: 4,
            admin_id: 3,
            update_type: 'in_progress',
            note: 'We have reviewed that the computer has a power supply issues, we are going to swap them out. ',
            created_at: '2025-01-01',
        }
    ]


    const [inProgress, setInProgress] = useState(false)
    const [underReview, setUnderReview] = useState(false)

    const handleUnderReview = () => {
        setUnderReview(!underReview)
    }
    const handleInProgress = () => {
        setInProgress(!inProgress)
    }

    return (
        <div className={styles.container}>
            <div className={styles.heroSection}>
                <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                    <IKImage
                        className={styles.heroImage}
                        loading='lazy'
                        path='DashboardOverviewHeroSectionDesktop.png?updatedAt=1761628609561'
                        alt='Admin Overview'
                    />
                </IKContext>
            </div>

            <div className={styles.newRequestContainer}>
                <div className={styles.metallicDiv}>
                    <h2>New Requests</h2>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                            <VirusIcon />
                        </button>
                        <button className={styles.button}>
                            <DataRecoveryIcon />
                        </button>
                        <button className={styles.button}>
                            <ComputerRepairsIcon />
                        </button>

                    </div>
                    <svg className={styles.skinnyBeam} width="200" height="150" viewBox="0 0 84 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="63.2179" y="0.701836" width="7" height="7" transform="rotate(52 63.2179 0.701836)" stroke="white" stroke-opacity="0.5"/>
                        <rect x="78.2179" y="22.7018" width="7" height="7" transform="rotate(52 78.2179 22.7018)" stroke="white" stroke-opacity="0.5"/>
                        <rect x="61.8058" y="11" width="18.3471" height="77.1908" transform="rotate(53.1959 61.8058 11)" fill="url(#paint0_linear_398_2)"/>
                        <defs>
                        <linearGradient id="paint0_linear_398_2" x1="70.8251" y1="11" x2="50.5967" y2="82.3701" gradientUnits="userSpaceOnUse">
                        <stop offset="0.278225" stop-color="white" stop-opacity="0.75"/>
                        <stop offset="0.860577" stop-opacity="0.25"/>
                        </linearGradient>
                        </defs>
                    </svg>

                    <svg className={styles.threeSquares} width="60" height="60" viewBox="0 0 30 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 3">
                        <rect id="Rectangle 23" y="14" width="15" height="15" fill="white" fill-opacity="0.5"/>
                        <rect id="Rectangle 25" x="15.25" y="0.25" width="14.5" height="14.5" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                        <rect id="Rectangle 24" x="15" y="29" width="15" height="15" fill="white" fill-opacity="0.5"/>
                        </g>
                    </svg>

                    <svg className={styles.bigBeam} width="250" height="175" viewBox="0 0 91 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 4">
                        <rect id="Rectangle 7" x="34.8682" y="0.706428" width="7" height="7" transform="rotate(47.51 34.8682 0.706428)" stroke="white" stroke-opacity="0.5"/>
                        <rect id="Rectangle 8" x="5.86819" y="30.7064" width="7" height="7" transform="rotate(47.51 5.86819 30.7064)" stroke="white" stroke-opacity="0.5"/>
                        <rect id="Rectangle 3" x="11" y="35.8648" width="33.7174" height="77.1908" transform="rotate(-47.5142 11 35.8648)" fill="url(#paint0_linear_398_4)"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_398_4" x1="42.6584" y1="38.0584" x2="4.1889" y2="98.1674" gradientUnits="userSpaceOnUse">
                        <stop offset="0.278225" stop-color="white" stop-opacity="0.75"/>
                        <stop offset="0.860577" stop-opacity="0.25"/>
                        </linearGradient>
                        </defs>
                    </svg>


                </div>

            </div>

            <div className={styles.requestMoreInfo}>
                <motion.div 
                    className={styles.underReviewContainer}
                    animate={{ 
                        borderBottomWidth: underReview ? '2px' : '1px',
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <h3>Under Review {underReview ? <GoChevronUp onClick={handleUnderReview} /> : <FiChevronDown onClick={handleUnderReview} />}</h3>
                    <AnimatePresence>
                        {underReview && (
                            <motion.div 
                                className={styles.underReviewContent}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                {hardCodedDataReviewRequests.map((request) => (
                                    <div className={styles.requestInfo} key={request.id}>
                                        <div>
                                            <p className={styles.timestamp}>{request.created_at}</p>
                                            <h4 className={styles.note}>{request.note}</h4>
                                        </div>
                                        <div className={styles.adminInfo}>
                                            <p className={styles.adminName}> admin id: {request.admin_id}</p>
                                            <p className={styles.adminRole}> service request id: {request.service_request_id}</p>
                                            <p className={styles.adminRole}> update id: {request.id}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
                
                <motion.div 
                    className={styles.inProgressContainer}
                    animate={{ 
                        borderBottomWidth: inProgress ? '2px' : '1px',
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <h3>In Progress {inProgress ? <GoChevronUp onClick={handleInProgress} /> : <FiChevronDown onClick={handleInProgress} />}</h3>
                    <AnimatePresence>
                        {inProgress && (
                            <motion.div 
                                className={styles.inProgressContent}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                {hardCodedInProgressRequests.map((request) => (
                                    <div className={styles.requestInfo} key={request.id}>
                                        <div>
                                            <p className={styles.timestamp}>{request.created_at}</p>
                                            <h4 className={styles.note}>{request.note}</h4>
                                        </div>
                                        <div className={styles.adminInfo}>
                                            <p className={styles.adminName}> admin id: {request.admin_id}</p>
                                            <p className={styles.adminRole}> service request id: {request.service_request_id}</p>
                                            <p className={styles.adminRole}> update id: {request.id}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>


        </div>
    )
}
