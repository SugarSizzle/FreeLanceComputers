import express from 'express'
import { getNewServiceRequests } from '../controllers/newServiceRequests.controller.js'

const newServiceRequestRouter = express.Router()

newServiceRequestRouter.get('/new', getNewServiceRequests)

export default newServiceRequestRouter