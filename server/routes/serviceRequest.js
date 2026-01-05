import express from 'express'
import { createServiceRequest } from '../controllers/createServiceRequestController.js'


const createServiceRequestRouter = express.Router();

createServiceRequestRouter.post('/', createServiceRequest)

export default createServiceRequestRouter;