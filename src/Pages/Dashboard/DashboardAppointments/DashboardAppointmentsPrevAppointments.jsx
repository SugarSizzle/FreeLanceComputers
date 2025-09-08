import React from 'react'
import styles from './DashboardAppointmentsPrevAppointments.module.css'
import { useState } from 'react'


export const DashboardAppointmentsPrevAppointments = () => {
    const [selectedFilter, setSelectedFilter] = useState(null) // null, 'completed', or 'cancelled'


  return (
    <>
    <div className={styles.moreAppointmentsContainer}>
        <p className={styles.moreAppointmentsText}>+2 More Appointments View Here</p>
    </div>

    <div className={styles.appointmentsFilterContainer}>
        <button style={selectedFilter === 'completed' ? {backgroundColor: '#ffffff', color: '#000000', 'fontWeight': '800'} : {backgroundColor: '#000000', color: '#b0b0b0', 'fontWeight': '700'}} onClick={() => setSelectedFilter(selectedFilter === 'completed' ? null : 'completed')} className={styles.appointmentsFilterButton}>Completed</button>
        <button style={selectedFilter === 'cancelled' ? {backgroundColor: '#ffffff', color: '#000000', 'fontWeight': '800'} : {backgroundColor: '#000000', color: '#b0b0b0', 'fontWeight': '700'}} onClick={() => setSelectedFilter(selectedFilter === 'cancelled' ? null : 'cancelled')} className={styles.appointmentsFilterButton}>Cancelled</button>
    </div>
</>
  )
}