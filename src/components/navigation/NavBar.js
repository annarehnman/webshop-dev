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
    <nav className='flex justify-between mx-10 uppercase mb-16'>
      <ul className='flex space-x-8'>
        <NavItem linkItem={home} />
        <NavItem linkItem={products} />
        <NavItem linkItem={contact} />
      </ul>
      <ul className='flex space-x-5'>
        <NavAuth />
      </ul>
    </nav>
  )
}

export default NavBar
