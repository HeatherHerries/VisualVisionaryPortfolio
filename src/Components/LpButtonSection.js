import React from 'react'
import '../Styles/LpButtonSection.css'
import { Link } from "react-router-dom"

function LpButtonSection() {
  return (
    <div className='button-section-container'>

      <Link style={{textDecoration: 'none'}}to="#"><button>Learn More</button></Link> 
    </div>
  )
}

export default LpButtonSection
