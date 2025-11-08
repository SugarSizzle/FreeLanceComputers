import React , { useState, useEffect } from 'react'
import styles from './AdminOverviewHeroSection.module.css'
import { IKContext, IKImage } from 'imagekitio-react'
import { VirusIcon } from '../../images/Icons/VirusIcon'
import { DataRecoveryIcon } from '../../images/Icons/DataRecoveryIcon'
import { ComputerRepairsIcon } from '../../images/Icons/ComputerRepairsIcon'
import {useTransform, useTime, motion} from 'framer-motion'
import {AnimatePresence} from 'framer-motion'
import { supabase } from '../../lib/supabase'
import { useNavigate } from 'react-router-dom'


export const AdminOverviewHeroSection = () => {

    const [dataRequestsReviewing, setDataRequestsReviewing] = useState(null)
    const [dataRequestsInProgress, setDataRequestsInProgress] = useState(null)
    const [loading, setLoading] = useState(false)
    const [animatedBorder, setAnimatedBorder] = useState(false)
    const [expandedTicketId, setExpandedTicketId] = useState(null)


    const navigate = useNavigate();

    const time = useTime();
    const rotate = useTransform(time, [0, 1000, 3000], [0, -180, -280], {clamp: false});
    const rotatingBg = useTransform(rotate , (r) =>{
        return `conic-gradient(from ${r}deg,rgb(46, 250, 114), transparent, transparent, transparent,transparent)`
    })





    useEffect(() => {
       
        const fetchDataRequests = async () => {

            try {
                setLoading(true);


             


             

                const {data, error} = await supabase
                    .from('service_updates')
                    .select('*')
                    .in('update_type', ['reviewing', 'in_progress'])
                    .order('created_at', {ascending:false})
                    .limit(4);
                
                if(error) {
                    console.error('Supabase error:', error);
                    throw error;
                }
                
                if (data) {
                    
                    const reviewingRequests = data.filter(request => request.update_type === 'reviewing');
                    const inProgressRequests = data.filter(request => request.update_type === 'in_progress');

                    setDataRequestsReviewing(reviewingRequests);
                    setDataRequestsInProgress(inProgressRequests);
                }
            
            } catch (error) {
                console.error('Error fetching data requests:', error.message, error);
            } finally {
                setLoading(false);
            }

        }
        
        fetchDataRequests();
    }, []);
    
    console.log('Current dataRequestsReviewing state:', dataRequestsReviewing);
    console.log('Current dataRequestsInProgress state:', dataRequestsInProgress);
    
    // Format ticket ID to show first 6 characters with "..."
    const formatTicketId = (id) => {
        const idStr = String(id)
        if (idStr.length > 6 && expandedTicketId !== id) {
            return idStr.substring(0, 6) + '...'
        }
        return idStr
    }

    const toggleTicketId = (id) => {
        setExpandedTicketId(expandedTicketId === id ? null : id)
    }

    const formatTimestamp = (timestamp) => {
        if (!timestamp) return 'N/A'
        
        const date = new Date(timestamp)
        const dateStr = date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
        const timeStr = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
        return `${dateStr}, ${timeStr}`
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

            <div
                onClick={() => navigate('/admin-new-requests')}
             className={styles.newRequestContainer}>
               
                    <div className={styles.metallicDiv}>
                        <h2 className={styles.newRequestTitle}>New Requests</h2>
                  
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

                    <motion.svg 
                        className={styles.skinnyBeam} 
                        width="200" 
                        height="150" 
                        viewBox="0 0 84 72" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0 }}
                    >
                        <rect x="63.2179" y="0.701836" width="7" height="7" transform="rotate(52 63.2179 0.701836)" stroke="white" stroke-opacity="0.5"/>
                        <rect x="78.2179" y="22.7018" width="7" height="7" transform="rotate(52 78.2179 22.7018)" stroke="white" stroke-opacity="0.5"/>
                        <rect x="61.8058" y="11" width="18.3471" height="77.1908" transform="rotate(53.1959 61.8058 11)" fill="url(#paint0_linear_398_2)"/>
                        <defs>
                        <linearGradient id="paint0_linear_398_2" x1="70.8251" y1="11" x2="50.5967" y2="82.3701" gradientUnits="userSpaceOnUse">
                        <stop offset="0.278225" stop-color="white" stop-opacity="0.75"/>
                        <stop offset="0.860577" stop-opacity="0.25"/>
                        </linearGradient>
                        </defs>
                    </motion.svg>

                    <motion.svg 
                        className={styles.threeSquares} 
                        width="60" 
                        height="60" 
                        viewBox="0 0 30 44" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <g id="Group 3">
                        <rect id="Rectangle 23" y="14" width="15" height="15" fill="white" fill-opacity="0.5"/>
                        <rect id="Rectangle 25" x="15.25" y="0.25" width="14.5" height="14.5" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                        <rect id="Rectangle 24" x="15" y="29" width="15" height="15" fill="white" fill-opacity="0.5"/>
                        </g>
                    </motion.svg>

                    <motion.svg 
                        className={styles.bigBeam} 
                        width="250" 
                        height="175" 
                        viewBox="0 0 91 88" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
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
                    </motion.svg>


                </div>

            </div>



            <div className={styles.headerContainer}>
                <h3 className={styles.headerTitle}> Current Progress of Jobs </h3>
            </div>
            <div className={styles.requestMoreInfo}>
                  
                   <div className={styles.taskTabsContainer}>
                        <div onClick={() => setAnimatedBorder(true)} className={styles.underReviewTab}>
                            {
                                <>
                                {animatedBorder && <motion.div className={styles.animatedBorder} style={{background:rotatingBg}} />}
                            <div className={styles.tabContent}>
                                <h3 className={styles.underReviewTitle}>Under Review</h3>
                            </div>
                            </>
                            }
                        </div>

                        <div onClick={() => setAnimatedBorder(false)} className={styles.inProgressTab}>
                        {
                        <>
                            {!animatedBorder && <motion.div className={styles.animatedBorder} style={{background:rotatingBg}} />}
                            <div className={styles.tabContent}>
                                <h3 className={styles.inProgressTitle}>In Progress</h3>
                            </div>
                        </>
                            }
                        </div>
                   </div>
                
                <div className={styles.taskInfoTable}>
                    <AnimatePresence mode="wait">
                        {animatedBorder ? (
                            <motion.div
                                key="underReview"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className={styles.taskContainer}
                            >
                                {dataRequestsReviewing && dataRequestsReviewing.map((request) => (
                                    <div 
                                    onClick={() => navigate('/admin-task-progress', { state: { requestData: request } })}
                                    key={request.id} 
                                    className={styles.taskCard}
                                    style={{ cursor: 'pointer' }}>
                                        <div className={styles.taskHeader}>
                                            <span className={styles.requestId}>
                                                Request #
                                                <span 
                                                    onClick={() => toggleTicketId(request.service_request_id)}
                                                    style={{ 
                                                        cursor: String(request.service_request_id).length > 6 ? 'pointer' : 'default',
                                                        textDecoration: String(request.service_request_id).length > 6 ? 'underline' : 'none'
                                                    }}
                                                >
                                                    {formatTicketId(request.service_request_id)}
                                                </span>
                                            </span>
                                            <span className={styles.statusBadge}>{request.update_type}</span>
                                        </div>
                                        <p className={styles.taskNote}>{request.note}</p>
                                        <span className={styles.taskDate}>{formatTimestamp(request.created_at)}</span>
                                    </div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="inProgress"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className={styles.taskContainer}
                            >
                                { dataRequestsInProgress && dataRequestsInProgress.map((request) => (
                                    <div 
                                    onClick={() => navigate('/admin-task-progress', { state: { requestData: request } })}
                                    key={request.id} 
                                    className={styles.taskCard}
                                    style={{ cursor: 'pointer' }}>
                                        <div className={styles.taskHeader}>
                                            <span className={styles.requestId}>
                                                Request #
                                                <span 
                                                    onClick={() => toggleTicketId(request.service_request_id)}
                                                    style={{ 
                                                        cursor: String(request.service_request_id).length > 6 ? 'pointer' : 'default',
                                                        textDecoration: String(request.service_request_id).length > 6 ? 'underline' : 'none'
                                                    }}
                                                >
                                                    {formatTicketId(request.service_request_id)}
                                                </span>
                                            </span>
                                            <span className={styles.statusBadge}>{request.update_type}</span>
                                        </div>
                                        <p className={styles.taskNote}>{request.note}</p>
                                        <span className={styles.taskDate}>{formatTimestamp(request.created_at)}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
          

            </div>


        </div>
    )
}
