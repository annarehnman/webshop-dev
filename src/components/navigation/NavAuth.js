import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavAuth = () => {

  const isAdmin = useSelector((state) => state.auth.isAdmin)

  const order = {
    name: "Order",
    path: "/order"
  }
  const admin = {
    name: "Admin",
    path: "/admin"
  }

  return (
    <li className='pb-3'>
      {isAdmin
      ?
      <NavLink 
        className={({isActive}) => (isActive ? "bg-white p-3 border-b border-white" : 'bg-white p-3 hover:border-b hover:border-white')}
        to={admin.path}
      >
        <span>{admin.name}</span>
      </NavLink>
      :
      <NavLink 
        className={({isActive}) => (isActive ? "bg-white p-3 border-b border-white" : 'bg-white p-3 hover:border-b hover:border-white')}
        to={order.path}
      >
        <span>{order.name}</span>
      </NavLink>
      }
    </li>
  )
}

export default NavAuth
