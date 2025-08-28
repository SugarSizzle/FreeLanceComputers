import React from 'react';
import styles from './DashboardActivityFeed.module.css';



const renderActivityFeed = () => {

    const activities = [
        { id: 1, type: 'Service', action: 'Virus Removal completed for Dell Laptop', timestamp: '2 hours ago' },
        { id: 2, type: 'Order', action: 'SSD 1TB order shipped', timestamp: '1 day ago' },
        { id: 3, type: 'Financing', action: 'PC Build financing approved', timestamp: '3 days ago' },
        { id: 4, type: 'Appointment', action: 'Appointment scheduled with Tech Mike', timestamp: '5 days ago' }
      ];


    return (

    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Activity Feed</h2>
      
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Recent Activity</h3>
        <div className={styles.statsContainer}>
          {activities.map((activity) => (
            <div key={activity.id} className={styles.activityItem}>
              <div className={styles.activityIcon}>
                {activity.type === 'Service' && <Monitor className={styles.activityIconService} />}
                {activity.type === 'Order' && <DollarSign className={styles.activityIconOrder} />}
                {activity.type === 'Financing' && <DollarSign className={styles.activityIconFinancing} />}
                {activity.type === 'Appointment' && <Calendar className={styles.activityIconAppointment} />}
              </div>
              <div className={styles.activityContent}>
                <p className={styles.activityAction}>{activity.action}</p>
                <p className={styles.activityTimestamp}>{activity.timestamp}</p>
              </div>
              <span className={`${styles.activityType} ${
                activity.type === 'Service' ? styles.activityTypeService :
                activity.type === 'Order' ? styles.activityTypeOrder :
                activity.type === 'Financing' ? styles.activityTypeFinancing : styles.activityTypeAppointment
              }`}>
                {activity.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default renderActivityFeed;