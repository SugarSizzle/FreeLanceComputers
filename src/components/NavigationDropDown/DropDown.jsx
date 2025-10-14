import React, { useState } from 'react'
import styles from './DropDown.module.css'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { ServicesSecondOverlay } from './ServicesSecondOverlay';
import { HelpSecondOverlay } from './HelpSecondOverlay';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';


export const DropDown = ({ onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const {signOutUser, session} = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignOut = async (e) => {
        e.preventDefault();

        const currentPath = location.pathname;
        const isDashboardPage = currentPath.startsWith('/dashboard');

        const {success, error} = await signOutUser();
        if(success){
            const redirectPath = isDashboardPage ? '/' : currentPath;
            navigate(redirectPath);
            onClose(); 
        } else {
            setError(error);
        }
    }




    const openServices = () => {
        setServicesOpen(true);
    };

    const closeServices = () => {
        setServicesOpen(false);
    };

    const openHelp = () => {
        setHelpOpen(true);
    };

    const closeHelp = () => {
        setHelpOpen(false);
    };
 



    return (
        <>
            <div className={styles.dropdownOverlay}>
                <div className={styles.dropdownHeaderContainer}>
                    <h3 className={styles.dropdownHeader}>Freelance</h3>
                    <button className={styles.closeIconDropdown} onClick={onClose}>
                        <h3 className={styles.closeIcon}>✕</h3>
                    </button>
                </div>
                
                <div className={styles.buttonContainer}>
                    {session ? (
                        <button onClick={handleSignOut} className={styles.signInButton}>
                            Sign Out
                        </button>
                    ) : (
                        <>
                            <Link to="/signin" className={styles.signInButton}>Sign In</Link>
                            <Link to="/signin" className={styles.getStartedButton}>Get Started</Link>
                        </>
                    )}
                </div>

                <div className={styles.infoSection}>
                    <div onClick={openServices} className={styles.infoSubContainer}>
                        <h3 className={styles.servicesTitle}>Services</h3>
                        <GoArrowRight className={styles.arrowIcon} />
                    </div>

                    <div onClick={openHelp} className={styles.infoSubContainer}>
                        <h3 className={styles.helpTitle}>Help</h3>
                        <GoArrowRight className={styles.arrowIcon} />
                    </div>

                    <div className={styles.infoSubContainer}>
                        <h3 className={styles.contactTitle}>Status</h3>
                        <GoArrowRight className={styles.arrowIcon} />
                    </div>
                   
                </div>

               
            </div>

            {helpOpen && (
                <HelpSecondOverlay onClose={closeHelp} />
            )}

            {servicesOpen && (
                <ServicesSecondOverlay onClose={closeServices} />
            )}
        </>
    )
}