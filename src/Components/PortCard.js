import React from 'react'
import "../Styles/PortCard.css"



export default function PortCard(props) {
  return (
    <>
    {props.details.map((value, index) => (
    <div className="port-card-container" key={index}>
      <img class="card-img"src={value.img} alt="" />
      

      <div className="card-content">
        <h1 className="content-title">{value.title}</h1>
        <h3 className='content-subtitle'>{value.subtitle}</h3>
        <p>{value.item1}</p>
        <p>{value.item2}</p>
        <p>{value.item3}</p>
        <p>{value.item4}</p>
      </div>

      
    </div>
    ))}
    </>
  )
}
