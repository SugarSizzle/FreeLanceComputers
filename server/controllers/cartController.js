import { getDBConnection } from '../db/db.js'

export async function addToCart(req, res) {
  try {
    const db = await getDBConnection()

    const productId = parseInt(req.body.productId, 10)

    if (isNaN(productId)) {
      return res.status(400).json({ error: 'Invalid product ID'})
    }

    const userId = req.session.userId

    const existing = await db.get('SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?', [userId, productId])

    if (existing) {
      await db.run('UPDATE cart_items SET quantity = quantity + 1 WHERE id = ?', [existing.id])
    } else {
      await db.run('INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, 1)', [userId, productId])
    }

    res.json({ message: 'Added to cart' })
  } catch (error) {
    console.error('Error adding to cart:', error)
    res.status(500).json({ error: 'Failed to add item to cart' })
  }
}

export async function getCartCount(req, res) {
  try {
    const db = await getDBConnection()

    const result = await db.get(`SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?`, [req.session.userId])

    res.json({ totalItems: result.totalItems || 0 })
  } catch (error) {
    console.error('Error getting cart count:', error)
    res.status(500).json({ error: 'Failed to get cart count' })
  }
}  


export async function getAll(req, res) {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ error: 'Not logged in' })
    }

    const db = await getDBConnection()

    const items = await db.all(`
      SELECT 
        ci.id AS cartItemId, 
        ci.quantity, 
        p.id AS productId,
        p.name, 
        p.price,
        p.images,
        p.specs,
        p.secondarySpecs,
        p.description
      FROM cart_items ci 
      JOIN products p ON p.id = ci.product_id 
      WHERE ci.user_id = ?
    `, [req.session.userId])

    const parsedItems = items.map(item => ({
      ...item,
      images: JSON.parse(item.images),
      specs: JSON.parse(item.specs),
      secondarySpecs: JSON.parse(item.secondarySpecs),
    }))

    res.json({ items: parsedItems })
  } catch (error) {
    console.error('Error getting cart items:', error)
    res.status(500).json({ error: 'Failed to get cart items' })
  }
} 


export async function deleteItem(req, res) {
  try {
    const db = await getDBConnection()

    const itemId = parseInt(req.params.itemId, 10)

    if (isNaN(itemId)) {
      return res.status(400).json({error: 'Invalid item ID'})
    }

    const item = await db.get('SELECT quantity FROM cart_items WHERE id = ? AND user_id = ?', [itemId, req.session.userId])

    if (!item) {
      return res.status(400).json({error: 'Item not found'})
    }

    await db.run('DELETE FROM cart_items WHERE id = ? AND user_id = ?', [itemId, req.session.userId])

    res.status(204).send()
  } catch (error) {
    console.error('Error deleting cart item:', error)
    res.status(500).json({ error: 'Failed to delete cart item' })
  }
}

export async function deleteAll(req, res) {
  try {
    const db = await getDBConnection()

    await db.run('DELETE FROM cart_items WHERE user_id = ?', [req.session.userId])

    res.status(204).send()
  } catch (error) {
    console.error('Error clearing cart:', error)
    res.status(500).json({ error: 'Failed to clear cart' })
  }
}

export async function updateQuantity (req, res) {
  try {
    const db = await getDBConnection()

    const itemId = parseInt(req.params.itemId, 10)
    const {quantity} = req.body

    if(isNaN(itemId)) {
      return res.status(400).json({error: 'Invalid item ID'})
    }

    if(quantity < 1) {
      return res.status(400).json({error: 'Quantity must be at least 1'})
    }

    const item = await db.get('SELECT quantity FROM cart_items WHERE id = ? AND user_id = ?', [itemId, req.session.userId])

    if(!item) {
      return res.status(400).json({error: `Item not found`})
    }

    await db.run(`UPDATE cart_items SET quantity = ? WHERE id = ? AND user_id = ?`, [quantity, itemId, req.session.userId])
    res.json({message: `Quantity updated`})
  } catch (error) {
    console.error('Error updating quantity:', error)
    res.status(500).json({ error: 'Failed to update quantity' })
  }
}
