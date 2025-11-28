import express from 'express';
import { registerUser, loginUser, logoutUser, getSession } from '../controllers/authController.js';


const authRouter = express.Router();

authRouter.post('/signup', registerUser)
authRouter.post('/login', loginUser)
authRouter.post('/logout', logoutUser)
authRouter.get('/session', getSession)

export default authRouter;