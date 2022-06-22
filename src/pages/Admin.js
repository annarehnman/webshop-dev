import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../components/admin/Dashboard'
import Login from '../components/auth/Login'

export default function Admin() {
  const isAdmin = useSelector((state) => state.user.isAdmin)

  return (
    <div className='p-10'>
      <div className='w-2/3 pr-20 mb-14'>
        <h1 className='font-bold text-5xl font-serif mb-10 space-y-2'>Välkommen</h1>
        {isAdmin ? <Dashboard /> : <Login />}
      </div>
    </div>
  )
}
