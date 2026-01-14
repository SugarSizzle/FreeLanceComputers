import express from 'express'
import { getTimeline } from '../controllers/getTimelineController.js'


const timeLineRouter = express.Router()


timeLineRouter.get('/:id', getTimeline)

export default timeLineRouter