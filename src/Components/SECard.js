import React from 'react'
import '../Styles/SECard.css'

function SECard({header1, image, alt,header2, para, header3, lis}) {


  return (
    <div className='se-card-container'>
      
      <div className="se-card-content">

        <div className="se-card-header1">
          <p>{header1}</p>
        </div>

        <div className="se-card-icon">
          <img src={image} alt={alt} />
        </div>

        <div className="se-card-header2">
          <p>{header2}</p>
        </div>

        <div className="se-card-para">
          <p>{para}</p>
        </div>
      </div>

    </div>
  )
}

export default SECard
