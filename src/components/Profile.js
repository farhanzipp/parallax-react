import React from 'react'
import '../styles/profile.css'
import CSS from '../images/css-3.png'
import HTML from '../images/html-5.png'
import JS from '../images/js.png'
import BS from '../images/bootstrap.png'
import RE from '../images/react.png'

const Profile = () => {
  return (
    <div className='profile-container'>
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
            <h2>SKILLS</h2>
            <div className='skill-boxes'>
                <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons" target='_blank' style={{background: `radial-gradient(ellipse farthest-corner 60px at 50px 50px,#FFFFFF 50%,transparent 51%)`}}>
                    <img className='skill-box' src={HTML} alt='HTML 5 icons created by Freepik - Flaticon'/>
                </a>
                <a href="https://www.flaticon.com/free-icons/css" title="css 3 icons" target='_blank'>
                    <img className='skill-box' src={CSS} alt='CSS icons created by Freepik - Flaticon'/>
                </a>
                <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons" target='_blank'>
                    <img className='skill-box' src={JS} alt='Javascript icons created by Freepik - Flaticon'/>
                </a>
                <a href="https://www.flaticon.com/free-icons/bootstrap" title="bootstrap icons" target='_blank'>
                    <img className='skill-box' src={BS} alt='Bootstrap icons created by Freepik - Flaticon' style={{background: `radial-gradient(ellipse farthest-corner 60px at 50px 50px,#FFFFFF 50%,transparent 51%)`}}/>
                </a>    
                <a href="https://www.iconfinder.com/icons/1174949/js_react_js_logo_react_react_native_icon" title="react icons" target='_blank'>
                    <img className='skill-box' src={RE} alt=' React logo'/>
                </a>    
            </div>
        </div>
    </div>
  )
}

export default Profile