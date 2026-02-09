import React from 'react'
import styles from './DashboardTickets.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'



export const DashboardTickets = () => {

    const navigate = useNavigate()
    
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    
    const TICKETS_PER_PAGE = 3


    useEffect(() => {

        const fetchUserTickets = async () => {
            try {
                setLoading(true)
                setError(null)
                
                const response = await fetch('http://localhost:5000/api/user/tickets', {
                    method: 'GET',
                    credentials: 'include',
                })
    
                if (!response.ok) {
                    const data = await response.json()
                    throw new Error(data.error || 'Failed to fetch tickets')
                }
    
                const data = await response.json()
                setTickets(data.tickets || [])
            } catch (err) {
                console.error('Error fetching tickets:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchUserTickets()
        
     
      
    }, [])

    console.log('Tickets:', tickets)

    const formatServiceType = (serviceType) => {
        return serviceType
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    const getStatusLabel = (status) => {
        const statusLabels = {
            'pending': 'Pending Review',
            'in_progress': 'In Progress',
            'completed': 'Completed',
            'cancelled': 'Cancelled'
        }
        return statusLabels[status] || status
    }
 
    const getStatusClass = (status) => {
        const statusClasses = {
            'pending': styles.statusPending,
            'in_progress': styles.statusInProgress,
            'completed': styles.statusCompleted,
            'cancelled': styles.statusCancelled
        }
        return statusClasses[status] || ''
    }

    const handleRequestServices = () => {
        navigate('/services')
    }

    const handleTicketClick = (ticketId) => {
        navigate(`/dashboard/ticket-progress/${ticketId}`)
    }

  
    const totalPages = Math.ceil(tickets.length / TICKETS_PER_PAGE)
    const startIndex = (currentPage - 1) * TICKETS_PER_PAGE
    const endIndex = startIndex + TICKETS_PER_PAGE
    const currentTickets = tickets.slice(startIndex, endIndex)

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    if (loading) {
        return (
            <div className={styles.dashboardTickets}>
                <h1 className={styles.dashboardTicketsTitle}>Your Current Tickets</h1>
                <div className={styles.loadingContainer}>
                    <p>Loading your tickets...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.dashboardTickets}>
                <h1 className={styles.dashboardTicketsTitle}>Your Current Tickets</h1>
                <div className={styles.errorContainer}>
                    <p>Error: {error}</p>
                  
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={styles.dashboardTickets}>
                <h1 className={styles.dashboardTicketsTitle}>Your Current Tickets</h1>

                {tickets.length === 0 ? (
                    <div className={styles.noTicketsContainer}>
                        <p className={styles.noTicketsText}>You have no tickets at the moment.</p>
                        <button 
                            onClick={handleRequestServices} 
                            className={styles.requestServicesButton}
                        >
                            Request Services
                        </button>
                    </div>
                ) : (
                    <>
                        <motion.div 
                            className={styles.dashboardTicketsList}
                            layout
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentPage}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className={styles.ticketsPageContainer}
                                >
                                    {currentTickets.map((ticket, index) => (
                                        <motion.div 
                                            className={styles.dashboardTicket} 
                                            key={ticket.id}
                                            onClick={() => handleTicketClick(ticket.id)}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ 
                                                duration: 0.3, 
                                                delay: index * 0.1,
                                                ease: "easeOut" 
                                            }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className={styles.ticketHeader}>
                                                <h2 className={styles.dashboardTicketTitle}>
                                                    {formatServiceType(ticket.service_type)}
                                                </h2>
                                                <span className={`${styles.ticketStatus} ${getStatusClass(ticket.status)}`}>
                                                    {getStatusLabel(ticket.status)}
                                                </span>
                                            </div>
                                            <p className={styles.ticketDevice}> <span className={styles.span}>Device:</span> {ticket.device_info}</p>
                                            <p className={styles.ticketDescription}> <span className={styles.span}>Description:</span> {ticket.description}
                                                {ticket.description.length > 100 
                                                    ? `${ticket.description.substring(0, 100)}...` 
                                                    : ticket.description
                                                }
                                            </p>
                                            <p className={styles.ticketDate}>
                                                <span className={styles.span}>Requested At:</span> {new Date(ticket.requested_at).toLocaleDateString()}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        {totalPages > 1 && (
                            <div className={styles.paginationContainer}>
                                <button 
                                    onClick={handlePrevPage}
                                    disabled={isFirstPage}
                                    className={`${styles.paginationButton} ${isFirstPage ? styles.paginationButtonDisabled : ''}`}
                                >
                                    Previous
                                </button>
                                <span className={styles.paginationInfo}>
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button 
                                    onClick={handleNextPage}
                                    disabled={isLastPage}
                                    className={`${styles.paginationButton} ${isLastPage ? styles.paginationButtonDisabled : ''}`}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}
