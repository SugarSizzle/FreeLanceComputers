import { getDBConnection } from '../db/db.js'

export async function getTechnicians(req, res) {
    try {
        const db = await getDBConnection()

        const technicians = await db.all(
            `SELECT id, uuid, name, specialty, bio, photo
             FROM technicians
             WHERE is_active = 1
             ORDER BY name ASC`
        )

        return res.status(200).json({
            message: 'Technicians fetched successfully',
            technicians
        })
    } catch (error) {
        console.error('Error in getTechnicians:', error)
        return res.status(500).json({ error: 'Failed to fetch technicians' })
    }
}

export async function getTechnicianById(req, res) {
    const { id } = req.params

    try {
        const db = await getDBConnection()

        const technician = await db.get(
            `SELECT id, uuid, name, specialty, bio, photo
             FROM technicians
             WHERE id = ? AND is_active = 1`,
            [id]
        )

        if (!technician) {
            return res.status(404).json({ error: 'Technician not found' })
        }

        return res.status(200).json({
            message: 'Technician fetched successfully',
            technician
        })
    } catch (error) {
        console.error('Error in getTechnicianById:', error)
        return res.status(500).json({ error: 'Failed to fetch technician' })
    }
}
