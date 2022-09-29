import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleSmallMenu } from '../../store/reducers/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import Hamburger from 'hamburger-react'
import NavItem from './NavItem'

const NavBar = () => {
  const dispatch = useDispatch()
  const showMenu = useSelector((state) => state.menu.showSmallMenu)
  const isAdmin = useSelector((state) => state.user.isAdmin)

  const handleToggle = () => { 
    dispatch(toggleSmallMenu())
  }

  return (
    <nav className={`container py-3 px-5 text-white uppercase ${showMenu 
      ? '' 
      : 'flex justify-between md:items-center md:py-10 md:px-0'
    }`}>
      <NavLink to={'/'}>
        <span className='h-12 flex items-center whitespace-nowrap text-2xl font-merriweather normal-case'>Kungsberg Gård</span>
      </NavLink>
      {/* SMALL MENU */}
      <div className={`fixed top-3 right-5 z-10 md:hidden ${showMenu ? 'text-kbnearblack' : ''}`}>
        <Hamburger toggled={showMenu} toggle={handleToggle} size={26} duration={0.6} rounded label='Visa meny' />
      </div>
      <div className={`fixed top-0 left-0 h-full w-full bg-white p-8 pt-20 text-kbnearblack ease-in-out duration-300 ${showMenu 
        ? 'translate-x-0' 
        : 'translate-x-full'
        }`}>
        <ul className='flex flex-col items-start space-y-5 mb-10'>
          <NavItem path={'/'} name={'Start'} />
          <NavItem path={'/butiken'} name={'Butiken'} />
          <NavItem path={'/kontakt'} name={'Kontakt'} />
        </ul>
        <div className='flex justify-start'>
          {isAdmin 
            ? <NavItem path={'/admin'} name={'Admin'} /> 
            : <NavItem path={'/bestallning'} name={'Beställning'} />
          }
        </div>
      </div>
      {/* LARGE MENU */}
      <div className='hidden md:flex w-full justify-between'>
        <ul className="flex items-center">
          <NavItem path={'/butiken'} name={'Butiken'} />
          <NavItem path={'/kontakt'} name={'Kontakt'} />
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
