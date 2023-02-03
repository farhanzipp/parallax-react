import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({ children}) => {
  return (
    <>
        <Navbar />
          { children }
        <footer>
            <p>this is footer</p>
        </footer>
    </>
  )
}

export default Layout