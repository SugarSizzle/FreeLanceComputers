import React from 'react'
import styles from './DashboardTimeLine.module.css'
import { IKContext, IKImage } from 'imagekitio-react'
import { AnimatePresence, motion } from 'framer-motion'

export const DashboardTimeLine = ({ taskProgress, selectedUpdate, setSelectedUpdate }) => {

    const formatDate = (dateString) => {
        if (!dateString) return ''
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
    }

    const getStatusLabel = (status) => {
        const statusLabels = {
            'submitted': 'Request Submitted',
            'pending': 'Pending Review',
            'in_progress': 'In Progress',
            'completed': 'Completed',
            'cancelled': 'Cancelled'
        }
        return statusLabels[status] || status
    }

    const getStatusClass = (status) => {
        if (!status) return ''
        const statusLower = status.toLowerCase()
        if (statusLower === 'submitted') return styles.statusSubmitted
        if (statusLower === 'received') return styles.statusReceived
        if (statusLower === 'reviewing') return styles.statusReviewing
        if (statusLower === 'in_progress') return styles.statusInProgress
        if (statusLower === 'completed') return styles.statusCompleted
        if (statusLower === 'cancelled') return styles.statusCancelled
        return ''
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Progress Timeline</h1>

            <div className={styles.timeLineContainer}>
                {taskProgress && taskProgress.map((task, index) => {
                    const formattedDate = formatDate(task.update_time)
                    const statusClass = getStatusClass(task.update_type)

                    return (
                        <div 
                            className={styles.timelineItem}
                            key={task.id}
                        >
                            <div className={`${styles.timelineIconWrapper} ${selectedUpdate?.id === task.id ? styles.selected : ''}`}>
                                <AnimatePresence mode='wait'>
                                    {selectedUpdate?.id === task.id && (
                                        <motion.div
                                            key={task.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
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
                                className={`${styles.timelineCard} ${selectedUpdate?.id === task.id ? styles.active : ''}`}
                            >
                                <h2 className={styles.title}>{formattedDate}</h2>
                                <p 
                                    style={{ fontWeight: '600' }}
                                    className={`${styles.description} ${statusClass}`}
                                >
                                    {getStatusLabel(task.update_type)}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

