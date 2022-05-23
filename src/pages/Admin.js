import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../components/admin/Dashboard'
import Login from '../components/auth/Login'


export default function Admin() {

  const isAdmin = useSelector((state) => state.user.isAdmin)

  return (
    <div className='bg-white p-10'>
      <h1 className='font-bold text-3xl mb-5'>Admin</h1>
      {isAdmin ? <Dashboard /> : <Login />}
    </div>
  )
}
