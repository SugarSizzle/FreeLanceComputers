import express from 'express';
import { registerUser, loginUser, logoutUser, getSession } from '../controllers/authController.js';
import { loginLimiter } from '../middleware/rateLimiter.js';


const authRouter = express.Router();

authRouter.post('/signup', registerUser)
authRouter.post('/login', loginLimiter, loginUser)
authRouter.post('/logout', logoutUser)
authRouter.get('/session', getSession)

export default authRouter;