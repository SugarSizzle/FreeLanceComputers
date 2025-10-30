import React from 'react'
import { AdminOverviewHeroSection } from '../../components/AdminOverview/AdminOverviewHeroSection'
import { AdminServicesGrid } from '../../components/AdminOverview/AdminServicesGrid'
export const AdminOverViewPage = () => {
    return (
        <div>
            <AdminOverviewHeroSection />
            <AdminServicesGrid />
        </div>
    )
}