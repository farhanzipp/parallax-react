import React from 'react'
import '../styles/profile.css'


const Profile = () => {
  return (
    <div className='profile-container'>
        <h1 className='profile-header'>PROFILE</h1>
        <div className='profile-img'></div>
        <div className='status'>
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
                    <span id='indo'></span>
                </li>
                <li>
                    <p>Desc:</p>
                    <p>Farhan is person, Who passionate in design and web development</p>
                </li>
            </ul>
        </div>
        <div className='skill'>
            <h2>SKILL</h2>
            <div className='skill-boxes'> 
                <img className='skill-box'/>
                <img className='skill-box'/>
                <img className='skill-box'/>
                <img className='skill-box'/>
            </div>
        </div>
    </div>
  )
}

export default Profile