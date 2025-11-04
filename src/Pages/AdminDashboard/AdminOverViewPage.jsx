import React from 'react'
import { AdminOverviewHeroSection } from '../../components/AdminOverview/AdminOverviewHeroSection'
import { AdminServicesGrid } from '../../components/AdminOverview/AdminServicesGrid'
import { DashboardNav } from '../../Layout/DashboardNav'

export const AdminOverViewPage = () => {
    return (
        <div>
            <DashboardNav  />
            <AdminOverviewHeroSection />
            <AdminServicesGrid />
        </div>
    )
}