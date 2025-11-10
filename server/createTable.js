import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { pathToFileURL } from 'node:url'



async function createTable() {

    const db = await open({
        filename: path.join('database.db'),
        driver:sqlite3.Database

    })

    await db.exec(`
        
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT NOT NULL,
            image TEXT NOT NULL,
            price REAL NOT NULL,
            type TEXT NOT NULL,
            condition TEXT NOT NULL,
            specs TEXT NOT NULL,
            img TEXT NULL,
            
        
        )
        `
         
        )

        await db.close();


}

createTable();