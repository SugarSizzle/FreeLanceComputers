import express from 'express'
import { getUserTickets, getLatestServiceUpdate } from '../controllers/userTicketsController.js'
import { getUserTicketTimeline } from '../controllers/userTimelineController.js'

const userTicketsRouter = express.Router()

userTicketsRouter.get('/', getUserTickets)
userTicketsRouter.get('/timeline/:id', getUserTicketTimeline)
userTicketsRouter.get('/latest-update', getLatestServiceUpdate)

export default userTicketsRouter

