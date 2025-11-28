import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function viewAllUsers() {
  const db = await open({
    filename: path.join('server', 'database.db'), 
    driver: sqlite3.Database
  });

  try {
    const users = await db.all('SELECT * FROM users')
    
    const formattedUsers = users.map(user => ({
      id: user.id,
      uuid: user.uuid || 'N/A',
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone || 'N/A',
      role: user.role,
      created_at: user.created_at
    }))
    
    console.log('\n👥 USERS TABLE\n')
    console.table(formattedUsers) 
  } catch (err) {
    console.error('Error fetching users:', err.message)
  } finally {
    await db.close()
  }
}

viewAllUsers()

