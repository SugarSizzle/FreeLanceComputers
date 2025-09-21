import React from 'react'
import styles from './OurStory.module.css'
import { IKContext, IKImage } from 'imagekitio-react'


export const OurStory = () => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.header}>Our Story</h1>
                    <p className={styles.headerDescription}>Founded on a passion for technology and problem-solving, we set out to make reliable computer services accessible and transparent for everyone. From repairs and upgrades to data recovery and security, our mission is to deliver solutions that combine technical expertise with a commitment to trust and quality.</p>
                    <button className={styles.learnMoreBtn}>Learn More</button>
                </div>

                <div className={styles.imageContainer}>
                <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                    <IKImage

                        className={styles.ourStoryImage}
                        loading='lazy'
                        path='OurStory.JPG'
                            alt='Our Story'
                        />

                    </IKContext>
                </div>
            </div>
        </div>
    )
}
