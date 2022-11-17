import React from 'react'
import '../Styles/EVCard.css'

function EVCard({title, para1, para2}) {
  return (
    <div className="ev-card-container">
      <p className='ev-card-title'>{title}</p>
    <div className="ev-card-content">
      <p>{para1}</p>
      <br />
      <p>{para2}</p>
    </div>

    </div>
  )
}

export default EVCard
