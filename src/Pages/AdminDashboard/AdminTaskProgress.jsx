import React from 'react'
import { DashboardNav } from '../../Layout/DashboardNav'
import { AdminTaskProgress } from '../../components/AdminTaskProgress/AdminTaskProgress'

import { useState } from 'react'

export const AdminTaskProgressPage = () => {


  const [requestData, setRequestData] = useState(null)

 const fetchRequestData = async () => {
  try {
  const response = await fetch(`http://localhost:5000/api/service-requests/${id}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if(!response.ok){
    throw new Error('Failed to fetch request data')
  }
  const data = await response.json()
  console.log('data: ', data)
  setRequestData(data)
  } catch (error) {
    console.error('Error fetching request data:', error)
  }

  fetchRequestData()
  console.log('requestData: ', requestData)
 }

 
  return (
    <>
        <DashboardNav />  
        <AdminTaskProgress requestData={requestData} />
    </>
  )
}