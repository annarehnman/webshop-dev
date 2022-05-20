import React from 'react'
import { useSelector } from 'react-redux'
import LoginForm from '../components/auth/LoginForm'
import Dashboard from '../components/admin/Dashboard'


export default function AdminPage() {

  const isAdmin = useSelector((state) => state.auth.isAdmin)

  return (
    <div className='bg-white p-10'>
      <h1 className='font-bold text-3xl mb-5'>Admin</h1>
      {isAdmin ? <Dashboard /> : <LoginForm />}
    </div>
  )
}
