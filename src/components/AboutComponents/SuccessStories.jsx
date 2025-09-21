import React, { useState, useEffect } from 'react'
import styles from './SuccessStories.module.css'
import { IKContext, IKImage } from 'imagekitio-react'



export const SuccessStories = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        // Check on mount
        checkScreenSize()

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize)

        // Cleanup event listener
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])
    return (


        <div className={styles.successStoriesContainer}>
        <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
        <IKImage
            className={styles.successStoriesImage}
            loading='lazy'
            path={isMobile ? 'SuccessStoriesMobile.png' : 'SuccessStoriesDesktop.png'} 
            alt='Success Stories'
            transformation={[
                {
                    quality: 'auto',
                    dpr: 'auto',
                    f:'auto'
                }
            ]}
            />
        </IKContext>
        </div>
    )
}
