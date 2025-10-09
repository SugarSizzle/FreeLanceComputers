import React, { useState } from 'react'
import styles from './HomePageCustomerFeedback.module.css'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

// Customer testimonials data
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "Small Business Owner",
        review: "Absolutely fantastic service! They recovered all my critical business data after a hard drive failure. The team was professional, quick, and kept me informed throughout the entire process. I couldn't be more grateful for their expertise.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "Software Developer",
        review: "Best computer repair experience I've ever had. They diagnosed and fixed my laptop's hardware issues in no time. Their technical knowledge is outstanding, and the pricing was very reasonable. Highly recommend!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        position: "Graphic Designer",
        review: "They saved my entire portfolio! After my computer crashed, I thought I'd lost years of work. The data recovery team worked miracles and retrieved everything. Their customer service is exceptional and they truly care about their clients.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
];

export const HomePageCustomerFeedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            setIsTransitioning(false);
        }, 300);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
            setIsTransitioning(false);
        }, 300);
    };

    const handleImageClick = (index) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.cardContainer}>

                <div className={styles.clientHeader}>
                    <h2 className={styles.clientTitle}>Client Feedback</h2>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.imageContainer}>
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={testimonial.id}
                                className={`${styles.image} ${index === currentIndex ? styles.activeImage : ''}`}
                                style={{ 
                                    backgroundImage: `url(${testimonial.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    cursor: 'pointer'
                                }}
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>

                    <div className={styles.feedbackContent}>
                        <div className={`${styles.clientFeedback} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
                            <p className={styles.clientFeedbackText}>
                                {testimonials[currentIndex].review}
                            </p>
                        </div>

                        <div className={styles.clientName}>
                            <div className={`${styles.clientNameContainer} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
                                <h3 className={styles.clientNameText}>{testimonials[currentIndex].name}</h3>
                                <p className={styles.clientPosition}>{testimonials[currentIndex].position}</p>
                            </div>

                            <div className={styles.arrowContainer}>
                                <FaChevronLeft 
                                    className={styles.arrowIcon} 
                                    onClick={handlePrev}
                                    style={{ cursor: 'pointer' }}
                                />
                                <FaChevronRight 
                                    className={styles.arrowIcon} 
                                    onClick={handleNext}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>  

            


        </div>
    )
}
