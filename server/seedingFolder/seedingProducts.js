import sqlite3 from 'sqlite3'
import {open} from 'sqlite'
import path from 'node:path'
import { productsDatabase } from '../databases/productsDatabase.js'



async function seedProducts() {

    const db = await open({

        filename:path.join('server','database.db'),
        driver:sqlite3.Database


    })

    //funtion here


    try {
            db.run('BEGIN TRANSACTION')


            for (const {id, name, type, price, condition, specs, secondarySpecs, description, images} of productsDatabase) {
                await db.run(`INSERT INTO products (id, name, type, price, condition, specs, secondarySpecs, description, images)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                    [
                        id, 
                        name, 
                        type, 
                        price, 
                        condition, 
                        JSON.stringify(specs), 
                        JSON.stringify(secondarySpecs), 
                        description, 
                        JSON.stringify(images)])
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


