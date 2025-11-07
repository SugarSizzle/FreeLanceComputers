import React from 'react'
import styles from './AdminTimeLine.module.css'

export const AdminTimeLine =  ({taskProgress, selectedUpdate, setSelectedUpdate}) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Admin TimeLine</h1>

        <div className={styles.timeLineContainer}>
                { taskProgress && taskProgress.map((task) => (
                    <div 
                    onClick={() => setSelectedUpdate(task)}
                    className={`${styles.timelineCard} ${selectedUpdate?.id === task.id ? styles.active : ''}`}
                    key={task.id}>
                        <h2 className={styles.title}>{task.note}</h2>
                        <p className={styles.description}>Update ID: {task.id}</p>
                        <p className={styles.description}>{task.update_type}</p>
                    </div>
                ))}
        </div>

        </div>
    )
}