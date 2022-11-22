import React from 'react'
import '../Styles/PortCardHolder.css'
import Subheading from './Subheading'

function PortCardHolder({sbText, pchPara, pchImgs}) {
  
  return (
    <div className="port-card-holder-container">
      <div className="pch-header">
        <Subheading 
        title={sbText}
        />
      </div>

      <div className="pch-para">
        <p>{pchPara}</p>
      </div>

      <div className="pch-imgs">

        {pchImgs.map((pchImg) => <img className={`img${pchImg.index}`} key={pchImg.index} src={pchImg.img} alt={pchImg.alt} />)}

      </div>
    </div>
  )
}

export default PortCardHolder
