import React, { useState } from 'react'
import { Navigation } from '../Layout/Navigation'
import { Footer } from '../Layout/Footer'
import styles from './SignInPage.module.css'

export const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignUp, setIsSignUp] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle sign in/sign up logic here
        console.log('Form submitted:', { email, password, isSignUp })
    }

    return (
        <>
            <Navigation />
            <div className={styles.signInContainer}>
                <div className={styles.signInCard}>
                    <h1 className={styles.signInTitle}>
                        {isSignUp ? 'Create Account' : 'Sign In'}
                    </h1>
                    
                    <form onSubmit={handleSubmit} className={styles.signInForm}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email" className={styles.inputLabel}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
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

                        <button type="submit" className={styles.submitButton}>
                            {isSignUp ? 'Create Account' : 'Sign In'}
                        </button>
                    </form>

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
