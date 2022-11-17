import React from 'react'
import '../Styles/SectionHeader.css'

function SectionHeader({text}) {
  return (
    <div className='section-header'>
      <p>{text}</p>
    </div>
  )
}

export default SectionHeader
