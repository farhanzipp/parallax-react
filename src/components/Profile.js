import React from 'react'
import '../styles/profile.css'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di'
import { GrGatsbyjs } from 'react-icons/gr'
const Profile = () => {
  return (
    <div className='profile-container' id='myProfile'>
        <div className='divider'></div>
        <h1 className='profile-header'>PROFILE</h1>
        <div className='status'>
        <div className='profile-img'></div>
        <h2>STATS</h2>
            <ul>
                <li>
                    <p>Name:</p>
                    <p>Mz Farhan</p>
                </li>
                <li>
                    <p>Role:</p>
                    <p> Front End Developer</p>
                </li>
                <li>
                    <p>Flag:</p> 
                    <a href='' title='INDONESIA'>
                        <span id='indo'></span>
                    </a>
                </li>
                <li>
                    <p>Desc:</p>
                    <p>Farhan is person, Who passionate in design and web development</p>
                </li>
            </ul>
        </div>
        <div className='skill'>
            <h2>TECH USED</h2>
            <div className='skill-boxes'>
                <FaHtml5 />
                <FaCss3Alt />
                <DiJavascript1 />
                <FaBootstrap />
                <FaReact />
                <GrGatsbyjs />
            </div>
        </div>
    </div>
  )
}

export default Profile