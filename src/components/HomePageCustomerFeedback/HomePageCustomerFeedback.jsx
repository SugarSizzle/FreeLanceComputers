import React, { useState } from 'react'
import styles from './HomePageCustomerFeedback.module.css'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { IKContext, IKImage } from 'imagekitio-react'
import { FoundersCard } from './Founder'
import { CustomerOrFounderToggle } from './CustomerOrFounderToggle'

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "Small Business Owner",
        review: "My computer was completely locked by a virus, but they had it running clean and smooth within a day. Couldn't be happier! ",
        imagePath: "https://ik.imagekit.io/irpk6rtbq/pexels-omar-ramadan-1739260-15913679.jpg?updatedAt=1760555025549" // Replace with your actual ImageKit path
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "Software Developer",
        review: "I thought I lost years of photos, but they recovered everything. Absolute lifesavers!",
        imagePath: "https://ik.imagekit.io/irpk6rtbq/pexels-rdne-7648259.jpg?updatedAt=1760555026509" // Replace with your actual ImageKit path
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        position: "Graphic Designer",
        review: "They diagnosed the problem instantly and fixed my PC faster than anyone else I've been to. Reliable and professional.",
        imagePath: "https://ik.imagekit.io/irpk6rtbq/pexels-anthonyshkraba-production-8044085.jpg?updatedAt=1760555026612" // Replace with your actual ImageKit path
    },
    {
        id: 4,
        name: "David Thompson",
        position: "Marketing Manager",
        review: "Got a refurbished laptop from their store and runs like new. Great value and quality assurance all the way.",
        imagePath: "https://ik.imagekit.io/irpk6rtbq/OmarCustomer.jpg?updatedAt=1760554509360"
    },
    {
        id: 5,
        name: "Lisa Martinez",
        position: "Teacher",
        review: "The team was friendly, fast, and clearly knew what they were doing. You can tell they care about their customers.",
        imagePath: "https://ik.imagekit.io/irpk6rtbq/StevenCustomer.jpg?updatedAt=1760554510075"
    }
];

export const HomePageCustomerFeedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showFounders, setShowFounders] = useState(false);

    const handleToggle = (isFoundersMode) => {
        setShowFounders(isFoundersMode);
        setCurrentIndex(0); 
    };

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
<>
        <div className={styles.headerImageContainer}>
            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                <IKImage
                    className={styles.headerImage}
                    loading='lazy'
                    path='SuccessStoriesMobile.png?updatedAt=1758455176378'
                    alt='Customers Saying'
                />
            
            </IKContext>
        </div>

            <div className={styles.sectionContainer}>
                <CustomerOrFounderToggle onToggle={handleToggle} />

                <div className={styles.cardContainer}>
                    {!showFounders ? (
                        <>
                        <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                                <div className={styles.imageContainer}>
                                    {testimonials.map((testimonial, index) => (
                                        <div 
                                            key={testimonial.id}
                                            className={`${styles.image} ${index === currentIndex ? styles.activeImage : ''}`}
                                            style={{ 
                                                backgroundImage: `url(${testimonial.imagePath})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => handleImageClick(index)}
                                        />
                                    ))}
                                </div>
                        </IKContext>

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
                        </>
                    ) : (
                        <FoundersCard />
                    )}
                </div>
            </div>
        </>
    )
}
