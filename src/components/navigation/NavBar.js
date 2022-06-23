import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'
import NavAuth from './NavAuth'

const NavBar = () => {
  const products = {
    name: "BUTIKEN",
    path: "/products"
  }
  const contact = {
    name: "HITTA OSS",
    path: "/contact"
  }

  return (
    <nav className='flex justify-between'>
      <ul className='flex space-x-8'>
        <NavLink className={"font-serif font-bold text-3xl"} to={"/"}>Kungsberg Gård</NavLink>
        <NavItem linkItem={products} />
        <NavItem linkItem={contact} />
      </ul>
      <NavAuth />
    </nav>
  )
}

export default NavBar
