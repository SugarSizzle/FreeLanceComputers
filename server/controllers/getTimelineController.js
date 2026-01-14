import { getDBConnection } from '../db/db.js'


export async function getTimeline(req, res) {


    if(!req.session || !req.session.userId){
        return res.status(401).json({error:'Authentication required'})
    }

    

    const db = await getDBConnection()

    try {
      
        const user = await db.get('SELECT id, role FROM users WHERE id = ?', [req.session.userId])
        if (!user) return res.status(401).json({ error: 'User not found' })
        if (user.role !== 'admin') return res.status(403).json({ error: 'User is not an admin' })

        
        const timeline = await db.all(
            'SELECT * FROM service_updates WHERE service_request_id = ? ORDER BY update_time DESC', 
            [req.params.id]
        )
        return res.status(200).json({message:'Timeline fetched successfully', timeline: timeline})
    } catch (error) {
        console.error('Error in getTimeline:', error)
        return res.status(500).json({error:'There was an error getting the timeline'})
    }
}