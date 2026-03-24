import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function migrate() {

    const db = await open({
        filename: path.join('server', 'database.db'),
        driver: sqlite3.Database
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS technicians (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uuid TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL,
            specialty TEXT NOT NULL,
            bio TEXT,
            image TEXT,
            phone TEXT,
            email TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `)
    console.log('Technicians table created')

    const columns = await db.all(`PRAGMA table_info(service_requests)`)
    const hasTechnicianId = columns.some(col => col.name === 'technician_id')

    if (!hasTechnicianId) {
        await db.exec(`ALTER TABLE service_requests ADD COLUMN technician_id INTEGER REFERENCES technicians(id)`)
        console.log('Added technician_id column to service_requests')
    } else {
        console.log('technician_id column already exists on service_requests')
    }

    await db.close()
    console.log('Migration complete')
}

migrate()
