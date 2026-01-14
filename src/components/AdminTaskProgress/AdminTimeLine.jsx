import React from 'react'
import styles from './AdminTimeLine.module.css'
import {IKContext, IKImage} from 'imagekitio-react'
import {AnimatePresence, motion} from 'framer-motion'

export const AdminTimeLine =  ({taskProgress, selectedUpdate, setSelectedUpdate}) => {

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    const truncateId = (id) => {
        if (!id) return '';
        const idString = id.toString();
        return idString.length > 6 ? `${idString.substring(0, 6)}...` : idString;
    };

    const getStatusClass = (status) => {
        if (!status) return '';
        const statusLower = status.toLowerCase();
        if (statusLower === 'received') return styles.statusReceived;
        if (statusLower === 'reviewing') return styles.statusReviewing;
        if (statusLower === 'in_progress') return styles.statusInProgress;
        if (statusLower === 'completed') return styles.statusCompleted;
        return '';
    };


    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Progress TimeLine</h1>

        <div className={styles.timeLineContainer}>
                { taskProgress && taskProgress.map((task, index) => {
                    const formattedDate = formatDate(task.update_time);
                    const truncatedId = truncateId(task.id);
                    const statusClass = getStatusClass(task.update_type);
                    
                    return (
                    <div 
                    className={styles.timelineItem}
                    key={task.id}>
                        <div className={`${styles.timelineIconWrapper} ${selectedUpdate?.id === task.id ? styles.selected : ''}`}>
                            <AnimatePresence mode='wait'>
                                {selectedUpdate?.id === task.id && (
                                    <motion.div
                                        key={task.id}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        transition={{ duration: 0.5 }}
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                                            <IKImage
                                                path='WebsiteIcon.png?updatedAt=1762629418363'
                                                alt='Task Image'
                                                className={styles.timelineIcon}
                                            />
                                        </IKContext>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div 
                        onClick={() => setSelectedUpdate(task)}
                        className={`${styles.timelineCard} ${selectedUpdate?.id === task.id ? styles.active : ''}`}>
                            <h2 className={styles.title}>{formattedDate}</h2>
                            <p className={styles.description}>Update ID: {truncatedId}</p>
                            <p 
                            style={{fontWeight: '600'}}
                            className={`${styles.description} ${statusClass}`}>{task.update_type}</p>
                        </div>
                    </div>
                    );
                })}
        </div>

        </div>
    )
}