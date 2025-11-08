import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import apiRouter from './routes/apiRoutes';


dotenv.config();
const app = express();
app.use(cors());


app.use('/api' , apiRouter)



export const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
  );
  