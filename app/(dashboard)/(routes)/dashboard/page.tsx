import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        Dashboard(protected)
        <UserButton />
    </div>
  )
}

export default Dashboard