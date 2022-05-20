import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='ml-10'>
      <ul className='flex space-x-5'>
        <li className='pb-3'>
          <NavLink 
            className={({isActive}) => (isActive ? "bg-white p-3 border-b border-white" : 'bg-white p-3 hover:border-b hover:border-white')} 
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className='pb-3'>
          <NavLink 
            className={({isActive}) => (isActive ? "bg-white p-3 border-b border-white" : 'bg-white p-3 hover:border-b hover:border-white')} 
            to="/admin"
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
