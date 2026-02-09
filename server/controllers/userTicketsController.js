import { getDBConnection } from '../db/db.js'

export async function getUserTickets(req, res) {
    
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ error: 'Authentication required' })
    }

    const userId = req.session.userId

    try {
        const db = await getDBConnection()

        const userTickets = await db.all(
            `SELECT 
                id,
                uuid,
                description,
                device_info,
                service_type,
                status,
                requested_at
            FROM service_requests 
            WHERE user_id = ?
            ORDER BY requested_at DESC`,
            [userId]
        )

        return res.status(200).json({ 
            message: 'User tickets fetched successfully', 
            tickets: userTickets 
        })

    } catch (error) {
        console.error('Error in getUserTickets:', error)
        return res.status(500).json({ error: 'There was an error fetching your tickets' })
    }
}

