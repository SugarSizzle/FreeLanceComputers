import {getDBConnection} from '../db/db.js'
import { v4 as uuidv4 } from 'uuid'

export async function createServiceRequest(req, res) {

try {

    if(!req.session.userId || !res.session){
      return res.status(401).json({error:'authentication required'})
    }

    const user_id = req.session.userId

    const {description, device_info, service_type} = req.body

    if(!description || !device_info || !service_type){
      return res.status(400).json({error: `All fields are required`})
    }

    description = description.trim()
    device_info = device_info.trim()
    service_type = service_type.trim()

    const uuid = uuidv4()

    const db = await getDBConnection()

    const result = await db.run(`
      INSERT INTO service_requests (uuid, description, device_info, user_id, service_type, status) VALUES (?, ?, ?, ?, ?, ?)
      `, [uuid, description, device_info, user_id, service_type, 'pending'])
      
      if(!result.lastID){ 
        return res.status(400).json({error:'Failed to create service request'})
      }

      return res.status(200).json({message:'Service request created successfully', request:{id:result.lastID, uuid, description, device_info, service_type}})

    } catch (error){
      console.error('Error in createServiceRequest:', error)
      return res.status(500).json({error:'There was an error creating a service request'})

    }

   
  
  }