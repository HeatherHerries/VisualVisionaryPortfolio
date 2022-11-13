import React from 'react'
import '../Styles/AboutPage.css'
import VBImage from '../Assets/Images/vb-image.png'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import SectionHeader from '../Components/SectionHeader'
import SectionBreakLine from '../Components/SectionBreakLine'

import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <div>
      <Navbar />

      <div className="vision-began-container">
        <div className="vb-header">
            <SectionHeader 
            text="How The Vision Began"
            />
        </div>

        <div className="vb-text-content">
          <p>Ever had one of those lightning-bolt-from-the-sky moments? I did. 
          It arrived unannounced, typical lightning bolt! 
          I was a hair stylist at the time with a solid clientele. I guess you could say I was on cruise control, stuck in limbo. Until I wasn’t...</p>
          <br />
          <p>I have always craved a challenge and I needed a change. 
          So, I dove headfirst into an immersive full stack web development course. Adiós, dull routine, hello serious professional and creative freedom!
          </p>
          <br />
          <p>
          For the moment, hair styling still paid the bills, so I used that time  to hone into my logical side. and prepare myself for a new chapter. 
          I styled hair during the day and designed websites for friends and family after hours. The excitement and satisfaction were intoxicating. 
          </p>
          <br />
          <p>With all the logic under my belt now, it was time for me to devour design. I learned everything that I could get my little hands on about designing UI/UX to solve the worlds problems. Now, I am able  and craft digital masterpieces!. 
          </p>
          <br />
          <p>And since I’ve got your ear--
          Maybe we can change the world together.  Let’s collaborate. Or, check out my portfolio to see my work come to life. 
          </p>
        </div>

        <div className="vb-image">
          <img src={VBImage} alt="" />
        </div>

        <div className="vb-button">
          <Link style={{textDecoration: 'none'}}to="#"><Button 
          text="See My Resume"
          /></Link> 
        </div>

        <div className="vb-section-break-line">
        <SectionBreakLine />
        </div>  
      
      </div>

      <div className="skills-envisioned-container">
      <div className="se-header">
            <SectionHeader 
            text="Skills Envisioned"
            />
        </div>
      </div>
    </div>
  )
}

export default AboutPage

