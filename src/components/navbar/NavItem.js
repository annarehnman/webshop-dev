import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = props => {

  const itemPath = props.itemPath

  return (
    <li className='pb-3'>
      <NavLink 
        className={({isActive}) => (isActive ? "bg-white p-3 border-b border-white" : 'bg-white p-3 hover:border-b hover:border-white')}
        to={itemPath}
      >
        {itemPath === "/" && <span>Home</span> }
        {itemPath === "/order" && <span>Order</span>}
        {itemPath === "/admin" && <span>Admin</span>}
      </NavLink>
    </li>
  )
}

export default NavItem
