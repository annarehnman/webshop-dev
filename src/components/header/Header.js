import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='text-center font-serif font-bold text-4xl mb-10'>
      <NavLink to={"/"}>Kungsberg Gård</NavLink>
    </div>
  )
}

export default Header
