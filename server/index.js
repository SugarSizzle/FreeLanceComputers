import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import apiRouter from './routes/apiRoutes.js';
import authRouter from './routes/auth.js';
import cartRouter from './routes/cart.js'


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());




app.get('/', (req, res) => {
    res.json({ 
        message: 'Express API Server running on port 5000',
        endpoints: {
            services: 'http://localhost:5000/api/services',
            products: 'http://localhost:5000/api/products'
        },
        note: 'Frontend runs on http://localhost:3000'
    });
});





app.use('/api', apiRouter);
app.use('/api/auth' , authRouter)

app.use('api/cart', cartRouter)

export const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  