import {getDBConnection} from '../db/db.js'
import { v4 as uuidv4 } from 'uuid'

export async function createServiceRequest(req, res) {

try {

    if(!req.session || !req.session.userId){
      return res.status(401).json({error:'Authentication required'})
    }

    const user_id = req.session.userId

    const {description, deviceInfo, serviceType} = req.body

    if(!description || !deviceInfo || !serviceType){
      return res.status(400).json({error: `All fields are required`})
    }

    const cleanDescription = description.trim()
    const cleanDeviceInfo = deviceInfo.trim()
    const cleanServiceType = serviceType.trim()

    const uuid = uuidv4()

    const db = await getDBConnection()

    const result = await db.run(`
      INSERT INTO service_requests (uuid, description, device_info, user_id, service_type, status) VALUES (?, ?, ?, ?, ?, ?)
      `, [uuid, cleanDescription, cleanDeviceInfo, user_id, cleanServiceType, 'pending'])
      
      if(!result.lastID){ 
        return res.status(400).json({error:'Failed to create service request'})
      }

      return res.status(200).json({message:'Service request created successfully', request:{id:result.lastID, uuid, description: cleanDescription, device_info: cleanDeviceInfo, service_type: cleanServiceType}})

    } catch (error){
      console.error('Error in createServiceRequest:', error)
      return res.status(500).json({error:'There was an error creating a service request'})

    }

   
  
  }
