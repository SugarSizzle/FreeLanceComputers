import express from 'express'
import { getTechnicians, getTechnicianById } from '../controllers/techniciansController.js'

const techniciansRouter = express.Router()

techniciansRouter.get('/', getTechnicians)
techniciansRouter.get('/:id', getTechnicianById)

export default techniciansRouter
