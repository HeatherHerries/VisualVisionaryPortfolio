import React from 'react'
import '../Styles/PortCardHolder.css'
import Subheading from './Subheading'

function PortCardHolder({sbText, pchPara, pchImg1, pchImg2, pchImg3, pchImg4, pchImg5, pchImg6}) {
  
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
        <img className='img1'src={pchImg1} alt="" />
        <img className='img2'src={pchImg2} alt="" />
        <img className='img3'src={pchImg3} alt="" />
        <img className='img4'src={pchImg4} alt="" />
        <img className='img5'src={pchImg5} alt="" />
        <img className='img6'src={pchImg6} alt="" />
        {/* {
          pchImgs.map(pchImg => (<img src={pchImg} alt=""/>))
        }  */}
      </div>
    </div>
  )
}

export default PortCardHolder
