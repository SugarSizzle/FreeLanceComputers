import styles from './AboutPageHeroSection.module.css'
import { IKContext, IKImage } from 'imagekitio-react'
import { useState, useEffect } from 'react'

export const AboutPageHeroSection = () => {

   

    return(
    <>
        <div className={styles.heroSectionContainer}>
            <h3 className={styles.aboutFreelance}>About FreeLance</h3>
            <p className={styles.aboutFreelanceDescription}>We provide expert computer services with a focus on reliability, precision, and customer trust. Our mission, keep you connected.</p>
            <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                <IKImage
                    className={styles.aboutFreelanceImage}
                    loading='lazy'
                    path='kilian-seiler-PZLgTUAhxMM-unsplash.jpg?updatedAt=1758408747885'
                    alt='About FreeLance Computer Services'
                    transformation={[
                        {
                            quality: 100,
                            dpr: 'auto',
                            f: 'auto',
                            
                        }
                    ]}
                />
            </IKContext>

        </div>

                
  

        </>
    )
}




