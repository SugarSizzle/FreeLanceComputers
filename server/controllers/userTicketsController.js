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

export async function getLatestServiceUpdate(req, res) {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ error: 'Authentication required' })
    }

    const userId = req.session.userId

    try {
        const db = await getDBConnection()

        // Get the most recent service update for any of the user's service requests
        const latestUpdate = await db.get(
            `SELECT 
                su.id,
                su.service_request_id,
                su.update_type,
                su.update_description,
                su.update_time,
                sr.service_type
            FROM service_updates su
            JOIN service_requests sr ON su.service_request_id = sr.id
            WHERE sr.user_id = ? AND su.is_visible_to_customer = 1
            ORDER BY su.update_time DESC
            LIMIT 1`,
            [userId]
        )

        if (!latestUpdate) {
            return res.status(200).json({ 
                message: 'No service updates found', 
                update: null 
            })
        }

        // Get the previous update to determine what status it changed FROM
        const previousUpdate = await db.get(
            `SELECT update_type
            FROM service_updates
            WHERE service_request_id = ? AND update_time < ? AND is_visible_to_customer = 1
            ORDER BY update_time DESC
            LIMIT 1`,
            [latestUpdate.service_request_id, latestUpdate.update_time]
        )

        // If no previous update, the status changed from 'pending' (initial state)
        const previousStatus = previousUpdate ? previousUpdate.update_type : 'pending'

        // SQLite stores timestamps in UTC, append 'Z' to indicate UTC timezone
        const updateTimeUTC = latestUpdate.update_time ? latestUpdate.update_time.replace(' ', 'T') + 'Z' : null

        return res.status(200).json({ 
            message: 'Latest update fetched successfully', 
            update: {
                ...latestUpdate,
                update_time: updateTimeUTC,
                previous_status: previousStatus,
                new_status: latestUpdate.update_type
            }
        })

    } catch (error) {
        console.error('Error in getLatestServiceUpdate:', error)
        return res.status(500).json({ error: 'There was an error fetching the latest update' })
    }
}

