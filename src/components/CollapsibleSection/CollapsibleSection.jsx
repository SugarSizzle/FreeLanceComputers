import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './CollapsibleSection.module.css'

export const CollapsibleSection = ({ 
    title, 
    children, 
    isOpen = true, 
    onToggle,
    titleClassName = '',
    containerClassName = '',
    contentClassName = ''
}) => {
    const [isExpanded, setIsExpanded] = useState(isOpen)

    const handleToggle = () => {
        const newState = !isExpanded
        setIsExpanded(newState)
        if (onToggle) {
            onToggle(newState)
        }
    }

    return (
        <div className={`${styles.collapsibleContainer} ${containerClassName}`}>
            <div className={styles.collapsibleTitleContainer}>
            <h1 
                className={`${styles.collapsibleTitle} ${titleClassName}`} 
                onClick={handleToggle}
            > 
                {title}
                <p className={styles.collapsibleTitleText}>click to {isExpanded ? 'close' : 'open'}</p>
            
            </h1>
            </div>
            <motion.span
                    animate={{ rotate: isExpanded ? 0 : 180 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={styles.arrowIcon}
                >
                    ▼
                </motion.span>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div 
                        className={`${styles.collapsibleContent} ${contentClassName}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
