import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem(link) {

  const link = props.link

  return (
    <li className='pb-3'>
      <NavLink 
        className={({isActive}) => (isActive ? "bg-white p-3 border-b border-white" : 'bg-white p-3 hover:border-b hover:border-white')} 
        to="/"
      >
        Home
      </NavLink>
    </li>
  )
}
