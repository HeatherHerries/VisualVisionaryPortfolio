import React from 'react'
import '../Styles/LandingPage.css'
import SocialLinks from '../Components/SocialLinks'
import LPImage from '../Assets/Images/lp-logo.svg'
import Button from '../Components/Button'
import { Link } from "react-router-dom"


function LandingPage() {
  return (
    <div className='landing-page-container'>
      
      <div className="lp-social-links">
        <SocialLinks />
      </div>

      <div className="lp-content">
        <img src={LPImage} alt="" />
        <Link style={{textDecoration: 'none'}}to="/ContactPage"><Button 
          text="Learn More"
          /></Link> 
      </div>
    </div>
  )
}

export default LandingPage
