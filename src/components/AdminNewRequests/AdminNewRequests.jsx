import React from 'react'
import styles from './AdminNewRequests.module.css'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useEffect } from 'react'
import { AdminNewRequestModal } from '../AdminNewRequestModal/AdminNewRequestModal'
import { useNavigate } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'

export const AdminNewRequests = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [newRequests, setNewRequests] = useState([])
    const [expandedTicketId, setExpandedTicketId] = useState(null)
    
    const [priorityFilter, setPriorityFilter] = useState('all')
    const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false)
    
    const [serviceFilter, setServiceFilter] = useState('all')
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
    

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTicket, setSelectedTicket] = useState(null)


    useEffect(() => {


        const fetchNewRequests = async () => {

            try {

                setLoading(true)
                const {data, error} = await supabase
                .from('services_requests')
                .select('*')
                .eq('status', 'pending')

                if(error) throw error

                setNewRequests(data)
            } catch (error) {

                console.error('Error fetching new requests:', error)

            } finally {
                setLoading(false)
            }
        }
        
        fetchNewRequests()
    
    }, [])

    console.log('New requests:', newRequests)


    const getServiceDisplayName = (serviceType) => {
        const serviceMap = {
            'virus_protection': 'Virus Removal',
            'data_recovery': 'Data Recovery',
            'computer_repair': 'Device Repair',
        }
        return serviceMap[serviceType] || serviceType
    }

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

    const handlePrioritySelect = (priority) => {
        setPriorityFilter(priority)
        setIsPriorityDropdownOpen(false)
    }

    const handleServiceSelect = (service) => {
        setServiceFilter(service)
        setIsServiceDropdownOpen(false)
    }

    const calculatePriority = (timestamp) => {
        if (!timestamp) return 'low'
        
        const date = new Date(timestamp)
        const now = new Date()
        const diffInDays = (now - date) / (1000 * 60 * 60 * 24)
        
        if (diffInDays < 1) return 'low'
        else if (diffInDays < 3) return 'medium'
        else return 'high'
    }

    const getSortedRequests = () => {
        const priorityOrder = { high: 3, medium: 2, low: 1 }
        
        return [...newRequests].sort((a, b) => {
          
            const aPriority = calculatePriority(a.requested_at)
            const bPriority = calculatePriority(b.requested_at)
            const aService = a.service_type
            const bService = b.service_type
            
          
            if (serviceFilter !== 'all') {
                const aMatchesService = aService === serviceFilter
                const bMatchesService = bService === serviceFilter
                
                if (aMatchesService && !bMatchesService) return -1
                if (!aMatchesService && bMatchesService) return 1
            }
            
        
            if (priorityFilter !== 'all') {
                const aMatchesPriority = aPriority === priorityFilter
                const bMatchesPriority = bPriority === priorityFilter
                
                if (aMatchesPriority && !bMatchesPriority) return -1
                if (!aMatchesPriority && bMatchesPriority) return 1
            }
            
           
            return priorityOrder[bPriority] - priorityOrder[aPriority]
        })
    }

    const priorityColor = (timestamp) => {
        return calculatePriority(timestamp)
    }
    
    const formatTimestamp = (timestamp) => {
        if (!timestamp) return 'N/A'
        
        const date = new Date(timestamp)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const handleMoreInfoClick = (request) => {
        setSelectedTicket(request)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedTicket(null)
    }

    const handleUpdateSuccess = async () => {
        try {
            const { data, error } = await supabase
                .from('services_requests')
                .select('*')
                .eq('status', 'pending')

            if (error) throw error

            setNewRequests(data)
        } catch (error) {
            console.error('Error refreshing requests:', error)
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.backButtonContainer}>
                <FaChevronLeft className={styles.backButtonIcon}   onClick={() => navigate('/admin-overview')} />
            </div>

            <div className={styles.headerContainer}>
                <h1 className={styles.title}>  Your New Requests</h1>
            </div>

            <div className={styles.filteringContainer}>
                <div className={styles.priorityFilterWrapper}>
                    <button 
                        className={styles.priorityFilterButton}
                        onClick={() => setIsPriorityDropdownOpen(!isPriorityDropdownOpen)}
                    >
                        Priority: {priorityFilter === 'all' ? 'All' : priorityFilter.charAt(0).toUpperCase() + priorityFilter.slice(1)}
                        <span className={styles.dropdownArrow}>{isPriorityDropdownOpen ? '▲' : '▼'}</span>
                    </button>
                    
                    {isPriorityDropdownOpen && (
                        <div className={styles.dropdownMenu}>
                            <div 
                                className={`${styles.dropdownItem} ${priorityFilter === 'all' ? styles.active : ''}`}
                                onClick={() => handlePrioritySelect('all')}
                            >
                                All
                            </div>
                            <div 
                                className={`${styles.dropdownItem} ${priorityFilter === 'high' ? styles.active : ''}`}
                                onClick={() => handlePrioritySelect('high')}
                            >
                                High
                            </div>
                            <div 
                                className={`${styles.dropdownItem} ${priorityFilter === 'medium' ? styles.active : ''}`}
                                onClick={() => handlePrioritySelect('medium')}
                            >
                                Medium
                            </div>
                            <div 
                                className={`${styles.dropdownItem} ${priorityFilter === 'low' ? styles.active : ''}`}
                                onClick={() => handlePrioritySelect('low')}
                            >
                                Low
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.serviceFilterWrapper}>
                    <button 
                        className={styles.serviceFilterButton}
                        onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                    >
                        Service: {serviceFilter === 'all' ? 'All' : getServiceDisplayName(serviceFilter)}
                        <span className={styles.dropdownArrow}>{isServiceDropdownOpen ? '▲' : '▼'}</span>
                    </button>
                    
                    {isServiceDropdownOpen && (
                        <div className={styles.dropdownMenu}>
                            <div 
                                className={`${styles.dropdownItem} ${serviceFilter === 'all' ? styles.active : ''}`}
                                onClick={() => handleServiceSelect('all')}
                            >
                                All
                            </div>
                            <div 
                                className={`${styles.dropdownItem} ${serviceFilter === 'data_recovery' ? styles.active : ''}`}
                                onClick={() => handleServiceSelect('data_recovery')}
                            >
                                Data Recovery
                            </div>
                            <div 
                                className={`${styles.dropdownItem} ${serviceFilter === 'virus_protection' ? styles.active : ''}`}
                                onClick={() => handleServiceSelect('virus_protection')}
                            >
                                Virus Removal
                            </div>
                            <div 
                                className={`${styles.dropdownItem} ${serviceFilter === 'computer_repair' ? styles.active : ''}`}
                                onClick={() => handleServiceSelect('computer_repair')}
                            >
                                Device Repair
                            </div>
                        </div>
                    )}
                </div>

            </div>

            <div className={styles.requestsContainer}>
                    {getSortedRequests().map((request) => (
                        <div key={request.id} className={styles.ticketContainer}>
                            
                            <p className={styles.requestId}>
                                <span className={styles.span}>Ticket Id:</span> #
                                <span 
                                    onClick={() => toggleTicketId(request.id)}
                                    style={{ cursor: String(request.id).length > 6 ? 'pointer' : 'default' }}
                                >
                                    {formatTicketId(request.id)}
                                </span>
                            </p>
                            <p className={styles.requestService}> <span className={styles.span}>Service Type:</span> {getServiceDisplayName(request.service_type)}</p>
                            <p className={styles.requestPriority}> 
                                <span className={styles.span}>Priority:</span> 
                                <span className={styles[`priority${priorityColor(request.requested_at || request.created_at).charAt(0).toUpperCase() + priorityColor(request.requested_at || request.created_at).slice(1)}`]}>
                                    {priorityColor(request.requested_at || request.created_at).charAt(0).toUpperCase() + priorityColor(request.requested_at || request.created_at).slice(1)}
                                </span>
                            </p>
                            <p className={styles.requestDescription}> <span className={styles.span}>Description:</span> {request.description}</p>
                            <p className={styles.requestStatus}> <span className={styles.span}>Status:</span> {request.status}</p>
                            <p className={styles.requestedAt}> <span className={styles.span}>Requested At:</span> {formatTimestamp(request.requested_at || request.created_at)}</p>

                            <div className={styles.moreInfoButtonContainer}>
                                <button 
                                    className={styles.moreInfoButton}
                                    onClick={() => handleMoreInfoClick(request)}
                                >
                                    More Info
                                </button>
                            </div>

                        </div>
                    ))}

    
            <AdminNewRequestModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                ticket={selectedTicket}
                getServiceDisplayName={getServiceDisplayName}
                priorityColor={priorityColor}
                formatTimestamp={formatTimestamp}
                onUpdateSuccess={handleUpdateSuccess}
            />

            </div>

        </div>
    )
}
