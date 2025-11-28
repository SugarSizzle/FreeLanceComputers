import validator from 'validator'
import { getDBConnection } from '../db/db.js'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

export async function registerUser(req, res) {

  let { firstname, lastname, email, password } = req.body

  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' })

  }

  firstname = firstname.trim()
  lastname = lastname.trim()
  email = email.trim()

  if (!validator.isEmail(email)) {

    return res.status(400).json({ error: 'Invalid email format' })

  }

  try {

    const db = await getDBConnection()

    const existing = await db.get('SELECT id FROM users WHERE email = ?', [email])

    if (existing) {
      return res.status(400).json({ error: 'Email already in use.' })
    }

    const hashed = await bcrypt.hash(password, 10)
    const userId = uuidv4()

    const result = await db.run(
      'INSERT INTO users (uuid, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)', 
      [userId, firstname, lastname, email, hashed]
    )
    console.log('User created:', result)

    req.session.userId = result.lastID

    res.status(201).json({ 
      message: 'User registered',
      user: { id: result.lastID, email, name: `${firstname} ${lastname}` }
    })
  } catch (err) {

    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed. Please try again.' })

  }

}

export async function loginUser(req, res) {

  let { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'All fields are required' } )
  }

  email = email.trim()



  try {
    const db = await getDBConnection()

    const user = await db.get('SELECT * FROM users WHERE email = ?', [email])

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials'})
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {

      return res.status(401).json({ error: 'Invalid credentials'})

    }

    req.session.userId = user.id
    res.json({ 
      message: 'Logged in',
      user: { id: user.id, email: user.email, name: `${user.firstname} ${user.lastname}`.trim() }
    })


  } catch (err) {
    console.error('Login error:', err.message)
    res.status(500).json({ error: 'Login failed. Please try again.' })
  }
}


export async function logoutUser (req ,res) {


  req.session.destroy(err => {

    if(err){
      return res.status(400).json({err:'There was an error logging out'})
    }
    return res.status(200).json({message:'Logged out!'})

  })

  
}

export async function getSession(req, res) {
  if (req.session && req.session.userId) {
    try {
      const db = await getDBConnection()
      const user = await db.get('SELECT id, email, firstname, lastname FROM users WHERE id = ?', [req.session.userId])
      
      if (user) {
        return res.json({ user: { id: user.id, email: user.email, name: `${user.firstname} ${user.lastname}`.trim() } })
      }
    } catch (err) {
      console.error('Session check error:', err.message)
    }
  }
  
  return res.status(401).json({ error: 'Not authenticated' })
}
