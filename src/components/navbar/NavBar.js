import React from 'react'
import { useSelector } from 'react-redux'
import NavItem from './NavItem'

const NavBar = () => {

  const isAdmin = useSelector((state) => state.user.isAdmin)

  const home = {
    name: "Home",
    path: "/"
  }
  const order = {
    name: "Order",
    path: "/admin"
  }
  const admin = {
    name: "Order",
    path: "/admin"
  }

  return (
    <nav className='flex justify-between mx-10'>
      <ul className='flex space-x-5'>
        <NavItem linkItem={home} />
      </ul>
      <ul className='flex space-x-5'>
        {isAdmin ? <NavItem linkItem={order} /> : <NavItem linkItem={admin} /> }
      </ul>
    </nav>
  )
}

export default NavBar
