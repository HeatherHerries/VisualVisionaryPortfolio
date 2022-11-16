import React from 'react'
import '../Styles/VACard.css'

function VACard({vaimage1, vaalt1, vapara1, vapara2, vaimage2, vaalt2 }) {
  return (
    <div className='va-card-container'>
      <div className="va-top">
        <img src={vaimage1} alt={vaalt1} />
        <p>{vapara1}</p>
      </div>
        <div className="va-bottom">
          <p>{vapara2}</p>
          <img src={vaimage2} alt={vaalt2} />
        </div>
      </div>
  )
}

export default VACard
