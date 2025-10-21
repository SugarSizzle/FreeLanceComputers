import React from 'react';
import styles from './ServiceTimelineModal.module.css';


export const ServiceTimelineModal = ({ update }) => {

    console.log('📌 MODAL - Rendering with update:', update);
    console.log('📌 MODAL - Update ID:', update?.id);
    console.log('📌 MODAL - Update Note:', update?.note);

    if (!update) {
        return <div className={styles.modalContainer}>No update selected</div>;
    }

    return (

        <>
        {update && (
        <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>
                    Currently Viewing: Update #{update.id}
                </h3>
            </div>
      
            <div className={styles.modalContent}>
                <div className={styles.noteSection}>
                    <label className={styles.label}>Note:</label>
                    <p className={styles.modalNote}>{update.note || 'No note provided'}</p>
                </div>
                
                <div className={styles.debugInfo}>
                    <p style={{ fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>
                        Update Type: {update.update_type} | Created: {new Date(update.created_at).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
        )}
        </>
    );
}