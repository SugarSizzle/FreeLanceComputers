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
        await db.close();





}

createTable();