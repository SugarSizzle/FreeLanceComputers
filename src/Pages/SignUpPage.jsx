import React, { useState } from 'react'
import {useActionState} from 'react'
import styles from './SignUpPage.module.css'
import { useAuth } from '../Context/AuthContext'
import {useNavigate, Link} from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";

export const SignUpPage = () => {
    const {signUpUser} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();
    
    const isFormComplete = email.trim() !== '' && 
                          password.trim() !== '' && 
                          confirmPassword.trim() !== '' && 
                          firstName.trim() !== '' &&
                          lastName.trim() !== '';

    const [error, submitAction, isPending] = useActionState(
        async (previousState, formData) => {
            const email = formData.get('email');
            const password = formData.get('password');
            const confirmPassword = formData.get('confirmPassword');
            const firstname = formData.get('firstname');
            const lastname = formData.get('lastname');

            try {
                if(password !== confirmPassword){
                    return new Error('Passwords do not match');
                }

                const {
                    success, 
                    data, 
                    error: authError
                } = await signUpUser(email, password, firstname, lastname);

                if(authError){
                    return new Error(authError);
                }
            
                if(success && data?.session){
                    navigate('/dashboard/overview', { replace: true });
                    return null
                }
                return null
            } catch( error){
                console.error('Sign up error' , error.message)
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
                            <label htmlFor="firstname" className={styles.inputLabel}>
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className={styles.inputField}
                                placeholder="Enter your first name"
                                required
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="lastname" className={styles.inputLabel}>
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className={styles.inputField}
                                placeholder="Enter your last name"
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

                        <div className={styles.inputContainer}>
                            <label htmlFor="confirmPassword" className={styles.inputLabel}>
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={styles.inputField}
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={`${styles.submitButton} ${isFormComplete ? styles.submitButtonActive : styles.submitButtonInactive}`}
                            disabled={isPending || !isFormComplete}
                        >
                            {isPending ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    {error && (
                        <div className={styles.errorMessage}>
                            {error.message}
                        </div>
                    )}

                    <div className={styles.switchMode}>
                        <p className={styles.switchText}>
                            Already have an account?
                        </p>
                        <Link to="/signin" className={styles.switchButton}>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
