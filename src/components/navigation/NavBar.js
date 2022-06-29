import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'
import NavAuth from './NavAuth'

const NavBar = () => {
  const products = {
    name: "BUTIKEN",
    path: "/butiken"
  }
  const contact = {
    name: "HITTA OSS",
    path: "/hittaoss"
  }

  return (
    <nav className='flex justify-between'>
      <ul className='flex space-x-8'>
        <NavLink className={"uppercase text-2xl py-1.5"} to={"/"}>Kungsberg Gård</NavLink>
        <NavItem linkItem={products} />
        <NavItem linkItem={contact} />
      </ul>
      <NavAuth />
    </nav>
  )
}

export default NavBar
