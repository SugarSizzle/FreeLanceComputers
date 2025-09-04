import React, { useState } from 'react'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import {useActionState} from 'react'
import styles from './SignInPage.module.css'
import { useAuth } from '../Context/AuthContext'
import {useNavigate} from 'react-router-dom'


export const SignInPage = () => {
    const {signInUser} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const navigate = useNavigate();

    
    const [error, submitAction, isPending] = useActionState(
        async (previousState, formData) => {
            const email = formData.get('email');
            const password = formData.get('password');

            try {
                const {success, data, error: signinError} = await signInUser(email, password);

                if(signinError){
                    return new Error(signinError)
                }
                if(success && data?.session){
                    navigate('/dashboardoverview')
                    return null

                }
                return null
            } catch( error){
                console.error('Sign in error' , error.message)
                return new Error('An expected error occured. Please try again later.');
            }
        }, null
    );

    return (
        <>
            <Navigation />
            <div className={styles.signInContainer}>
                <div className={styles.signInCard}>
                    <h1 className={styles.signInTitle}>
                        {isSignUp ? 'Create Account' : 'Sign In'}
                    </h1>
                    
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

                        {isSignUp && (
                            <div className={styles.inputContainer}>
                                <label htmlFor="confirmPassword" className={styles.inputLabel}>
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className={styles.inputField}
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>
                        )}

                        <button type="submit" className={styles.submitButton} disabled={isPending}>
                            {isPending ? 'Signing in...' : (isSignUp ? 'Create Account' : 'Sign In')}
                        </button>
                    </form>

                    {error && (
                        <div className={styles.errorMessage}>
                            {error.message}
                        </div>
                    )}

                    <div className={styles.switchMode}>
                        <p className={styles.switchText}>
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                        </p>
                        <button 
                            className={styles.switchButton}
                            onClick={() => setIsSignUp(!isSignUp)}
                        >
                            {isSignUp ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>

                    <div className={styles.forgotPassword}>
                        <button className={styles.forgotPasswordButton}>
                            Forgot Password?
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
