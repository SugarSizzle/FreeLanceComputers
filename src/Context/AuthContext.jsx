import {createContext , useState, useContext, useEffect}  from 'react'

const AuthContext = createContext()

const API_URL = 'http://localhost:5000/api/auth'

export const AuthContextProvider = ({children}) => {

    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log('This is the session ', session);

    useEffect(() => {

        checkSession();
    }, []);  
    
    const checkSession = async () => {
        try {
            const response = await fetch(`${API_URL}/session`, {
                method: 'GET',
                credentials: 'include', 
            });

            if (response.ok) {
                const data = await response.json();
                setSession(data.user);
            } else {
                setSession(null);
            }
        } catch (error) {
            console.error('Error checking session:', error.message);
            setSession(null);
        } finally {
            setLoading(false);
        }
    };

    const signInUser = async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', 
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                return { success: false, error: data.error || 'Login failed' };
            }

            setSession(data.user);
            console.log('Login success:', data);
            return { success: true, data: { session: data.user, user: data.user } };

        } catch (error) {
            console.error('Unexpected error during sign-in:', error.message);
            return { success: false, error: 'An unexpected error occurred. Please try again.' };
        }
    };

    const signOutUser = async () => {
        try {
            const response = await fetch(`${API_URL}/logout`, {
                method: 'POST',
                credentials: 'include',
            });

            if (!response.ok) {
                const data = await response.json();
                return { success: false, error: data.error || 'Logout failed' };
            }

            setSession(null);
            console.log('Logout success');
            return { success: true, data: null };

        } catch (error) {
            console.error('Unexpected error during sign-out:', error.message);
            return { success: false, error: 'An unexpected error occurred. Please try again.' };
        }
    };

    const signUpUser = async (email, password, firstname, lastname) => {
        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password, firstname, lastname }),
            });

            const data = await response.json();

            if (!response.ok) {
                return { success: false, error: data.error || 'Sign up failed' };
            }

            setSession(data.user);
            console.log('Sign up success:', data);
            return { success: true, data: { session: data.user, user: data.user } };

        } catch (error) {
            console.error('Unexpected error during sign-up:', error.message);
            return { success: false, error: 'An unexpected error occurred. Please try again.' };
        }
    };

    return (
        <AuthContext.Provider value={{session, loading, signInUser, signOutUser, signUpUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext)
}
