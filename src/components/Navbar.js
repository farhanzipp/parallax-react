import { Link } from 'gatsby'
import React from 'react'
import '../styles/global.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
        </div>
    </nav>
  )
}

export default Navbar