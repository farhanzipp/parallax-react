import React from 'react'
import '../styles/parallax.css'
import '../styles/global.css'
import Logo from '../images/logo.png'
import { useEffect } from 'react'

const Parallax = () => {
    

return (
    <>
        <div className="parallax-wrapper">
            <div className="logo">
                <img src={Logo} alt='logo'></img>
                <a className='button' href='/'>View More</a>
            </div >
        <div id="level-0" className='parallax'></div>
            <div id="level-1" className='parallax' ></div>
            <div id="level-2" className='parallax' ></div>
            <div id="level-3" className='parallax' ></div>
        </div>
    </>
    )
}

export default Parallax