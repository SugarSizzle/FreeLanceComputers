import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function viewTechnicians() {
    const db = await open({
        filename: path.join('server', 'database.db'),
        driver: sqlite3.Database
    })

    const technicians = await db.all('SELECT * FROM technicians')

    if (technicians.length === 0) {
        console.log('No technicians found in the database.')
    } else {
        console.log(`\nFound ${technicians.length} technician(s):\n`)
        console.table(technicians)
    }

    await db.close()
}

viewTechnicians()
