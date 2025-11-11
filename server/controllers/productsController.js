import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

export const productsController = async (req, res) => {
    try {
        const db = await open({
            filename: path.join('server', 'database.db'),
            driver: sqlite3.Database
        });

        const products = await db.all('SELECT * FROM products');

        const parsedProducts = products.map((product) => ({
            ...product,
            specs: JSON.parse(product.specs),
            secondarySpecs: JSON.parse(product.secondarySpecs),
            images: JSON.parse(product.images)
        }));

        await db.close();
        res.json(parsedProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: error.message });
    }
};