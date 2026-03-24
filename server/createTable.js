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
                image TEXT,
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



    await db.exec(

        `
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            status TEXT NOT NULL,
            total TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
            )
        `
    )

    console.log('Orders table created successfully')

    await db.exec(`
        CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders (user_id)
    `)

    console.log('Index on orders.user_id created successfully') 
    


    await db.exec(
        `
        CREATE TABLE IF NOT EXISTS order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        price TEXT NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
        
        )
        
        `
    )

    console.log('Order items table created successfully')
   



    await db.exec(`
        CREATE TABLE IF NOT EXISTS technicians (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uuid TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL,
            specialty TEXT NOT NULL,
            bio TEXT,
            photo TEXT,
            phone TEXT,
            email TEXT,
            is_active BOOLEAN DEFAULT TRUE NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
    console.log('Technicians table created successfully')

    await db.exec(`
    
        CREATE TABLE IF NOT EXISTS service_requests
            (
    
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uuid TEXT NOT NULL UNIQUE,
            user_id INTEGER NOT NULL,
            service_type TEXT NOT NULL,
            description TEXT NOT NULL,
            device_info TEXT NOT NULL,
            status TEXT DEFAULT 'pending' CHECK(status IN ('pending' , 'in_progress' , 'completed' , 'cancelled')) NOT NULL,
            requested_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            admin_notes TEXT,
            seen_by_admin BOOLEAN DEFAULT FALSE NOT NULL,
            technician_id INTEGER,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (technician_id) REFERENCES technicians(id)
            
            )
        `);


        await db.exec(`
            CREATE INDEX IF NOT EXISTS idx_service_requests_user_id ON service_requests(user_id)
            `)
            console.log('Index on service_requests.user_id created successfully')

        await db.exec(`
            CREATE INDEX IF NOT EXISTS idx_service_requests_status ON service_requests(status)
            `)
            console.log('Index on service_requests.status created successfully')
    
        console.log('Service requests table created successfully')
    
        
        await db.exec(`
            CREATE TABLE IF NOT EXISTS service_updates
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                admin_id INTEGER NOT NULL,
                service_request_id INTEGER NOT NULL,
                update_type TEXT NOT NULL,
                update_description TEXT NOT NULL,
                update_time DATETIME DEFAULT CURRENT_TIMESTAMP,
                images TEXT,
                is_visible_to_customer BOOLEAN DEFAULT TRUE NOT NULL,
                FOREIGN KEY (service_request_id) REFERENCES service_requests(id),
                FOREIGN KEY (admin_id) REFERENCES users(id)
            )
    
            `);
            await db.close();
            console.log('Database closed successfully')


}




createTable();