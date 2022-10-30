import React from 'react'
import './LandingPage.css'
import BgImage from '../Assets/Images/landing-bg-image.png'
import FBIcon from '../Assets/Images/facebook-icon.svg'
import LinkedInIcon from '../Assets/Images/linkedin-icon.svg'
import TwitterIcon from '../Assets/Images/twitter-icon.svg'
import GitHubIcon from '../Assets/Images/github-icon.svg'

function LandingPage() {
  return (
    <div>
      <div className='landing-page-container'>
        <div className="bg-image-container">
          <img className='bg-image'src={BgImage} alt="" />
        </div>
        <div className="social-container">
          <img src={FBIcon} alt="" />
          <img src={LinkedInIcon} alt="" />
          <img src={TwitterIcon} alt="" />
          <img src={GitHubIcon} alt="" />
        </div>

        
      </div>
    </div>
  )
}

export default LandingPage
