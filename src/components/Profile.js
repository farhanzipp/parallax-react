import React from 'react'
import '../styles/profile.css'
import CSS from '../images/css-3.png'
import HTML from '../images/html-5.png'
import JS from '../images/js.png'
import ReactImg from '../images/react.png'

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
            <h2>SKILLS</h2>
            <div className='skill-boxes'>
                <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons" target='_blank'>
                    <img className='skill-box' src={HTML} alt='HTML 5 icons created by Freepik - Flaticon'/>
                </a>
                <a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons" target='_blank'>
                    <img className='skill-box' src={CSS} alt='CSS icons created by Freepik - Flaticon'/>
                </a>
                <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons" target='_blank'>
                    <img className='skill-box' src={JS} alt='Javascript icons created by Freepik - Flaticon'/>
                </a>
                <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons" target='_blank'>
                    <img className='skill-box' src={JS} alt='Javascript icons created by Freepik - Flaticon'/>
                </a>    
                
            </div>
        </div>
    </div>
  )
}

export default Profile