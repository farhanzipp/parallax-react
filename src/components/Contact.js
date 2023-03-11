import React from 'react'
import '../styles/contact.css'
import {AiFillGithub, AiFillInstagram, AiFillMail, AiFillLinkedin, AiFillCodepenCircle} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='nes-balloon from-left'>
        <h1 className="contact-header">Say Hi!</h1>
        <div className='social-wrapper'>
          <AiFillGithub />
          <AiFillInstagram />
          <AiFillMail />
          <AiFillLinkedin />
          <AiFillCodepenCircle />
        </div>
      </div>
    </div>
  )
}

export default Contact