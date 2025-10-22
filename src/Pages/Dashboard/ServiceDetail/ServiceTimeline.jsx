import React, { useState } from 'react';
import { Check } from 'lucide-react';
import styles from './ServiceTimeline.module.css';
import { useTime, useTransform , AnimatePresence, motion} from 'framer-motion';
import { ServiceTimelineModal } from './ServiceTimelineModal';

export const ServiceTimeline = ({updates, selectedUpdate, setSelectedUpdate}) => {
    const [activeCard, setActiveCard] = useState(null);

    console.log('Number of updates fetched:', updates?.length);
    console.log('All updates:', updates);


    const getUpdateTypeDisplay = (updateType) => {
        const typeMap = {
            'received': 'Request Received',
            'reviewing': 'Under Review',
            'in_progress': 'Repair in Progress',
            'note': 'Update',
            'completed': 'Completed',
            'cancelled': 'Cancelled'
        };
        return typeMap[updateType] || updateType;
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    if(!updates || updates.length === 0 ) {
        return (
            <div className={styles.noUpdatesContainer}>
                <h3 className={styles.noUpdatesTitle}>Timeline</h3>
                <p className={styles.noUpdatesMessage}>No updates yet. We'll notify you when there's progress on your request.</p>
            </div>
        );
    }


    const time = useTime();
    const rotate = useTransform(time, [0, 1000, 3000], [0, -180, -280], {clamp: false});
    const rotatingBg = useTransform(rotate , (r) =>{
        return `conic-gradient(from ${r}deg, #ffffff, transparent, transparent, transparent,transparent)`
    })




    return (
       

        <>
            

         <div className={styles.timelineContainer}>
            <h2 className={styles.timelineTitle}>Timeline</h2>
            
            <div className={styles.timeline}>
                {updates.map((update, index) => (
                    console.log(  update),
                    <div key={update.id} className={styles.timelineItem}>
                       
                       
                        {index === updates.length - 1 ? (
                            <div className={styles.currentDot}></div>
                        ) : (
                            <div className={styles.completedDot}>
                                <Check size={14} className={styles.checkIcon} />
                            </div>
                        )}
                        
                        {index < updates.length - 1 && (
                            <div className={styles.timelineLine}></div>
                        )}
                        


                        
                        <div 
                            className={`${styles.updateCard} ${selectedUpdate === update.id ? styles.activeCard : ''}`}
                            onClick={() => setSelectedUpdate(selectedUpdate === update.id ? null : update.id)}
                        >
                            {activeCard === update.id && <motion.div className={styles.animatedBorder} style={{background: rotatingBg}}/>}
                            <h3 className={styles.updateType}>
                                {getUpdateTypeDisplay(update.update_type)}
                            </h3>
                            
                            <span className={styles.updateTime}>
                                {formatDate(update.created_at)}
                            </span>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>

  

        </>
    )
}