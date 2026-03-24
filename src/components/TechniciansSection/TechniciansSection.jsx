import React, { useEffect, useState } from 'react'
import styles from './TechniciansSection.module.css'
import { motion } from 'framer-motion'

export const TechniciansSection = () => {
    const [technicians, setTechnicians] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchTechnicians() {
            try {
                const response = await fetch('http://localhost:5000/api/technicians')

                if (!response.ok) {
                    throw new Error('Failed to fetch technicians')
                }

                const data = await response.json()
                setTechnicians(data.technicians)
            } catch (err) {
                console.error('Error fetching technicians:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchTechnicians()
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    }

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loadingContainer}>
                    <p className={styles.loadingText}>Loading technicians...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.container}>
                <div className={styles.errorContainer}>
                    <p className={styles.errorText}>Unable to load technicians right now.</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.heroSection}>
                <h1 className={styles.heroTitle}>Our Technicians</h1>
                <p className={styles.heroSubtitle}>
                    Meet the skilled professionals behind every repair. Our certified technicians
                    bring years of hands-on experience to keep your devices running at their best.
                </p>
            </div>

            {technicians.length === 0 ? (
                <div className={styles.emptyContainer}>
                    <p className={styles.emptyText}>No technicians available at the moment.</p>
                </div>
            ) : (
                <motion.div
                    className={styles.techniciansGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {technicians.map((tech) => (
                        <motion.div
                            key={tech.id}
                            className={styles.techCard}
                            variants={cardVariants}
                        >
                            <div className={styles.imageWrapper}>
                                {tech.photo ? (
                                    <img
                                        src={tech.photo}
                                        alt={tech.name}
                                        className={styles.techImage}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className={styles.placeholderImage}>
                                        <span className={styles.placeholderInitial}>
                                            {tech.name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className={styles.techInfo}>
                                <h3 className={styles.techName}>{tech.name}</h3>
                                <p className={styles.techSpecialty}>{tech.specialty}</p>
                                {tech.bio && (
                                    <p className={styles.techBio}>{tech.bio}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    )
}
