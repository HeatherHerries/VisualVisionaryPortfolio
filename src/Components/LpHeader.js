import React from 'react'
import './LpHeader.css'
import LPLogo from '../Assets/Images/lp-logo.svg'

function LpHeader() {
  return (
    <div className='header-container'>

      <div className="logo">
        <img src={LPLogo} alt="" />
      </div>
      
    </div>
  )
}

export default LpHeader
