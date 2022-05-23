import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='bg-white p-10'>
      <h1 className='font-bold text-3xl mb-5'>Page not found</h1>
      <Link className='underline' to="/">Back to home</Link>
    </div>
  )
}
