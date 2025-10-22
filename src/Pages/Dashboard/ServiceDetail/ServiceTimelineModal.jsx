import React from 'react';
import styles from './ServiceTimelineModal.module.css';


export const ServiceTimelineModal = ({  update , selectedUpdate,  }) => {


    if (!update) {
        return <div className={styles.modalContainer}>No update selected</div>;
    }
    
    const currentUpdate = update.find(update => update.id === selectedUpdate)
   

    return (
       
        <>
        {currentUpdate && (
        <div  className={styles.modalContainer}> 
            <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>
                    Currently Viewing: Update #{currentUpdate.id}
                </h3>
            </div>
      
            <div className={styles.modalContent}>
                <div className={styles.noteSection}>
                    <label className={styles.label}>Note:</label>
                    <p className={styles.modalNote}>{currentUpdate.note || 'No note provided'}</p>
                </div>
                
                <div className={styles.debugInfo}>
                    <p style={{ fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>
                        Update Type: {currentUpdate.update_type} | Created: {new Date(currentUpdate.created_at).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
        )}
        </>
    );
}