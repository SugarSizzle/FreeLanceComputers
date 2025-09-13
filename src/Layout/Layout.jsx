import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import styles from './Layout.module.css'

export const Layout = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <>
      <Navigation />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      {!isDashboardRoute && <Footer />}
    </>
  )
}
