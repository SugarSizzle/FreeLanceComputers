import React, { useState } from 'react'
import styles from './AdminNewRequestModal.module.css'
import { IKContext, IKImage, IKUpload } from 'imagekitio-react'
import { AnimatePresence, motion } from 'framer-motion'
import { supabase } from '../../lib/supabase'

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

            async function getAdminID(){

                const {data: {user}, error: userError} = await supabase.auth.getUser();
                if (userError) throw userError
                const currentAdminID = user.id
                return currentAdminID
            }

            const currentAdminID = await getAdminID()

            const { error: updateError } = await supabase
                .from('services_requests')
                .update({ status: updateStatus })
                .eq('id', ticket.id)

            if (updateError) throw updateError

        
            const updateData = {
                admin_id: currentAdminID,
                service_request_id: ticket.id,
                update_type: updateStatus,
                note: updateNote
            }

            const { error: insertError } = await supabase
                .from('service_updates')
                .insert([updateData])

            if (insertError) throw insertError

           
            if (onUpdateSuccess) {
                await onUpdateSuccess()
            }

            
            setUpdateNote('')
            setUploadedImagePath('')
            onClose()
            alert('Ticket updated successfully!')
        } catch (error) {
            console.error('Error updating ticket:', error)
            alert('Failed to update ticket. Please try again.')
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
                            {/* Ticket Information */}
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
                            </div>

                            {/* Update Form */}
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
                                        <option value="reviewing">reviewing</option>
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

