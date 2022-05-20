import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavItem from './NavItem'

export default function NavBar() {

  const isAdmin = useSelector((state) => state.user.isAdmin)

  return (
    <nav className='flex justify-between mx-10'>
      <ul className='flex space-x-5'>
        <NavItem link="home" />
      </ul>

      <ul className='flex space-x-5'>
        <li className='pb-3'>
          {isAdmin ? 
            <NavLink 
              className={({isActive}) => (isActive ? "bg-white p-3 border-b border-white" : 'bg-white p-3 hover:border-b hover:border-white')} 
              to="/admin"
            >
              Admin
            </NavLink> :
            <NavLink 
              className={({isActive}) => (isActive ? "bg-white p-3 border-b border-white" : 'bg-white p-3 hover:border-b hover:border-white')} 
              to="/order"
            >
              Order
            </NavLink>
          }
        </li>
      </ul>
    </nav>
  )
}
