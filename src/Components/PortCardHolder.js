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

        {pchImgs.map((pchImg) => 
        
        <>
          <div class="pch-card-container">
            <img className={`img${pchImg.index}`} key={pchImg.index} src={pchImg.img} alt={pchImg.alt} />
            
            <h1 className={`img${pchImg.index}`} id="pch-card-title"key={pchImg.index}>{pchImg.title}</h1>

            <h3 className={`img${pchImg.index}`} id="pch-card-subtitle"key={pchImg.index}>{pchImg.subtitle}</h3>

            <p className={`img${pchImg.index}`} id="pch-card-item1"key={pchImg.index}>{pchImg.item1}</p>

            <p className={`img${pchImg.index}`} id="pch-card-item2"key={pchImg.index}>{pchImg.item2}</p>

            <p className={`img${pchImg.index}`} id="pch-card-item3"key={pchImg.index}>{pchImg.item3}</p>

            <p className={`img${pchImg.index}`} id="pch-card-item4"key={pchImg.index}>{pchImg.item4}</p>
          </div>
        </>
        )}

      
      </div>

    </div>
  )
}

export default PortCardHolder
