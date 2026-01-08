import { getDBConnection } from '../db/db.js'

export async function getNewServiceRequests(req, res) {
    try {
        const db = await getDBConnection()

        const newServiceRequests = await db.all(
            `
            SELECT 
                service_requests.*,
                users.firstname,
                users.lastname,
                users.email,
                users.phone,
                users.image
            FROM service_requests
            JOIN users ON service_requests.user_id = users.id
            WHERE service_requests.status = ?
            `, ['pending'])

        res.status(200).json(newServiceRequests)
    } catch (error) {
        console.error('Error in getNewServiceRequests:', error)
        res.status(500).json({error:'There was an error getting the new service requests'})
    }
}