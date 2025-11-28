import {getDBConnection} from '../db/db.js'



async function createOrder(req, res) {
    console.log('🔥 createOrder function called!')
    
    try {
        const db = await getDBConnection()
        const user = req.session.userId
        console.log('User from session:', user)
        res.json({message:'Order created'})
    } catch (error){
        console.error('Error in createOrder:', error)
        return res.status(400).json({error:'There was an error creating an order'})
    }



}

export default createOrder