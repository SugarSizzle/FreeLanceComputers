import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { pathToFileURL } from 'node:url'



async function createTable() {

    const db = await open({
        filename: path.join('server','database.db'),
        driver:sqlite3.Database

    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type TEXT NOT NULL,
            price TEXT NOT NULL,
            condition TEXT NOT NULL,
            specs TEXT NOT NULL,
            secondarySpecs TEXT NOT NULL,
            description TEXT NOT NULL,
            images TEXT NOT NULL
        )
        `
         
        )
        console.log('Products table created successfully')


        await db.exec(`
            CREATE TABLE IF NOT EXISTS users  (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                uuid TEXT NOT NULL UNIQUE,
                firstname TEXT NOT NULL,
                lastname TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                phone TEXT UNIQUE,
                role TEXT DEFAULT 'customer' CHECK(role IN ('customer' , 'admin')) NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP

            )
            `)
    
            console.log('Users table created successfully')


    await db.exec(
        `
        CREATE TABLE IF NOT EXISTS cart_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (product_id) REFERENCES products(id)

        )
        
        `
    )

    console.log('Cart items table created successfully')

    await db.close();


}

createTable();