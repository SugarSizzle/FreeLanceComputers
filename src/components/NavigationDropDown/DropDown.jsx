import React, { useState, useEffect } from 'react'
import styles from './DropDown.module.css'
import { GoArrowRight } from "react-icons/go";
import { ServicesSecondOverlay } from './ServicesSecondOverlay';
import { HelpSecondOverlay } from './HelpSecondOverlay';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { useCart } from '../../Context/CartContext';


export const DropDown = ({ onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const {signOutUser, session} = useAuth();
    const [error, setError] = useState(null);
    const [cartItemCount, setCartItemCount] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const { hasCartNotification } = useCart();

    useEffect(() => {
        const fetchCartCount = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/cart', {
                    credentials: 'include'
                });
                if (response.ok) {
                    const data = await response.json();
                    setCartItemCount(data.items?.length || 0);
                }
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };
        fetchCartCount();
    }, [hasCartNotification]);

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

                    {cartItemCount > 0 && (
                        <div 
                        onClick={() => {
                            navigate('/cart');
                            onClose();
                        }}
                        className={styles.infoSubContainer}>
                            <h3 className={`${styles.cartTitle} ${hasCartNotification ? styles.cartTitleNotification : ''}`}>
                                Cart
                            </h3>
                            <GoArrowRight className={`${styles.arrowIcon} ${hasCartNotification ? styles.arrowIconNotification : ''}`} />
                        </div>
                    )}

                    {
                        session && (
                        <div 
                        onClick={() => {
                            navigate('/dashboard/overview');
                            onClose();
                        }}
                        className={styles.infoSubContainer}>
                        <h3 className={styles.cartTitle}>Dashboard</h3>
                        <GoArrowRight className={styles.arrowIcon} />

                        </div>
                    )
                    }
                   
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