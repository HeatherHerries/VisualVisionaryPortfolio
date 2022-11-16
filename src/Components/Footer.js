import React from 'react'
import '../Styles/Footer.css'
import Logo from '../Assets/Images/logo.svg'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
          <Link style={{textDecoration: 'none'}}to="/"><img src={Logo} alt="VisualVisionary Logo" /></Link>
        </div>

        <div className="footer-links">
          <ul>
            <Link className='link' style={{textDecoration: 'none'}}to="/AboutPage"><li>About</li></Link> 

            <Link className='link' style={{textDecoration: 'none'}}to="/PortfolioPage"><li>Portfolio</li></Link> 

            <Link style={{textDecoration: 'none'}}to="/ContactPage"><li>Contact</li></Link> 
          </ul>
        </div>
      <div className="footer-copyright">
        <p>Designed & Created With Love By Yours Truly</p>
        <p>Copyright © 2022  VisualVisionary, www.visualvisionary.com</p>
      </div>
    </div>
  )
}

export default Footer
