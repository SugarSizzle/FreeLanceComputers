import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import apiRouter from './routes/apiRoutes.js';
import authRouter from './routes/auth.js';
import cartRouter from './routes/cart.js'
import orderRouter from './routes/order.js'
import productsRouter from './routes/products.js'
import createServiceRequestRouter from './routes/serviceRequest.js'
import newServiceRequestRouter from './routes/newServiceRequests.js'
import updateServiceRequestRouter from './routes/updateServiceRequests.js'
import inProgressRouter from './routes/inProgressRoutes.js'
import timeLineRouter from './routes/timelineRoute.js'
import userTicketsRouter from './routes/userTickets.js'
import techniciansRouter from './routes/technicians.js'


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));
app.use(express.json());


app.use((req, res, next) => {
    console.log(`📨 ${req.method} ${req.url}`);
    next();
});


app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-this',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false, 
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



app.use('/api/auth', authRouter)
app.use('/api/cart', cartRouter)
app.use('/api/orders', orderRouter)
app.use('/api/products', productsRouter)
app.use('/api/services', createServiceRequestRouter)
app.use('/api/service-requests/update', updateServiceRequestRouter)
app.use(`/api/service-requests/`, newServiceRequestRouter)
app.use('/api/service-requests/in-progress', inProgressRouter)
app.use('/api/service-requests/timeline', timeLineRouter)
app.use('/api/user/tickets', userTicketsRouter)
app.use('/api/technicians', techniciansRouter)







process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection:', reason);
});



const server = app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log('🟢 Server is ready and listening for requests');
});

server.on('close', () => {
    console.log('❌ Server is closing');
});

server.on('error', (err) => {
    console.error('❌ Server error:', err);
});
  