import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = props => {
  const linkName = props.linkItem.name
  const linkPath = props.linkItem.path

  return (
    <li className='flex font-shadows text-2xl'>
      <NavLink 
        className={({isActive}) => (isActive ? 'border-b border-white py-1.5' : 'border-b border-transparent hover:border-b hover:border-white py-1.5')}
        to={linkPath}
      >
        {linkName}
      </NavLink>
    </li>
  )
}

export default NavItem
