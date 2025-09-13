import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import styles from './Layout.module.css'

export const Layout = () => {
  return (
    <>
      <Navigation />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
