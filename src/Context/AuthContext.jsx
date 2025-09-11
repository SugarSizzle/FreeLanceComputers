import {createContext , useState, useContext, useEffect}  from 'react'
import { supabase } from '../lib/supabase'

const AuthContext= createContext()

export const AuthContextProvider = ({children}) => {

    const [session, setSession] = useState(undefined);

useEffect(() => {

    async function getInitialSession(){

        try{

            const {data , error} = await supabase.auth.getSession();
            if(error) {
                throw error;
            }
            console.log(data.session);

        } catch(error){
            console.log(`Error getting session` , error.message)

        }

    }

getInitialSession();

    supabase.auth.onAuthStateChange((_event, session) => {

        setSession(session);
        console.log(`session changed` , session)

    })

    },[]);  
    
    const signInUser = async (email , password) => {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email.toLowerCase(),
                password:password,
            })
            if(error){
                console.error('Supabase sign-in error' , error.message)
                return {success: false , error:error.message}
            }
            console.log('Supbaase sign-in success' , data);
            return {success: true, data};

        }  catch(error){
            console.log('Unexpected error suring sign-in' , error.message)
            return {success: false, error: 'An unexpected error occured. Please try again.'}
        }

    }

    const signOutUser = async (email , password) => {
        try {
            const {error} = await supabase.auth.signOut();
            if(error){
                console.error('Supabase sign-out error' , error.message)
                return {success: false, error: error.message}
            }
            console.log('Supabase sign-out success')
            return {success: true, data: null}
        } catch(error){
            console.error('Unexpected error during sign-out' , error.message)
            return {success: false, error: 'An unexpected error occured. Please try again.'}
        }
    }

    

    return (
        <AuthContext.Provider value={{session, signInUser, signOutUser}}>
            {children}
        </AuthContext.Provider>

    )

}

export const useAuth = () => {

    return useContext(AuthContext)

}