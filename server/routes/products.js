import express from 'express'
import productsController, { productsDetailedController } from '../controllers/productsController.js'


const productsRouter = express.Router()

productsRouter.get('/', productsController)
productsRouter.get('/:id', productsDetailedController)

export default productsRouter