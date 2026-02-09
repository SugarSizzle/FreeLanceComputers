import express from 'express'
import { getUserTickets } from '../controllers/userTicketsController.js'
import { getUserTicketTimeline } from '../controllers/userTimelineController.js'

const userTicketsRouter = express.Router()

userTicketsRouter.get('/', getUserTickets)
userTicketsRouter.get('/timeline/:id', getUserTicketTimeline)

export default userTicketsRouter

