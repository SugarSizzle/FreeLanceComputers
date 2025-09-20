import React from 'react'
import styles from './ReachOutToUs.module.css'
import { IKContext, IKImage } from 'imagekitio-react'
import { SiStyleshare } from 'react-icons/si'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";



const ReachOutToUs = () => {
    return (
        
        <>
            <div className={styles.reachOutToUsContainer}>
                <IKContext urlEndpoint='https://ik.imagekit.io/irpk6rtbq'>
                    <IKImage
                        className={styles.reachOutToUsImage}
                        loading='lazy'
                        path='ReachOutToUs.JPG'
                        alt='Reach Out To Us'
                    />

                </IKContext>
                <h2 className={styles.title}>Reach Out To Us</h2>
                <p className={styles.description}>Whether you need a service, or want to learn more, we're here to help.</p>
            </div>

            <div className={styles.contactInfoContainer}>
                 <div className={styles.emailContainer}>
                    <div className={styles.iconBackground}>
                        <MdOutlineEmail className={styles.contactIcon} />
                    </div>

                    <div className={styles.contactTextContainer}>
                        <p className={styles.contactTextTitle}>Email</p>   
                        <p className={styles.contactSubText}>freelancecomputers@gmail.com</p>
                    </div>
                    
                </div>

                <div className={styles.phoneContainer}>
                    <div className={styles.iconBackground}>
                        <MdOutlinePhone className={styles.contactIcon} />
                    </div>

                    <div className={styles.contactTextContainer}>
                        <p className={styles.contactTextTitle}>Phone</p>   
                        <p className={styles.contactSubText}>+234 810 555 5555</p>
                    </div>

                </div>

                <div className={styles.addressContainer}>
                    <div className={styles.iconBackground}>
                         <MdOutlineLocationOn className={styles.contactIcon} />
                    </div>

                    <div className={styles.contactTextContainer}>
                        <p className={styles.contactTextTitle}>Address</p>   
                        <p className={styles.contactSubText}>123 Main St, Freelance, MI</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ReachOutToUs;

