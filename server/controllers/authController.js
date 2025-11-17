import { getDBConnection } from '../db/db.js'
import validator from 'validator';

export async function registerUser(req,res) {

   const db = await getDBConnection();

   let { firstname, lastname, email, password, phone } = req.body;

   if (!firstname || !lastname || !email || !password || !phone) {

    return res.status(400).json({ error: 'All fields are required' });
   }

   firstname = firstname.trim();
   lastname = lastname.trim();
   username = username.trim();
   email = email.trim();

   if((!/^[a-zA-Z0-9_-]{1,20}$/.test(username))){
        return res.status(400).json({ error: 'Username can only contain letters, numbers, underscores, and hyphens, and must be between 1 and 20 characters long' });
   }

   if(!validator.isEmail(email)){
        return res.status(400).json({ error: 'Invalid email address' });
   }

   try {

        const db = await getDBConnection();
        


   } catch (err) {

    console.error('Registeration error' , err.message)
    res.status(500).json({error: null, message: 'An unexpected error occured. Please try again.'})
   }

}