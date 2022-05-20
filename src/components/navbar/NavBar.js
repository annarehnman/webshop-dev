import React from 'react'
import { useSelector } from 'react-redux'
import NavItem from './NavItem'

export default function NavBar() {

  const isAdmin = useSelector((state) => state.user.isAdmin)

  return (
    <nav className='flex justify-between mx-10'>
      <ul className='flex space-x-5'>
        <NavItem itemPath="/" />
      </ul>
      <ul className='flex space-x-5'>
        {isAdmin ? <NavItem itemPath="/admin" /> : <NavItem itemPath="/order" /> }
      </ul>
    </nav>
  )
}
