import express from 'express'
    import { getInProgressTickets, getCompletedTickets } from '../controllers/inProgressTicketsController.js'

const inProgressRouter = express.Router()


inProgressRouter.get('/', getInProgressTickets)
inProgressRouter.get('/completed', getCompletedTickets)

export default inProgressRouter
