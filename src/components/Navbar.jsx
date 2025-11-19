import React from 'react'
import { NavLink } from 'react-router-dom'

 export default function Navbar() {
  return (
    <nav className='pt-10  flex justify-center space-x-4 text-white'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

    </nav>
  )
}

