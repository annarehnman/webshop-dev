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
    <div className='flex items-center justify-end md:justify-start'>
      {isAdmin
      ?
      <NavLink 
        className={({isActive}) => (isActive ? 'border-b border-kbnearblack py-1.5' : 'hover:border-b hover:border-kbnearblack py-1.5')}
        to={admin.path}
      >
        <span>{admin.name}</span>
      </NavLink>
      :
      <div className='flex items-center text-xl cursor-pointer'>
        <FontAwesomeIcon icon={faBasketShopping} />
      </div>
      }
    </div>
  )
}

export default NavAuth
