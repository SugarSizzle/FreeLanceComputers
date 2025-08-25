import React, { useState } from 'react'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import { CollapsibleSection } from '../components/CollapsibleSection'
import styles from './QandA.module.css'
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const QandA = () => {
    const [thumbsUpClicked, setThumbsUpClicked] = useState(false)
    const [thumbsDownClicked, setThumbsDownClicked] = useState(false)
    const [hasVoted, setHasVoted] = useState(false)

    const handleThumbsUp = () => {
        setThumbsUpClicked(true)
        setThumbsDownClicked(false)
        setHasVoted(true)
    }

    const handleThumbsDown = () => {
        setThumbsDownClicked(true)
        setThumbsUpClicked(false)
        setHasVoted(true)
    }

    return (
        <>
            <Navigation />
            <div className={styles.qAndAPageContainer}>
                <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
                
                <CollapsibleSection title="General Services">
                    <div className={styles.qaContainer}>

                        <h3 className={styles.qaTitle}>Q: What services do you offer?</h3>
                        <p className={styles.qaText}>
                            A: We provide professional virus removal, data recovery, computer repairs, 
                            computer part sales, and both refurbished and new laptops. You can also 
                            request services directly through our website or visit us in person.
                        </p>

                    </div>

                    <div className={styles.qaContainer}>

                        <h3 className={styles.qaTitle}>Q: Do I need an appointment, or can I walk in?</h3>
                        <p className={styles.qaText}>
                            A: Walk-ins are welcome, but scheduling an appointment ensures faster 
                            service and priority support.
                        </p>

                    </div>
                
                    <div className={styles.qaContainer}>

                        <h3 className={styles.qaTitle}>Q: How do I request a service online?</h3>
                        <p className={styles.qaText}>
                            A: Simply sign in to your account, choose the service you need, and 
                            complete the request form. You'll receive a confirmation email with next steps.
                        </p>

                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Virus Protection & Removal">
                    <div className={styles.qaContainer}>

                        <h3 className={styles.qaTitle}>Q: How do I know if my computer has a virus?</h3>
                        <p className={styles.qaText}>
                            A: Common signs include slow performance, unexpected pop-ups, 
                            strange behavior, and files that won't open. If you suspect a virus, 
                            stop using the computer and contact us immediately.
                        </p>

                    </div>

                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: What does your virus removal service include?</h3>
                        <p className={styles.qaText}>
                        A: We scan your system, remove malicious software, install security updates, and recommend protective tools to prevent future infections.</p>
                    </div>

                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: How long does virus removal take?</h3>
                        <p className={styles.qaText}>
                            A: Most virus removals take 2-4 hours, but severe infections may 
                            require 24-48 hours. We'll provide an estimate when we assess your system.
                        </p>
                    </div>

                </CollapsibleSection>

                <CollapsibleSection title="Data Recovery">   

                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: Can you recover files from a damaged hard drive?</h3>
                        <p className={styles.qaText}>
                        A: In most cases, yes. We use specialized tools to recover deleted, corrupted, 
                        or inaccessible data from hard drives, SSDs, and external storage devices.
                        </p>
                    </div>

                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Is my data guaranteed to be recovered?</h3>
                        <p className={styles.qaText}>
                        A: While we achieve a high success rate, data recovery depends on the extent of 
                        the damage. We’ll perform a free evaluation before beginning any recovery work.
                        </p>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Computer Repairs">

                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: What types of computer repairs do you handle?</h3>
                        <p className={styles.qaText}>
                            A: We repair desktops and laptops, covering hardware failures 
                            (power supply, RAM, motherboard, etc.), overheating, and software issues.
                        </p>
                    </div>

                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: How long does a typical repair take?</h3>
                        <p className={styles.qaText}>
                            A: Minor repairs can be completed within 1–2 business days, while complex 
                            hardware replacements may take longer depending on part availability.
                        </p>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Computer Parts and Laptop Sales">
                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: Do you sell both new and refurbished parts?</h3>
                        <p className={styles.qaText}>
                            A: Yes, we offer both new and refurbished laptops. Refurbished models are thoroughly tested and come with a warranty.
                        </p>
                    </div>

                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: Are your refurbished laptops reliable?</h3>
                        <p>A: Absolutely. All refurbished laptops go through rigorous testing, cleaning, 
                            and quality checks before being listed for sale.
                        </p>
                    </div>

                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: Do you offer financing for laptops?</h3>
                        <p className={styles.qaText}>
                            A: Yes, financing options are available for both new and refurbished laptops. 
                            You can apply directly through your account at checkout.
                        </p>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Accounts and Order">

                    <div className={styles.qaContainer}>                ``
                        <h3 className={styles.qaTitle}>Q: Do I need an account to make a purchase?</h3>
                        <p className={styles.qaText}>A: You can browse without an account, but signing in allows you to 
                            track service requests, save order history, and apply for financing.
                        </p>
                    </div>

                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: How can I check the status of my repair or order?</h3>
                        <p className={styles.qaText}>A: Log in to your account, go to “My Orders” or “My Services,” 
                        and you’ll see real-time updates.
                        </p>

                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Payment and Policies">

                <div className={styles.qaContainer}>
                    <h3 className={styles.qaTitle}>Q: What payment methods do you accept?</h3>
                    <p className={styles.qaText}>A: We accept all major credit cards, debit cards, PayPal, and financing options for eligible purchases.</p>
                </div>

                <div className={styles.qaContainer}>
                    <h3 className={styles.qaTitle}>Q: Do you provide warranties?</h3>
                    <p className={styles.qaText}>A: Yes. All new products include manufacturer warranties, and our refurbished devices come with a limited service warranty. 
                        Repair services also include a satisfaction guarantee.</p>
                </div>

                </CollapsibleSection>

                <CollapsibleSection title="Support">
                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: How do I contact support?</h3>
                        <p className={styles.qaText}>A: You can reach us via the contact form on our website, by email, or by phone during business hours. 
                            Our support team typically responds within 24 hours.</p>    
                    </div>

                    <div className={styles.qaContainer}>
                        <h3 className={styles.qaTitle}>Q: Do you offer remote support?</h3>  
                        <p className={styles.qaText}>A: Yes. For certain software and troubleshooting issues, 
                           we can provide remote assistance with your permission.</p>
                    </div>
                
                
                </CollapsibleSection>

                <div className={styles.wasThisHelpful}>
                    <h3>Was this helpful?</h3>
                    <div className={styles.thumbsContainer}>
                        <button 
                            className={`${styles.thumbsButton} ${styles.thumbsUp} ${thumbsUpClicked ? styles.thumbsUpClicked : ''}`}
                            onClick={handleThumbsUp}
                        >
                            <FaRegThumbsUp />
                        </button>
                        <button 
                            className={`${styles.thumbsButton} ${styles.thumbsDown} ${thumbsDownClicked ? styles.thumbsDownClicked : ''}`}
                            onClick={handleThumbsDown}
                        >
                            <FaRegThumbsDown />
                        </button>
                    </div>
                    {hasVoted && (
                        <Link to="/signin" className={styles.getInTouchButton}>
                            Get in Touch
                        </Link>
                    )}
                </div>

            </div>
            <Footer />
        </>
    )
}


