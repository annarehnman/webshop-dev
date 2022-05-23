import React from 'react'
import NavItem from './NavItem'
import NavAuth from './NavAuth'

const NavBar = () => {
  const home = {
    name: "Home",
    path: "/"
  }
  const products = {
    name: "Products",
    path: "/products"
  }

  return (
    <nav className='flex justify-between mx-10'>
      <ul className='flex space-x-5'>
        <NavItem linkItem={home} />
        <NavItem linkItem={products} />
      </ul>
      <ul className='flex space-x-5'>
        <NavAuth />
      </ul>
    </nav>
  )
}

export default NavBar
