import React, { useState } from 'react'
import styles from './Founder.module.css'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { IKContext, IKImage } from 'imagekitio-react'

const founders = [
    {
        id: 1,
        name: "Alex Johnson",
        title: "CEO & Co-Founder",
        imagePath: "pexels-kampus-7477748.jpg?updatedAt=1760555025779", 
        quote: " True innovation isn't about doing more, it's about doing what matters, faster.  "
    },
    {
        id: 2,
        name: "Sarah Chen",
        title: "CTO & Co-Founder",
        imagePath: "TomFounderHeadshot.png?updatedAt=1760553996207", // Replace with your actual ImageKit path
        quote: " Every repair begins with listening. Understanding our clients is how we perfect our craft."
    },
    {
        id: 3,
        name: "Michael Rodriguez",
        title: "Operations Director",
        imagePath: "founderClint%20headshot.png?updatedAt=1760553996582", // Replace with your actual ImageKit path
        quote: "Precision isn't optional — it's the language of professionals."
    }
];

export const FoundersCard = () => {
    const [currentFounderIndex, setCurrentFounderIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentFounderIndex((prevIndex) => (prevIndex + 1) % founders.length);
            setIsTransitioning(false);
        }, 300);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentFounderIndex((prevIndex) => 
                prevIndex === 0 ? founders.length - 1 : prevIndex - 1
            );
            setIsTransitioning(false);
        }, 300);
    };

    const handleFounderClick = (index) => {
        if (isTransitioning || index === currentFounderIndex) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentFounderIndex(index);
            setIsTransitioning(false);
        }, 300);
    };

    const currentFounder = founders[currentFounderIndex];

    return (
        <div className={styles.founderContainer}>
            <div className={styles.founderImages}>
                <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                    {founders.map((founder, index) => (
                        <div 
                            key={founder.id} 
                            className={`${styles.founderImageContainer} ${index === currentFounderIndex ? styles.selected : ''}`}
                            onClick={() => handleFounderClick(index)}
                        >
                            <IKImage 
                                path={founder.imagePath}
                                alt={founder.name}
                                className={styles.founderImage}
                                loading='lazy'
                                transformation={[{
                                    height: 200,
                                    width: 200,
                                    cropMode: 'maintain_ratio'
                                }]}
                            />
                        </div>
                    ))}
                </IKContext>
            </div>

            <div className={styles.quoteContainer}>
                <blockquote className={`${styles.founderQuote} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
                    "{currentFounder.quote}"
                </blockquote>
                <cite className={`${styles.quoteAuthor} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
                    — {currentFounder.name}
                </cite>
                
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
    )
}