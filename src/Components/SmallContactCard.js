import React from 'react'
import '../Styles/SmallContactCard.css'

function SmallContactCard({icon, alt, headingText, subheadingText}) {
  return (
    <div className="small-contact-card">
      <img src={icon} alt={alt} />

      <div className="con-text-container">
        <p className='con-card-heading'>{headingText}</p>
        <p className='con-card-subheading'>{subheadingText}</p>
      </div>
    </div>
  )
}

export default SmallContactCard
