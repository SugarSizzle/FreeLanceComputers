import { getDBConnection } from '../db/db.js'



export async function getInProgressTickets(req, res) {

    if(!req.session || !req.session.userId){
        return res.status(401).json({error:'Authentication required'})
    }

    const db = await getDBConnection()

    try {
        // Verify user is admin
        const user = await db.get('SELECT id, role FROM users WHERE id = ?', [req.session.userId])
        if (!user) return res.status(401).json({ error: 'User not found' })
        if (user.role !== 'admin') return res.status(403).json({ error: 'User is not an admin' })
       
        const inProgressTickets = await db.all('SELECT * FROM service_requests WHERE status = ?', ['in_progress']) 
        
        if(!inProgressTickets){
            return res.status(404).json({error:'No in progress tickets found'})
        }
        console.log('InProgress tickets:', inProgressTickets)
        return res.status(200).json({message:'InProgress tickets fetched successfully', tickets: inProgressTickets})

    } catch (error) {
        console.error('Error in getInProgressTickets:', error)
        return res.status(500).json({error:'There was an error getting the in progress tickets'})
    }
}


export async function getCompletedTickets(req, res) {

    if(!req.session || !req.session.userId){
        return res.status(401).json({error:'Authentication required'})
    }

    const db = await getDBConnection()

    try {
        // Verify user is admin
        const user = await db.get('SELECT id, role FROM users WHERE id = ?', [req.session.userId])
        if (!user) return res.status(401).json({ error: 'User not found' })
        if (user.role !== 'admin') return res.status(403).json({ error: 'User is not an admin' })
       
        const completedTickets = await db.all('SELECT * FROM service_requests WHERE status = ?', ['completed']) 
        
        if(!completedTickets){
            return res.status(404).json({error:'No completed tickets found'})
        }
        console.log('Completed tickets:', completedTickets)
        return res.status(200).json({message:'Completed tickets fetched successfully', tickets: completedTickets})

    } catch (error) {
        console.error('Error in getCompletedTickets:', error)
        return res.status(500).json({error:'There was an error getting the completed tickets'})
    }
}