import React from 'react';
import styles from './MeetTheExperts.module.css';
import {IKContext, IKImage} from 'imagekitio-react';

export const MeetTheExperts = () => {
    return (
        <div className={styles.meetTheExpertsContainer}>

            <div className={styles.heroSectionImageContainer}>
                <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                    <IKImage
                        className={styles.heroSectionImage}
                        loading='lazy'
                        path='AboutPageHeroSectionImage.png' 
                        alt='Meet The Experts'
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

            <div className={styles.headerTextContainer}>
                <h1 className={styles.meetTheExpertsHeader}>Meet The Experts</h1>
                <p className={styles.meetTheExpertsDescription}>
                    Our team of passionate technicians keep your devices running smoothly.
                    From routine maintenance to complex repairs, we're here to help.</p>

            </div>
            <div className={styles.expertsImageContainer}>
                <div className={styles.expertCard}>
                    <div className={styles.imageWrapper}>
                        <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                            <IKImage 
                                className={styles.expertImage}
                                loading='lazy'
                                path='chalo-garcia-2mWKL_I70qk-unsplash.jpg'
                                alt='Steve Dermin'
                                transformation={[
                                    {
                                        quality: 100,
                                        dpr: 'auto'
                                    }
                                ]}
                                srcSet={[
                                    `${'https://ik.imagekit.io/irpk6rtbq/chalo-garcia-2mWKL_I70qk-unsplash.jpg?updatedAt=1757094994513'}?tr=w-768 768w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/chalo-garcia-2mWKL_I70qk-unsplash.jpg?updatedAt=1757094994513'}?tr=w-1280 1280w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/chalo-garcia-2mWKL_I70qk-unsplash.jpg?updatedAt=1757094994513'}?tr=w-1920 1920w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/chalo-garcia-2mWKL_I70qk-unsplash.jpg?updatedAt=1757094994513'}?tr=w-2560 2560w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/chalo-garcia-2mWKL_I70qk-unsplash.jpg?updatedAt=1757094994513'}?tr=w-3200 3200w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/chalo-garcia-2mWKL_I70qk-unsplash.jpg?updatedAt=1757094994513'}?tr=w-3840 3840w`
                                  ].join(', ')}  

                                sizes="100vw"  

                            />
                        </IKContext>
                    </div>
                    
                    <div className={styles.expertInfo}>
                        <div className={styles.expertDetails}>
                            <h3 className={styles.expertName}>Steve Dermin</h3>
                            <p className={styles.expertSpecialization}>Senior Computer Repair Specialist</p>
                        </div>

                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.socialIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.expertCard}>
                    <div className={styles.imageWrapper}>
                        <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                            <IKImage 
                                className={styles.expertImage}
                                loading='lazy'
                                path='sergey-mikheev-CTEiUWpZZ3o-unsplash.jpg'
                                alt='Dwight Schrute'
                                transformation={[
                                    {
                                        quality: 100,
                                        dpr: 'auto'
                                    }
                                ]}
                                srcSet={[
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-CTEiUWpZZ3o-unsplash.jpg?updatedAt=1757094996290'}?tr=w-768 768w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-CTEiUWpZZ3o-unsplash.jpg?updatedAt=1757094996290'}?tr=w-1280 1280w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-CTEiUWpZZ3o-unsplash.jpg?updatedAt=1757094996290'}?tr=w-1920 1920w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-CTEiUWpZZ3o-unsplash.jpg?updatedAt=1757094996290'}?tr=w-2560 2560w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-CTEiUWpZZ3o-unsplash.jpg?updatedAt=1757094996290'}?tr=w-3200 3200w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-CTEiUWpZZ3o-unsplash.jpg?updatedAt=1757094996290'}?tr=w-3840 3840w`
                                  ].join(', ')}  

                                sizes="100vw"  

                            />
                        </IKContext>
                    </div>
                    <div className={styles.expertInfo}>
                        <div className={styles.expertDetails}>
                            <h3 className={styles.expertName}>Dwight Schrute</h3>
                            <p className={styles.expertSpecialization}>Data Recovery & Security Expert</p>
                        </div>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.socialIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.expertCard}>      
                    <div className={styles.imageWrapper}>
                        <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                            <IKImage
                                className={styles.expertImage}
                                loading='lazy'
                                path='sergey-mikheev-_jasTqAtQtY-unsplash.jpg'
                                alt='Michael Garcia'
                                transformation={[
                                    {
                                        quality: 100,
                                        dpr: 'auto'
                                    }
                                ]}
                                srcSet={[
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-_jasTqAtQtY-unsplash.jpg?updatedAt=1757094996211'}?tr=w-768 768w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-_jasTqAtQtY-unsplash.jpg?updatedAt=1757094996211'}?tr=w-1280 1280w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-_jasTqAtQtY-unsplash.jpg?updatedAt=1757094996211'}?tr=w-1920 1920w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-_jasTqAtQtY-unsplash.jpg?updatedAt=1757094996211'}?tr=w-2560 2560w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-_jasTqAtQtY-unsplash.jpg?updatedAt=1757094996211'}?tr=w-3200 3200w`,
                                    `${'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-_jasTqAtQtY-unsplash.jpg?updatedAt=1757094996211'}?tr=w-3840 3840w`
                                  ].join(', ')}  

                                sizes="100vw"  

                            />
                        </IKContext>
                    </div>
                    <div className={styles.expertInfo}>
                        <div className={styles.expertDetails}>
                            <h3 className={styles.expertName}>Michael Garcia</h3>
                            <p className={styles.expertSpecialization}>Virus Protection & System Optimization</p>
                        </div>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.socialIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

