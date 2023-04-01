import React from 'react'
import '../styles/contact.css'
import {AiFillGithub, AiFillInstagram, AiFillMail, AiFillLinkedin, AiFillCodepenCircle} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact-container' id='myContact'>
      <h1 className='section-title'>CONTACT</h1>
      <div className='balloon-text nes-balloon from-left'>
        <h1 className="contact-header">Say Hi!</h1>
        <div className='social-wrapper'>
          <a aria-label='github' className='social-btn' href="www.github.com" target='_blank'><AiFillGithub /></a>
          <a aria-label='instagram' className='social-btn' href="www.github.com" target='_blank'><AiFillInstagram /></a>
          <a aria-label='email' className='social-btn' href="www.github.com" target='_blank'><AiFillMail /></a>
          <a aria-label='linkedin' className='social-btn' href="www.github.com" target='_blank'><AiFillLinkedin /></a>
          <a aria-label='codepen' className='social-btn' href="www.github.com" target='_blank'><AiFillCodepenCircle /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact