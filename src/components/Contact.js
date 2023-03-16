import React from 'react'
import '../styles/contact.css'
import {AiFillGithub, AiFillInstagram, AiFillMail, AiFillLinkedin, AiFillCodepenCircle} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='nes-balloon from-left'>
        <h1 className="contact-header">Say Hi!</h1>
        <div className='social-wrapper'>
          <a className='social-btn' href="www.github.com" target='_blank'><AiFillGithub /></a>
          <a className='social-btn' href="www.github.com" target='_blank'><AiFillInstagram /></a>
          <a className='social-btn' href="www.github.com" target='_blank'><AiFillMail /></a>
          <a className='social-btn' href="www.github.com" target='_blank'><AiFillLinkedin /></a>
          <a className='social-btn' href="www.github.com" target='_blank'><AiFillCodepenCircle /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact