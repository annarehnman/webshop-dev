import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const NavAuth = () => {
  const isAdmin = useSelector((state) => state.user.isAdmin)
  
  const admin = {
    name: "Admin",
    path: "/admin"
  }

  return (
    <li>
      {isAdmin
      ?
      <NavLink 
        className={({isActive}) => (isActive ? 'border-b border-kbnearblack pb-1' : 'hover:border-b hover:border-kbnearblack pb-1')}
        to={admin.path}
      >
        <span>{admin.name}</span>
      </NavLink>
      :
      <div className='cursor-pointer'>
        <FontAwesomeIcon icon={faBasketShopping} />
      </div>
      }
    </li>
  )
}

export default NavAuth
