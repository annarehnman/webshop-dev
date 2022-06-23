import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = props => {
  const linkName = props.linkItem.name
  const linkPath = props.linkItem.path

  return (
    <li className='flex align-middle'>
      <NavLink 
        className={({isActive}) => (isActive ? 'align-middle border-b border-white py-1.5' : 'align-middle hover:border-b hover:border-white py-1.5')}
        to={linkPath}
      >
        {linkName}
      </NavLink>
    </li>
  )
}

export default NavItem
