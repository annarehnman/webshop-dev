import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NavItem from './navigation/NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const isAdmin = useSelector((state) => state.user.isAdmin)
  const [showMenu, setShowMenu] = useState(false)

  const handleToggle = () => {
    setShowMenu(prev => !prev)
  }

  const products = {
    name: 'Butiken',
    path: '/butiken'
  }
  const contact = {
    name: 'Hitta oss',
    path: '/hittaoss'
  }
  const admin = {
    name: 'Admin',
    path: '/admin'
  }

  return (
    <nav className='container flex justify-between items-center px-4 md:px-0 uppercase'>
      <NavLink to={'/'}>
        <span className='flex items-center whitespace-nowrap text-2xl'>Kungsberg Gård</span>
      </NavLink>
      
      {/* SMALL MENU */}
      <div className='flex flex-col items-end md:hidden'>
        <button className='flex justify-center' onClick={handleToggle}>
          <FontAwesomeIcon className='text-2xl' icon={faBars} />
        </button>

        <div className={showMenu ? 'flex md:hidden w-full flex-col items-end' : 'hidden'}>
          <ul className='flex flex-col bg-white text-kbnearblack'>
            <NavItem linkItem={products} />
            <NavItem linkItem={contact} />
            {isAdmin 
              ? <NavItem linkItem={admin} /> 
              : <div className='text-xl'><FontAwesomeIcon icon={faBasketShopping} /></div>
            }
          </ul>
        </div>
      </div>

      {/* LARGE MENU */}
      <div className='hidden md:flex w-full justify-between'>
        <ul className="flex items-center">
          <NavItem linkItem={products} />
          <NavItem linkItem={contact} />
        </ul>
        {isAdmin 
            ? <NavItem linkItem={admin} /> 
            : <div className='flex items-center text-xl'><FontAwesomeIcon icon={faBasketShopping} /></div>
        }
      </div>

    </nav>
  )
}

export default Header
