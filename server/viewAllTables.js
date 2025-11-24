import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function viewAllTables() {
  const db = await open({
    filename: path.join('server', 'database.db'), 
    driver: sqlite3.Database
  });

  try {
    // Products
    console.log('\n📦 PRODUCTS TABLE\n')
    const products = await db.all('SELECT * FROM products')
    const formattedProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      type: product.type,
      price: product.price,
      condition: product.condition
    }))
    console.table(formattedProducts)

    // Users
    console.log('\n👥 USERS TABLE\n')
    const users = await db.all('SELECT * FROM users')
    const formattedUsers = users.map(user => ({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      role: user.role
    }))
    console.table(formattedUsers)

    // Cart Items
    console.log('\n🛒 CART ITEMS TABLE\n')
    const cartItems = await db.all(`
      SELECT 
        ci.id,
        ci.user_id,
        ci.product_id,
        ci.quantity
      FROM cart_items ci
    `)
    console.table(cartItems)

  } catch (err) {
    console.error('Error fetching data:', err.message)
  } finally {
    await db.close()
  }
}

viewAllTables()

