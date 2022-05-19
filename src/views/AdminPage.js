import React from 'react'
import { useSelector } from 'react-redux'
import LoginForm from '../components/LoginForm'
import AdminContent from '../components/AdminContent'

export default function AdminPage() {

  const isAdmin = useSelector((state) => state.user.isAdmin)

  return (
    <div className='bg-white p-10'>
      <h1 className='font-bold text-3xl mb-5'>AdminPage</h1>
      {isAdmin ? <AdminContent /> : <LoginForm />}
    </div>
  )
}
