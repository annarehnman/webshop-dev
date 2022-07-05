import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const isAdmin = useSelector((state) => state.user.isAdmin)
  const [showMenu, setShowMenu] = useState(false)

  const handleToggle = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <nav className={showMenu
      ? 'absolute bg-white h-screen w-screen p-5 uppercase'
      : 'container flex justify-between md:items-center p-5 md:px-0 md:py-10 text-white uppercase'
    }>
      <NavLink to={'/'}>
        <span className={showMenu ? 'hidden' : 'flex items-center whitespace-nowrap text-2xl'}>Kungsberg Gård</span>
      </NavLink>
      {/* SMALL MENU */}
      <div className='flex justify-end pt-1 md:hidden'>
        <button onClick={handleToggle}>
          {showMenu 
            ? <FontAwesomeIcon className='text-3xl' icon={faXmark} /> 
            : <FontAwesomeIcon className='text-2xl' icon={faBars} />
          }
        </button>
      </div>
      <div className={showMenu ? 'flex flex-col items-start mt-5' : 'hidden'}>
        <ul className='flex md:hidden flex-col items-start space-y-5 mb-10'>
          <NavItem path={'/'} name={'Start'} />
          <NavItem path={'/butiken'} name={'Butiken'} />
          <NavItem path={'/hittaoss'} name={'Hitta oss'} />
        </ul>
        {isAdmin 
          ? <NavItem path={'/admin'} name={'Admin'} /> 
          : <NavItem path={'/bestallning'} name={'Beställning'} />
        }
      </div>
      {/* LARGE MENU */}
      <div className='hidden md:flex w-full justify-between'>
        <ul className="flex items-center">
          <NavItem path={'/butiken'} name={'Butiken'} />
          <NavItem path={'/hittaoss'} name={'Hitta oss'} />
        </ul>
        {isAdmin 
            ? <NavItem path={'/admin'} name={'Admin'} />  
            : <div className='flex items-center text-xl'><FontAwesomeIcon icon={faBasketShopping} /></div>
        }
      </div>
    </nav>
  )
}

export default NavBar
