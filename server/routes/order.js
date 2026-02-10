import express from 'express'
import { createOrder, getUserOrders, getOrderById } from '../controllers/ordersController.js'


const orderRouter = express.Router()

orderRouter.post('/', createOrder)
orderRouter.get('/', getUserOrders)
orderRouter.get('/:id', getOrderById)

export default orderRouter