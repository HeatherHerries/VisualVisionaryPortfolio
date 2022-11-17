import React from 'react'
import '../Styles/Footer.css'
import Logo from '../Assets/Images/logo.svg'
import { Link } from "react-router-dom"

function Footer() {
  const links = [
    {
      url: '/AboutPage',
      text: 'About'
    },

    {
      url: '/PortfolioPage',
      text: 'Portfolio'
    },

    {
      url: '/ContactPage',
      text: 'Contact'
    }
  ]
  return (
    <div className='footer'>
      <div className="footer-logo">
        <Link style={{textDecoration: 'none'}}to="/"><img src={Logo} alt="VisualVisionary Logo" /></Link>
      </div>

      <div className="footer-links">
        <ul>
          {
            links.map(link => (<Link style={{textDecoration: 'none'}}to={link.url}><li>{link.text}</li></Link>))
          }
          
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
