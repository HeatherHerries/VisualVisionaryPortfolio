import React from 'react'
import '../Styles/SocialLinks.css'
import FacebookIcon from '../Assets/Images/facebook-icon.svg'
import LinkedInIcon from '../Assets/Images/linkedin-icon.svg'
import TwitterIcon from '../Assets/Images/twitter-icon.svg'
import GitHubIcon from '../Assets/Images/github-icon.svg'

function SocialLinks() {
  return (
    <div className='social-links-container'>
      <ul>
        <li>
          <a href="#"><img src={FacebookIcon} alt="" /></a>
        </li>

        <li>
          <a href="#"><img src={LinkedInIcon} alt="" /></a>
        </li>

        <li>
          <a href="#"><img src={TwitterIcon} alt="" /></a>
        </li>

        <li>
          <a href="#"><img src={GitHubIcon} alt="" /></a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
