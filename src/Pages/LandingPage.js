import React from 'react'
import './LandingPage.css'
import FBIcon from '../Assets/Images/facebook-icon.svg'
import LinkedInIcon from '../Assets/Images/linkedin-icon.svg'
import TwitterIcon from '../Assets/Images/twitter-icon.svg'
import GitHubIcon from '../Assets/Images/github-icon.svg'

function LandingPage() {
  return (
    <div className='landing-page-container'>
      <div className="social-icons-container">
        <img src={FBIcon} alt="" className="si1" />
        <img src={LinkedInIcon} alt="" className="si2" />
        <img src={TwitterIcon} alt="" className="si3" />
        <img src={GitHubIcon} alt="" className="si4" />
      </div>
    </div>
  )
}

export default LandingPage
