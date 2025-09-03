import React, { useState, useRef } from 'react'
import styles from './DashboardOverviewServices.module.css'
import { ChevronRight, ChevronLeft, Shield, Database, Wrench } from 'lucide-react'

export const DashboardOverviewServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const services = [
        { 
            name: 'Device Repair', 
            icon: <Wrench size={32} />,
            description: 'Professional hardware repairs and maintenance'
        },
        { 
            name: 'Virus Removal', 
            icon: <Shield size={32} />,
            description: 'Complete malware and virus protection'
        },
        { 
            name: 'Data Recovery', 
            icon: <Database size={32} />,
            description: 'Recover lost or corrupted data'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? services.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.servicesContainer}>
            <h3 className={styles.servicesTitle}>Services</h3>
            <div className={styles.carouselContainer}>
                <button 
                    className={styles.carouselButton} 
                    onClick={prevSlide}
                    style={{ left: '10px' }}
                >
                    <ChevronLeft size={24} />
                </button>
                
                <div className={styles.carouselWrapper}>
                    <div 
                        className={styles.carouselTrack}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {services.map((service, index) => (
                            <div key={index} className={styles.serviceCard}>
                                <h4 className={styles.serviceTitle}>{service.name}</h4>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <div className={styles.serviceIcon}>
                                    {service.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button 
                    className={styles.carouselButton} 
                    onClick={nextSlide}
                    style={{ right: '10px' }}
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className={styles.carouselDots}>
                {services.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}

