import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { closeSmallMenu } from '../../store/reducers/menu'

const NavItem = props => {
  const dispatch = useDispatch()
  const linkPath = props.path
  const linkName = props.name

  const handleClick = () => { 
    dispatch(closeSmallMenu(false))
  }

  return (
    <li className='flex justify-end md:justify-start font-shadows text-4xl md:text-2xl md:ml-8'>
      <NavLink 
        onClick={handleClick}
        className={({isActive}) => (isActive ? 'border-b border-white py-1.5' : 'border-b border-transparent hover:border-b hover:border-white py-1.5')}
        to={linkPath}
      >
        {linkName}
      </NavLink>
    </li>
  )
}

export default NavItem
