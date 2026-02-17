import {getDBConnection} from '../db/db.js'



async function createOrder(req, res) {
    
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ error: 'Authentication required' })
    }

    const userId = req.session.userId

    try {
        const db = await getDBConnection()

        // Get all cart items for this user
        const cartItems = await db.all(
            `SELECT 
                ci.id AS cartItemId,
                ci.product_id,
                ci.quantity,
                p.price
            FROM cart_items ci
            JOIN products p ON p.id = ci.product_id
            WHERE ci.user_id = ?`,
            [userId]
        )

        if (cartItems.length === 0) {
            return res.status(400).json({ error: 'Your cart is empty' })
        }

        // Calculate total (subtotal + shipping)
        const subtotal = cartItems.reduce((sum, item) => {
            return sum + (parseFloat(item.price) * item.quantity)
        }, 0)
        const shippingFee = 10.00
        const total = subtotal + shippingFee

        // Create the order
        const orderResult = await db.run(
            'INSERT INTO orders (user_id, status, total) VALUES (?, ?, ?)',
            [userId, 'processing', total.toFixed(2)]
        )

        const orderId = orderResult.lastID

        // Create order items
        for (const item of cartItems) {
            await db.run(
                'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
                [orderId, item.product_id, item.quantity, item.price]
            )
        }

        // Clear the cart
        await db.run('DELETE FROM cart_items WHERE user_id = ?', [userId])

        return res.status(201).json({ 
            message: 'Order created successfully',
            orderId: orderId,
            total: total.toFixed(2)
        })

    } catch (error) {
        console.error('Error in createOrder:', error)
        return res.status(500).json({ error: 'There was an error creating your order' })
    }
}

async function getUserOrders(req, res) {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ error: 'Authentication required' })
    }

    const userId = req.session.userId

    try {
        const db = await getDBConnection()

        const orders = await db.all(
            `SELECT 
                o.id,
                o.status,
                o.total,
                o.created_at
            FROM orders o
            WHERE o.user_id = ?
            ORDER BY o.created_at DESC`,
            [userId]
        )

        for (let order of orders) {
            const orderItems = await db.all(
                `SELECT 
                    oi.id,
                    oi.quantity,
                    oi.price,
                    p.name as product_name,
                    p.type as product_type,
                    p.images as product_images
                FROM order_items oi
                JOIN products p ON oi.product_id = p.id
                WHERE oi.order_id = ?`,
                [order.id]
            )
            order.items = orderItems
        }

        return res.status(200).json({ 
            message: 'Orders fetched successfully', 
            orders: orders 
        })

    } catch (error) {
        console.error('Error in getUserOrders:', error)
        return res.status(500).json({ error: 'There was an error fetching your orders' })
    }
}

async function getOrderById(req, res) {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ error: 'Authentication required' })
    }

    const userId = req.session.userId
    const orderId = req.params.id

    try {
        const db = await getDBConnection()

        const order = await db.get(
            `SELECT 
                o.id,
                o.status,
                o.total,
                o.created_at
            FROM orders o
            WHERE o.id = ? AND o.user_id = ?`,
            [orderId, userId]
        )

        if (!order) {
            return res.status(404).json({ error: 'Order not found' })
        }

       
        const orderItems = await db.all(
            `SELECT 
                oi.id,
                oi.quantity,
                oi.price,
                p.name as product_name,
                p.type as product_type,
                p.condition as product_condition,
                p.images as product_images
            FROM order_items oi
            JOIN products p ON oi.product_id = p.id
            WHERE oi.order_id = ?`,
            [orderId]
        )
        
        order.items = orderItems

        return res.status(200).json({ 
            message: 'Order fetched successfully', 
            order: order 
        })

    } catch (error) {
        console.error('Error in getOrderById:', error)
        return res.status(500).json({ error: 'There was an error fetching the order' })
    }
}

export { createOrder, getUserOrders, getOrderById }