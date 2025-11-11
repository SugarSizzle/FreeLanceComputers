import sqlite3 from 'sqlite3'
import {open} from 'sqlite'
import path from 'node:path'
import { productsDatabase } from '../databases/productsDatabase.js'



async function seedProducts() {

    const db = await open({

        filename:path.join('server','database.db'),
        driver:sqlite3.Database


    })


    try {
            db.run('BEGIN TRANSACTION')


            for (const {id, name, type, price, condition, specs, secondarySpecs, description, images} of productsDatabase) {
                await db.run(`INSERT INTO products (id, name, type, price, condition, specs, secondarySpecs, description, images)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                    [
                        products.id, 
                        products.name, 
                        products.type, 
                        products.price, 
                        products.condition, 
                        JSON.stringify(products.specs), 
                        JSON.stringify(products.secondarySpecs), 
                        products.description, 
                        JSON.stringify(products.images)])
            }

            await db.run('COMMIT')
            console.log('Products seeded successfully')
    } catch (error) {
        await db.run('ROLLBACK')
        console.error('Error seeding products:' , error.message)

    } finally {
        await db.close()
        console.log('Database closed')
    }

}

seedProducts();


