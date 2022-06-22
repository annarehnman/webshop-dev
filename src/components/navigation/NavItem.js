import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = props => {
  const linkName = props.linkItem.name
  const linkPath = props.linkItem.path

  return (
    <li className='pb-3'>
      <NavLink 
        className={({isActive}) => (isActive ? "border-b border-white pb-1" : 'hover:border-b hover:border-black pb-1')}
        to={linkPath}
      >
        <span>{linkName}</span>
      </NavLink>
    </li>
  )
}

export default NavItem
