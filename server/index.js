import express from 'express';
import cors from 'cors';
import session from 'express-session';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import apiRouter from './routes/apiRoutes.js';
import authRouter from './routes/auth.js';
import cartRouter from './routes/cart.js'
import orderRouter from './routes/order.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

// Session middleware for authentication
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-this',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false, // set to true in production with HTTPS
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
}));




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
app.use('/api/auth', authRouter)
app.use('/api/cart', cartRouter)
app.use('/api/orders', orderRouter)
console.log('✅ Order routes registered at /api/orders')


// export const supabase = createClient(
//     process.env.VITE_SUPABASE_URL,
//     process.env.VITE_SUPABASE_ANON_KEY
// );


process.on('exit', (code) => {
    console.log('Process exiting with code:', code);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  