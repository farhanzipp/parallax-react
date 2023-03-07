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
                    <p> Front End Dev, Designer</p>
                </li>
                <li>
                    <p>Flag:</p> 
                    <span id='indo' title='INDONESIA'></span>
                </li>
                <li>
                    <p>Desc:</p>
                    <p>Farhan is person, Who passionate in design and web development, 
                        sometimes gardening sometimes cooking.
                    </p>
                </li>
                <li>
                    <p>Info:</p>
                    <p>Happy Eid Mubarak !
                    </p>
                </li>
            </ul>
        </div>
        <div className='skill'>
            <h2>TECH I USE</h2>
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