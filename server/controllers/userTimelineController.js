import { getDBConnection } from '../db/db.js'

export async function getUserTicketTimeline(req, res) {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ error: 'Authentication required' })
    }

    const userId = req.session.userId
    const ticketId = req.params.id

    try {
        const db = await getDBConnection()

        // Verify the ticket belongs to the user
        const ticket = await db.get(
            'SELECT id, user_id FROM service_requests WHERE id = ?',
            [ticketId]
        )

        if (!ticket) {
            return res.status(404).json({ error: 'Ticket not found' })
        }

        if (ticket.user_id !== userId) {
            return res.status(403).json({ error: 'You do not have permission to view this ticket' })
        }

        // Fetch timeline for the ticket (only visible updates)
        const timeline = await db.all(
            `SELECT * FROM service_updates 
             WHERE service_request_id = ? AND is_visible_to_customer = 1 
             ORDER BY update_time DESC`,
            [ticketId]
        )

        // Also fetch the ticket details
        const ticketDetails = await db.get(
            `SELECT sr.id, sr.uuid, sr.description, sr.device_info, sr.service_type, 
                    sr.status, sr.requested_at, sr.technician_id,
                    t.name AS technician_name, t.specialty AS technician_specialty, 
                    t.photo AS technician_photo
             FROM service_requests sr
             LEFT JOIN technicians t ON sr.technician_id = t.id
             WHERE sr.id = ?`,
            [ticketId]
        )

        // Add the initial ticket submission as the first entry in the timeline
        const initialSubmission = {
            id: `submitted-${ticketDetails.id}`,
            service_request_id: ticketDetails.id,
            update_type: 'submitted',
            update_description: 'Service request submitted',
            update_time: ticketDetails.requested_at,
            is_visible_to_customer: 1
        }

        const fullTimeline = [...timeline, initialSubmission]

        return res.status(200).json({
            message: 'Timeline fetched successfully',
            timeline: fullTimeline,
            ticket: ticketDetails
        })

    } catch (error) {
        console.error('Error in getUserTicketTimeline:', error)
        return res.status(500).json({ error: 'There was an error fetching the timeline' })
    }
}

