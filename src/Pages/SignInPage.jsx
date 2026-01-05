import React, { useState } from 'react'
import {useActionState} from 'react'
import styles from './SignInPage.module.css'
import { useAuth } from '../Context/AuthContext'
import {useNavigate, useLocation, Link} from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";

export const SignInPage = () => {
    const {signInUser} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    
    const isFormComplete = email.trim() !== '' && password.trim() !== '';

    const [error, submitAction, isPending] = useActionState(

        async (previousState, formData) => {
            const email = formData.get('email');
            const password = formData.get('password');

            try {
                const {
                    success, 
                    data, 
                    error: authError
                } = await signInUser(email, password);

                if(authError){
                    return new Error(authError);
                }

            
                if(success && data?.session){
                    if(data.session.role === 'admin'){
                        navigate('/admin/overview', { replace: true });
                    } else {
                        navigate('/dashboard/overview', { replace: true });
                    }
                    return null
                }
                return null
            } catch( error){
                console.error('Sign in error' , error.message)
                return new Error('An unexpected error occurred. Please try again later.');
            }
            }, null
        );

    return (
        <>
            <div className={styles.signInContainer}>
                <div className={styles.signInCard}>
                    <div className={styles.homeLinkContainer}>
                        <Link to="/" className={styles.homeLink}>
                            <IoHomeOutline className={styles.homeLinkIcon} />
                        </Link>
                    </div>

                    <form action={submitAction} className={styles.signInForm}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email" className={styles.inputLabel}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.inputField}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="password" className={styles.inputLabel}>
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.inputField}
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={`${styles.submitButton} ${isFormComplete ? styles.submitButtonActive : styles.submitButtonInactive}`}
                            disabled={isPending || !isFormComplete}
                        >
                            {isPending ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    {error && (
                        <div className={styles.errorMessage}>
                            {error.message}
                        </div>
                    )}

                    <div className={styles.switchMode}>
                        <p className={styles.switchText}>
                            Don't have an account?
                        </p>
                        <Link to="/signup" className={styles.switchButton}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
