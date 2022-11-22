import React from 'react'
import '../Styles/Navbar.css'
import Logo from '../Assets/Images/logo.svg'
import { Link } from "react-router-dom"

function Navbar() {
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
    <div className='navbar-container'>
      <div className="logo">
        <Link to="/"><img src={Logo} alt="VisualVisionary Logo" /></Link>
      </div>

      <div>
        <ul>
          {
            links.map(link => (<Link style={{textDecoration:'none'}}to={link.url}><li>{link.text}</li></Link>))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
