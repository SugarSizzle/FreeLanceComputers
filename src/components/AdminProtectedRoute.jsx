import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'


export const AdminProtectedRoute = () => {

    const {session, loading} = useAuth()
    const location = useLocation()

    if(loading) return <div>Loading...</div>

    if(!session) return <Navigate to="/signin" state={{from: location}} replace />


    if(session.role !== 'admin') return <Navigate to="/dashboard/overview" state={{from: location}} replace />


    return <Outlet />

}

export default AdminProtectedRoute