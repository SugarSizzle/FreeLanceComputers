import React from 'react'
import styles from './DashboardAppointmentsPrevAppointments.module.css'
import { useState } from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IKImage, IKContext } from 'imagekitio-react'
import { useNavigate } from 'react-router-dom'


export const DashboardAppointmentsPrevAppointments = () => {
    const [selectedFilter, setSelectedFilter] = useState(null) // null, 'completed', or 'cancelled'
    const appointmentStatus = 'Completed' // Change this to 'In Progress' or 'Cancelled' to test different colors
    const navigate = useNavigate()


  return (
  <>
    <div className={styles.moreAppointmentsContainer}>
        <p className={styles.moreAppointmentsText}>+2 More Appointments View Here</p>
    </div>

    <div className={styles.appointmentsFilterbuttonsContainer}>
        <button style={selectedFilter === 'completed' ? {backgroundColor: '#ffffff', color: '#000000', 'fontWeight': '800'} : {backgroundColor: '#000000', color: '#b0b0b0', 'fontWeight': '700'}} onClick={() => setSelectedFilter(selectedFilter === 'completed' ? null : 'completed')} className={styles.appointmentsFilterButton}>Completed</button>
        <button style={selectedFilter === 'cancelled' ? {backgroundColor: '#ffffff', color: '#000000', 'fontWeight': '800'} : {backgroundColor: '#000000', color: '#b0b0b0', 'fontWeight': '700'}} onClick={() => setSelectedFilter(selectedFilter === 'cancelled' ? null : 'cancelled')} className={styles.appointmentsFilterButton}>Cancelled</button>
    </div>

    <div className={styles.appointmentsFilterContainer}>
       <div className={styles.appointmentsTopRow}>
         <div className={styles.appointmentsFilterLeft}>
              <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                 <IKImage
                 width={150}
                 height={200}
                 loading='lazy'
                 src={'https://ik.imagekit.io/irpk6rtbq/chalo-garcia-2mWKL_I70qk-unsplash.jpg?updatedAt=1757094994513'} className={styles.technicianPhoto} />
              </IKContext>
              <p className={styles.technicianName}>Steve Dermin</p>
              <p className={styles.technicianAction}>Virus Removal</p>

            <div className={styles.technicianRating}>
              <IoStar className={styles.technicianRatingStar} />
              <IoStar className={styles.technicianRatingStar} />
              <IoStar className={styles.technicianRatingStar} />
              <IoStar className={styles.technicianRatingStar} />
              <FaStarHalfAlt className={styles.technicianRatingStar} />
            </div>

         </div>

         <div className={styles.appointmentsFilterRight}>
            <p className={styles.appointmentDate}>Dec, 12 2025</p>
            <p className={styles.appointmentTime}>1:00 PM</p>
             <p
             style={{
               color: appointmentStatus === 'Completed' ? '#00ff00' : 
                      appointmentStatus === 'In Progress' ? '#ffd700' : 
                      appointmentStatus === 'Cancelled' ? '#ff0000' : '#b0b0b0'
             }}
             className={styles.appointmentStatus}>{appointmentStatus}</p>

            <div className={styles.appointmentMoreInfoContainer}>
              <button className={styles.appointmentMoreInfoButton}>More Info</button>
              <button 
                className={styles.appointmentLeaveReviewButton}
                onClick={() => navigate('/review')}
              >
                Leave A Review
              </button>
            </div>

         </div>
       </div>

    

    </div>

</>
  )
}