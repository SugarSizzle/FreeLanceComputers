import {getDBConnection} from '../db/db.js'
import { v4 as uuidv4 } from 'uuid'



export async function createServiceRequest(req, res) {


  
try {
      const db = await getDBConnection()

      const {description, deviceInfo, user_id, serviceType} = req.body
      console.log('This is the user_id', user_id);
      console.log('This is the serviceType', serviceType);
      if(!description || !deviceInfo || !user_id  ){
        return res.status(400).json({error:'All fields are required'})
      }

      const uuid = uuidv4()

   

      const result =await db.run (`
        INSERT INTO service_requests (
        uuid, 
        description, 
        device_info, 
        user_id,
        service_type
        ) VALUES (?, ?, ?, ?, ?)
        `, [ uuid, description, deviceInfo, user_id, serviceType ])

        console.log('This is the uuid', uuid);
        console.log('This is the description', description);
        console.log('This is the deviceInfo', deviceInfo);
        console.log('This is the user_id', user_id);
        console.log('This is the serviceType', serviceType);



      if(!result){
        return res.status(400).json({error:'Failed to create service request'})
      }

      return res.status(200).json({message:'Service request created successfully'})



    } catch (error){
      console.error('Error in createServiceRequest:', error)
      return res.status(500).json({error:'There was an error creating a service request'})

    }

   
  
  }