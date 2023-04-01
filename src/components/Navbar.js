import { Link } from 'gatsby'
import React from 'react'
import '../styles/navfoot.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container nav-container'>
        <input type="checkbox" name="" id=""></input>
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>      
      
        <ul className='menu-items'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            
          </li>    
        </ul>
      </div>
    </nav>
  )
}

export default Navbar