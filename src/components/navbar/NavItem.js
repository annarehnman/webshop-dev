import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = props => {

  const linkName = props.linkItem.name
  const linkPath = props.linkItem.path

  return (
    <li className='pb-3'>
      <NavLink 
        className={({isActive}) => (isActive ? "bg-white p-3 border-b border-white" : 'bg-white p-3 hover:border-b hover:border-white')}
        to={linkPath}
      >
        <span>{linkName}</span>
      </NavLink>
    </li>
  )
}

export default NavItem
