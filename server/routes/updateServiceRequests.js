import express from 'express'
import { updateServiceRequest } from '../controllers/updateServiceRequest.js'


const updateServiceRequestRouter = express.Router()

updateServiceRequestRouter.post('/', updateServiceRequest)

export default updateServiceRequestRouter