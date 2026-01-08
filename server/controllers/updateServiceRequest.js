import { getDBConnection } from '../db/db.js'

export async function updateServiceRequest(req, res) {


    console.log('=== UPDATE SERVICE REQUEST ===')
    console.log('Session exists:', !!req.session)
    console.log('Session data:', req.session)
    console.log('Session userId:', req.session?.userId)
    console.log('Request cookies:', req.headers.cookie)

    // Check authentication first
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ error: 'Authentication required' })
    }

    const currentID = req.session.userId

    const { service_request_id, status, note, image } = req.body

    if (!service_request_id || !status || !note) {
        return res.status(400).json({ error: 'All fields are required' })
    }

   

    try {
        const db = await getDBConnection()
        // Check if user is admin
        const user = await db.get('SELECT id, role FROM users WHERE id = ?', [currentID])
        if (!user) return res.status(401).json({ error: 'User not found' })
        if (user.role !== 'admin') return res.status(403).json({ error: 'User is not an admin' })

        const update = await db.run('UPDATE service_requests SET status = ? WHERE id = ?', [status, service_request_id])

        if (!update) {
            return res.status(400).json({ error: 'Failed to update service request' })
        }

        const result = await db.run(
            `INSERT INTO service_updates (admin_id, service_request_id, update_type, update_description, images) VALUES (?, ?, ?, ?, ?)`,
            [currentID, service_request_id, status, note, image]
        )

        if (!result) {
            return res.status(400).json({ error: 'Failed to insert service update' })
        }

        return res.status(200).json({
            message: 'Service request updated successfully',
            update: {
                id: result.lastID,
                admin_id: currentID,
                service_request_id: service_request_id,
                update_type: status,
                note: note,
                images: image
            }
        })

    } catch (error) {
        console.error('Error updating service request:', error)
        return res.status(500).json({ error: 'There was an error updating the service request' })
    }
}