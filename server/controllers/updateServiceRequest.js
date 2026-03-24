import { getDBConnection } from '../db/db.js'

export async function updateServiceRequest(req, res) {


    console.log('=== UPDATE SERVICE REQUEST ===')
    console.log('Session exists:', !!req.session)
    console.log('Session data:', req.session)
    console.log('Session userId:', req.session?.userId)
    console.log('Request cookies:', req.headers.cookie)


    if (!req.session || !req.session.userId) {
        return res.status(401).json({ error: 'Authentication required' })
    }

    const currentID = req.session.userId

    const { service_request_id, status, note, image, technician_id } = req.body

    if (!service_request_id || !status || !note) {
        return res.status(400).json({ error: 'All fields are required' })
    }

   

    try {
        const db = await getDBConnection()
    
        const user = await db.get('SELECT id, role FROM users WHERE id = ?', [currentID])
        if (!user) return res.status(401).json({ error: 'User not found' })
        if (user.role !== 'admin') return res.status(403).json({ error: 'User is not an admin' })

        if (technician_id) {
            const technician = await db.get('SELECT id FROM technicians WHERE id = ? AND is_active = 1', [technician_id])
            if (!technician) return res.status(400).json({ error: 'Technician not found or inactive' })
        }

        const update = await db.run(
            'UPDATE service_requests SET status = ?, technician_id = ? WHERE id = ?',
            [status, technician_id || null, service_request_id]
        )

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