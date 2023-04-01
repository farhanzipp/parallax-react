import React from 'react'
import '../styles/navfoot.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>&copy;{new Date().getFullYear()} Farhanzip</p>
    </div>
  )
}

export default Footer