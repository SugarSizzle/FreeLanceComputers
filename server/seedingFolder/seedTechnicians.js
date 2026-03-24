import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { v4 as uuidv4 } from 'uuid'

async function seedTechnicians() {
    const db = await open({
        filename: path.join('server', 'database.db'),
        driver: sqlite3.Database
    })

    const technicians = [
        {
            uuid: uuidv4(),
            name: 'Steve Dermin',
            specialty: 'Senior Computer Repair Specialist',
            bio: 'With over 12 years of hands-on experience, Steve specializes in hardware diagnostics, motherboard repairs, and full system builds. No machine is too far gone for him.',
            photo: 'https://ik.imagekit.io/irpk6rtbq/chalo-garcia-2mWKL_I70qk-unsplash.jpg',
            phone: '(555) 312-4890',
            email: 'steve.dermin@freelancecomputers.com'
        },
        {
            uuid: uuidv4(),
            name: 'Dwight Schrute',
            specialty: 'Data Recovery & Security Expert',
            bio: 'Dwight is our go-to for recovering lost files and hardening systems against threats. He has recovered data from drives others deemed unrecoverable.',
            photo: 'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-CTEiUWpZZ3o-unsplash.jpg',
            phone: '(555) 867-5309',
            email: 'dwight.schrute@freelancecomputers.com'
        },
        {
            uuid: uuidv4(),
            name: 'Michael Garcia',
            specialty: 'Virus Protection & System Optimization',
            bio: 'Michael keeps systems clean and fast. From deep malware removal to performance tuning, he ensures every device leaves running better than new.',
            photo: 'https://ik.imagekit.io/irpk6rtbq/sergey-mikheev-_jasTqAtQtY-unsplash.jpg',
            phone: '(555) 204-7763',
            email: 'michael.garcia@freelancecomputers.com'
        }
    ]

    for (const tech of technicians) {
        await db.run(
            `INSERT INTO technicians (uuid, name, specialty, bio, photo, phone, email)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [tech.uuid, tech.name, tech.specialty, tech.bio, tech.photo, tech.phone, tech.email]
        )
        console.log(`Inserted: ${tech.name}`)
    }

    const rows = await db.all('SELECT id, name, specialty, email, phone FROM technicians')
    console.log('\nAll technicians in DB:')
    console.table(rows)

    await db.close()
    console.log('Seeding complete')
}

seedTechnicians()
