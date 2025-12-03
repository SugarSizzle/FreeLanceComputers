import express from 'express'
import {addToCart, getAll, deleteItem, getCartCount, deleteAll, updateQuantity} from '../controllers/cartController.js'


const cartRouter = express.Router()

cartRouter.post('/add',addToCart)
cartRouter.get('/count', getCartCount)
cartRouter.get('/' , getAll)
cartRouter.delete('/:itemId', deleteItem)
cartRouter.delete('/' , deleteAll)
cartRouter.put('/:itemId', updateQuantity)


export default cartRouter

