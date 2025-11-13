import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function viewAllProducts() {
  const db = await open({
    filename: path.join('server', 'database.db'), 
    driver: sqlite3.Database
  });

  try {
    const products = await db.all('SELECT * FROM products')
    
    // Format the data for better readability
    const formattedProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      type: product.type,
      price: product.price,
      condition: product.condition,
      specs: `${JSON.parse(product.specs).length} items`,
      secondarySpecs: `${JSON.parse(product.secondarySpecs).length} items`,
      description: product.description.substring(0, 50) + '...',
      images: `${JSON.parse(product.images).length} images`
    }))
    
    console.table(formattedProducts) 
  } catch (err) {
    console.error('Error fetching products:', err.message)
  } finally {
    await db.close()
  }
}

viewAllProducts()