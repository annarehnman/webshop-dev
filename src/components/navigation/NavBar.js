import React from 'react'
import NavItem from './NavItem'
import NavAuth from './NavAuth'

const NavBar = () => {
  const home = {
    name: "Hem",
    path: "/"
  }
  const products = {
    name: "Butiken",
    path: "/products"
  }
  const contact = {
    name: "Hitta oss",
    path: "/contact"
  }

  return (
    <nav className='flex justify-between uppercase'>
      <ul className='flex space-x-8'>
        <NavItem linkItem={home} />
        <NavItem linkItem={products} />
        <NavItem linkItem={contact} />
      </ul>
      <ul>
        <NavAuth />
      </ul>
    </nav>
  )
}

export default NavBar
