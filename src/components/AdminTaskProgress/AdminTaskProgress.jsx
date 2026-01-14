import React, { useEffect, useState } from 'react'
import styles from './AdminTaskProgress.module.css'
import { useLocation } from 'react-router-dom'
import { AdminTimeLine } from './AdminTimeLine'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'



export const AdminTaskProgress = () => {
    const { id } = useParams()
    const [taskProgress, setTaskProgress] = useState([])
    const [selectedUpdate, setSelectedUpdate] = useState(null)
    const [selectedStatus, setSelectedStatus] = useState('')
    const [updateDescription, setUpdateDescription] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { session } = useAuth()

   
    const navigate = useNavigate()

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    }

    const handleSubmitUpdate = async (e) => {
        if(!session || session.role !== 'admin'){
            alert('You are not authorized to update the ticket')
            return
            
        }else{
            console.log('session: ', session)
        }

        e.preventDefault()
        if (!updateDescription.trim()) {
            alert('Please enter a note')
            return
        }

        try {
            const response = await fetch(`http://localhost:5000/api/service-requests/update`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({service_request_id: id, status: selectedStatus, note: updateDescription})
            })
            if(!response.ok){
                throw new Error('Failed to update ticket')
            }
            const data = await response.json()
            console.log('data: ', data)
            alert('Ticket updated successfully')
            navigate('/admin/overview')

        } catch (error) {
            console.error('Error updating ticket:', error)
            alert(error.message || 'Failed to update ticket. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
        

    }
    
    useEffect(() => {

        const fetchTaskProgress = async () => {

            const response = await fetch(`http://localhost:5000/api/service-requests/timeline/${id}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if(!response.ok){
                throw new Error('Failed to fetch timeline')
            }
            const data = await response.json()
            console.log('data: ', data)
            setTaskProgress(data.timeline)

        }

        fetchTaskProgress()
      
    }, [id])

    console.log('taskProgress: ', taskProgress)

  return (
    <div className={styles.container}>

        <div className={styles.backButtonContainer}>
            <FaChevronLeft 

            className={styles.backButtonIcon} 
            onClick={() => navigate('/admin/overview')} />

        </div>
        
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
                            <h3 className={styles.infoCardTitle}>Update ID : {selectedUpdate?.id}</h3>
                            <h3 className={styles.infoCardTitle}>Status : {selectedUpdate?.update_type}</h3>
                            <h3 className={styles.infoCardTitle}>Note : {selectedUpdate?.update_description}</h3>
                            <h3 className={styles.infoCardTitle}>Created : {formatDate(selectedUpdate?.update_time)}</h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className={styles.updateContainer}>
                <form className={styles.updateForm} onSubmit={handleSubmitUpdate}>
                    <h3 className={styles.formTitle}>Update Ticket</h3>

                    <div className={styles.dropdownContainer}>
                        <label className={styles.dropdownLabel}>Status</label>
                        <select 
                            className={styles.dropdown}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                        >
                            <option value="" disabled>Select status</option>
                            <option value="in_progress">in_progress</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>

    
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Update Note</label>
                        <textarea 
                            className={styles.formTextarea}
                            value={updateDescription}
                            onChange={(e) => setUpdateDescription(e.target.value)}
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>Update</button>

                </form>
            </div>

            <AdminTimeLine 
                taskProgress={taskProgress} 
                selectedUpdate={selectedUpdate}
                setSelectedUpdate={setSelectedUpdate}
            />

    </div>
  )
}

