import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'


export async function getDBConnection() {

    const dbpath = path.join('server.database.db')

    return open({
        filename: dbpath,
        driver: sqlite3.Database
    })

}