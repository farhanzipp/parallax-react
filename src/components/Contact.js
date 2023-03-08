import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <h1 className="contact-header">Get In Touch</h1>
        <h3>Here some ways to reach me!</h3>
        <div className='social-wrapper'>
          <i className='nes-icon github is-medium'></i>
          <i className='nes-icon instagram is-medium'></i>
          <i className='nes-icon twitter is-medium'></i>
          <i className='nes-icon linkedin is-medium'></i>
          <i className='nes-icon gmail is-medium'></i>
        </div>
    </div>
  )
}

export default Contact