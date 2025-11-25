import {getDBConnection} from '../db/db.js'



export async function addToCart(req,res) {


    const db = getDBConnection


    try {

       let productId = req.body.productId
       productId = parseInt(productId)

       const user = req.session.userId

       const checkingDuplicates = await db.get(`
        
            SELECT * FROM cart_items
           ( WHERE user_id = ? AND product_id =?)
        `,[user,productId])


        if(checkingDuplicates){
            await db.run(`
                
                    UPDATE cart_items
                    SET quantity = quantity + 1
                    WHERE user_id = ? AND product_id = ?
                
                `,[user, productId])

                res.status(200).json({message:'Item added to cart!'})

        } else {

            await db.run(`
                    INSERT INTO cart_items (user_id, product_id, quantity)
                    VALUES(? ,? ,?)
                
                `,[user, productId, 1])

                res.status(200).json({message:'Added to cart!'})

        }



    } catch(error){
        res.status(400).json({error:'There was an error on adding to cart'
        })
    }



}