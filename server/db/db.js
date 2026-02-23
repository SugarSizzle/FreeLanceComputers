import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

const SLOW_QUERY_THRESHOLD_MS = 100
const isDev = process.env.NODE_ENV !== 'production'

function wrapWithLogging(db) {
    const methods = ['run', 'get', 'all']

    for (const method of methods) {
        const original = db[method].bind(db)

        db[method] = async function (sql, ...params) {
            const start = performance.now()

            try {
                const result = await original(sql, ...params)
                const duration = performance.now() - start

                console.log(`[DB ${method.toUpperCase()}] ${duration.toFixed(2)}ms | ${sql.trim()}`)

                if (isDev && params.length > 0) {
                    console.log(`  Params: ${JSON.stringify(params.flat())}`)
                }

                if (duration > SLOW_QUERY_THRESHOLD_MS) {
                    console.warn(`[SLOW QUERY] ${duration.toFixed(2)}ms | ${sql.trim()}`)
                }

                return result
            } catch (error) {
                const duration = performance.now() - start

                console.error(`[DB ERROR] ${method.toUpperCase()} failed after ${duration.toFixed(2)}ms | ${sql.trim()}`)

                if (isDev && params.length > 0) {
                    console.error(`  Params: ${JSON.stringify(params.flat())}`)
                }

                console.error(`  Error: ${error.message}`)

                throw error
            }
        }
    }

    return db
}

export async function getDBConnection() {

    const dbpath = path.join('server', 'database.db')

    try {
        const db = await open({
            filename: dbpath,
            driver: sqlite3.Database
        })

        return wrapWithLogging(db)
    } catch (error) {
        console.error(`[DB CONNECTION ERROR] Failed to open database: ${error.message}`)
        throw error
    }

}