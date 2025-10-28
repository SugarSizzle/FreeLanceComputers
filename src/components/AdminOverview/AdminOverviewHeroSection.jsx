import React from 'react'
import styles from './AdminOverviewHeroSection.module.css'
import { IKContext, IKImage } from 'imagekitio-react'


export const AdminOverviewHeroSection = () => {



    return (
        <div className={styles.container}>
            <div className={styles.heroSection}>
                <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                    <IKImage
                        className={styles.heroImage}
                        loading='lazy'
                        path='DashboardOverviewHeroSectionDesktop.png?updatedAt=1761628609561'
                        alt='Admin Overview'
                    />
                </IKContext>
            </div>

            <div className={styles.newRequestContainer}>
                <h2 className={styles.newRequestTitle}>New Requests</h2>

                <div className={styles.metallicDiv}>
                    Metallic Effect
                </div>

            </div>

        </div>
    )



}
