import React, { useState } from 'react'
import styles from './AdminNewRequestModal.module.css'
import { IKContext, IKImage, IKUpload } from 'imagekitio-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuth } from '../../Context/AuthContext'
import { FaChevronDown } from 'react-icons/fa'

export const AdminNewRequestModal = ({ 
    isOpen, 
    onClose, 
    ticket, 
    getServiceDisplayName,
    priorityColor,
    formatTimestamp,
    onUpdateSuccess 
}) => {
    const [updateNote, setUpdateNote] = useState('')
    const [updateStatus, setUpdateStatus] = useState(ticket?.status || 'pending')
    const [uploadedImagePath, setUploadedImagePath] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isCustomerInfoExpanded, setIsCustomerInfoExpanded] = useState(false)

    const { session } = useAuth()


    console.log(ticket)


  

    const handleImageUploadSuccess = (res) => {
        setUploadedImagePath(res.filePath)
    }

    const handleImageUploadError = (err) => {
        console.error('Image upload error:', err)
        alert('Failed to upload image. Please try again.')
    }



    const handleSubmitUpdate = async (e) => {
        e.preventDefault()
      
        if (!updateNote.trim()) {
            alert('Please enter a note')
            return
        }
    
        try {
            setIsSubmitting(true)
    
            const API_URL = 'http://localhost:5000/api/service-requests/update'
    
            const response = await fetch(API_URL, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({service_request_id: ticket.id, status: updateStatus, note: updateNote, image: uploadedImagePath || null}),
            })
    
            const data = await response.json()
            
            if(!response.ok){
                
                console.error('Server error:', data)
                throw new Error(data.error || 'Failed to update ticket')
            }
    
            console.log('Ticket updated successfully:', data)
            
        
            
            setUpdateNote('')
            setUploadedImagePath('')
            onClose()
            alert('Ticket updated successfully!')
    
        } catch (error) {
            console.error('Error updating ticket:', error)
            alert(error.message || 'Failed to update ticket. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleClose = () => {
        setUpdateNote('')
        setUpdateStatus(ticket?.status || 'pending')
        setUploadedImagePath('')
        onClose()
    }

    
    if (!ticket) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.modalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                >
                    <motion.div
                        className={styles.modalContent}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>Ticket Details</h2>
                            <button className={styles.closeButton} onClick={handleClose}>
                                ✕
                            </button>
                        </div>

                        <div className={styles.modalBody}>
                            
                            <div className={styles.ticketInfo}>
                                <div className={styles.infoRow}>
                                    <span className={styles.infoLabel}>Ticket ID:</span>
                                    <span className={styles.infoValue}>#{ticket.id}</span>
                                </div>
                                <div className={styles.infoRow}>
                                    <span className={styles.infoLabel}>Service Type:</span>
                                    <span className={styles.infoValue}>{getServiceDisplayName(ticket.service_type)}</span>
                                </div>
                                <div className={styles.infoRow}>
                                    <span className={styles.infoLabel}>Priority:</span>
                                    <span className={`${styles.infoValue} ${styles[`priority${priorityColor(ticket.requested_at || ticket.created_at).charAt(0).toUpperCase() + priorityColor(ticket.requested_at || ticket.created_at).slice(1)}`]}`}>
                                        {priorityColor(ticket.requested_at || ticket.created_at).charAt(0).toUpperCase() + priorityColor(ticket.requested_at || ticket.created_at).slice(1)}
                                    </span>
                                </div>
                                <div className={styles.infoRow}>
                                    <span className={styles.infoLabel}>Current Status:</span>
                                    <span className={styles.infoValue}>{ticket.status}</span>
                                </div>
                                <div className={styles.infoRow}>
                                    <span className={styles.infoLabel}>Requested At:</span>
                                    <span className={styles.infoValue}>{formatTimestamp(ticket.requested_at || ticket.created_at)}</span>
                                </div>
                                <div className={styles.infoRowColumn}>
                                    <span className={styles.infoLabel}>Description:</span>
                                    <p className={styles.infoDescription}>{ticket.description}</p>
                                </div>

                                

                                <div 
                                    className={styles.customerInfoHeader}
                                    onClick={() => setIsCustomerInfoExpanded(!isCustomerInfoExpanded)}
                                >
                                    <span className={styles.customerInfo}>Customer Info</span>
                                    <FaChevronDown 
                                        className={`${styles.chevronIcon} ${isCustomerInfoExpanded ? styles.chevronRotated : ''}`}
                                    />
                                </div>

                                <AnimatePresence>
                                    {isCustomerInfoExpanded && (
                                        <motion.div 
                                            className={styles.customerInfoContainer}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className={styles.customerNameEmail}>
                                                <p className={styles.customerName}>Name: <br></br> {ticket.firstname} {ticket.lastname}</p>
                                                <p className={styles.customerEmail}>Email: {ticket.email}</p>
                                            </div>

                                            <div className={styles.customerPhoneImage}>
                                                <p className={styles.customerPhone}>Phone: {ticket.phone || 'N/A'}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {ticket.customer_email && (
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>Customer Email:</span>
                                        <span className={styles.infoValue}>{ticket.customer_email}</span>
                                    </div>
                                )}
                                {ticket.customer_phone && (
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>Customer Phone:</span>
                                        <span className={styles.infoValue}>{ticket.customer_phone}</span>

                                    </div>
                                )}
                                {ticket.image && (
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>Customer Image:</span>
                                        <span className={styles.infoValue}>{ticket.image && <img src={ticket.image} alt="Customer Image" /> || 'No image available'}</span>
                                    </div>
                                )}
                            </div>

                           
                            <form className={styles.updateForm} onSubmit={handleSubmitUpdate}>
                                <h3 className={styles.formTitle}>Update Ticket</h3>
                                
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Status</label>
                                    <select 
                                        className={styles.formSelect}
                                        value={updateStatus}
                                        onChange={(e) => setUpdateStatus(e.target.value)}
                                        required
                                    >
                                        <option value="pending">pending</option>
                                        
                                        <option value="in_progress">in_progress</option>
                                        <option value="completed">completed</option>
                                        <option value="cancelled">cancelled</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Update Note</label>
                                    <textarea 
                                        className={styles.formTextarea}
                                        value={updateNote}
                                        onChange={(e) => setUpdateNote(e.target.value)}
                                        placeholder="Enter update note..."
                                        rows="4"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Attach Image (Optional)</label>
                                    <IKContext 
                                        urlEndpoint='https://ik.imagekit.io/irpk6rtbq'
                                        publicKey='public_S2i2+7z8cGwYUPD2VgzXHPvvizY='
                                        authenticationEndpoint='http://localhost:3000/auth'
                                    >
                                        <IKUpload
                                            className={styles.fileInput}
                                            onError={handleImageUploadError}
                                            onSuccess={handleImageUploadSuccess}
                                            fileName={`ticket-${ticket.id}-${Date.now()}.png`}
                                        />
                                    </IKContext>
                                    {uploadedImagePath && (
                                        <div className={styles.uploadedImagePreview}>
                                            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                                                <IKImage
                                                    path={uploadedImagePath}
                                                    transformation={[{ height: 100, width: 100 }]}
                                                    alt="Uploaded preview"
                                                />
                                            </IKContext>
                                        </div>
                                    )}
                                </div>

                                <button 
                                    type="submit" 
                                    className={styles.submitButton}
                                    disabled={isSubmitting}
                                    onClick={handleSubmitUpdate}
                                >
                                    {isSubmitting ? 'Updating...' : 'Submit Update'}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

