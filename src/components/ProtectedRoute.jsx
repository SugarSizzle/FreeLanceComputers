import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export const ProtectedRoute = () => {
    const { session } = useAuth();
    const location = useLocation();

    // If user is not authenticated, redirect to sign-in page
    if (!session) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    // If user is authenticated, render the child routes using Outlet
    return <Outlet />;
};
