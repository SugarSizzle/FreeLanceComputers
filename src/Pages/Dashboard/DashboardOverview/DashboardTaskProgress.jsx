import React, { useEffect, useState } from 'react'
import styles from './DashboardTaskProgress.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { DashboardTimeLine } from './DashboardTimeLine'

export const DashboardTaskProgress = () => {
    const { id } = useParams()
    const [taskProgress, setTaskProgress] = useState([])
    const [ticket, setTicket] = useState(null)
    const [selectedUpdate, setSelectedUpdate] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const formatDate = (dateString) => {
        if (!dateString) return ''
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
    }

    const formatServiceType = (serviceType) => {
        if (!serviceType) return ''
        return serviceType
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
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
        const statusClasses = {
            'submitted': styles.statusSubmitted,
            'pending': styles.statusPending,
            'in_progress': styles.statusInProgress,
            'completed': styles.statusCompleted,
            'cancelled': styles.statusCancelled
        }
        return statusClasses[status] || ''
    }

    useEffect(() => {
        const fetchTaskProgress = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch(`http://localhost:5000/api/user/tickets/timeline/${id}`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (!response.ok) {
                    const data = await response.json()
                    throw new Error(data.error || 'Failed to fetch timeline')
                }

                const data = await response.json()
                setTaskProgress(data.timeline)
                setTicket(data.ticket)
            } catch (err) {
                console.error('Error fetching timeline:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchTaskProgress()
    }, [id])

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loadingContainer}>
                    <p>Loading ticket progress...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.container}>
                <div className={styles.backButtonContainer}>
                    <FaChevronLeft 
                        className={styles.backButtonIcon} 
                        onClick={() => navigate('/dashboard/overview')} 
                    />
                </div>
                <div className={styles.errorContainer}>
                    <p>Error: {error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.backButtonContainer}>
                <FaChevronLeft 
                    className={styles.backButtonIcon} 
                    onClick={() => navigate('/dashboard/overview')} 
                />
            </div>

            {/* Ticket Info Card */}
            {ticket && (
                <div className={styles.ticketInfoContainer}>
                    <div className={styles.ticketInfoCard}>
                        <h2 className={styles.ticketTitle}>{formatServiceType(ticket.service_type)}</h2>
                        <div className={styles.ticketDetails}>
                            <p className={styles.ticketDetail}>
                                <span className={styles.detailLabel}>Device:</span> {ticket.device_info}
                            </p>
                            <p className={styles.ticketDetail}>
                                <span className={styles.detailLabel}>Status:</span> 
                                <span className={`${styles.statusBadge} ${getStatusClass(ticket.status)}`}>
                                    {getStatusLabel(ticket.status)}
                                </span>
                            </p>
                            <p className={styles.ticketDetail}>
                                <span className={styles.detailLabel}>Requested:</span> {formatDate(ticket.requested_at)}
                            </p>
                            <p className={styles.ticketDescription}>
                                <span className={styles.detailLabel}>Description:</span> {ticket.description}
                            </p>
                        </div>

                        {ticket.technician_name && (
                            <div className={styles.technicianSection}>
                                <div className={styles.technicianCard}>
                                    {ticket.technician_photo ? (
                                        <img
                                            src={ticket.technician_photo}
                                            alt={ticket.technician_name}
                                            className={styles.technicianPhoto}
                                        />
                                    ) : (
                                        <div className={styles.technicianPhotoPlaceholder}>
                                            {ticket.technician_name.charAt(0)}
                                        </div>
                                    )}
                                    <div className={styles.technicianInfo}>
                                        <p className={styles.technicianLabel}>Assigned Technician</p>
                                        <p className={styles.technicianName}>{ticket.technician_name}</p>
                                        <p className={styles.technicianSpecialty}>{ticket.technician_specialty}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Selected Update Info Card */}
            <div className={styles.infoCardContainer}>
                <AnimatePresence mode='wait'>
                    {selectedUpdate && (
                        <motion.div 
                            key={selectedUpdate.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={styles.infoCard}
                        >
                            <h3 className={styles.currentView}>Currently Viewing</h3>
                            <h3 className={styles.infoCardTitle}>Status: {getStatusLabel(selectedUpdate?.update_type)}</h3>
                            <h3 className={styles.infoCardTitle}>Note: {selectedUpdate?.update_description}</h3>
                            <h3 className={styles.infoCardTitle}>Updated: {formatDate(selectedUpdate?.update_time)}</h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Timeline */}
            {taskProgress.length === 0 ? (
                <div className={styles.noUpdatesContainer}>
                    <p className={styles.noUpdatesText}>No updates yet for this ticket.</p>
                    <p className={styles.noUpdatesSubtext}>Check back later for progress updates.</p>
                </div>
            ) : (
                <DashboardTimeLine 
                    taskProgress={taskProgress} 
                    selectedUpdate={selectedUpdate}
                    setSelectedUpdate={setSelectedUpdate}
                />
            )}
        </div>
    )
}

