import React from 'react'
import '../Styles/Navbar.css'
import Logo from '../Assets/Images/logo.svg'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className="logo">
        <Link style={{textDecoration: 'none'}}to="/"><img src={Logo} alt="" /></Link>
      </div>

      <div className="page-links">
        <ul>
        <Link style={{textDecoration: 'none'}}to="/AboutPage"><li>About</li></Link> 

        <Link style={{textDecoration: 'none'}}to="/ProjectsPage"><li>Portfolio</li></Link> 

        <Link style={{textDecoration: 'none'}}to="/ContactsPage"><li>Contact</li></Link> 
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar
