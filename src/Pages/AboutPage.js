import React from 'react'
import '../Styles/AboutPage.css'
import VBImage from '../Assets/Images/vb-image.png'
import Navbar from '../Components/Navbar'
import SectionHeader from '../Components/SectionHeader'
import SECard from '../Components/SECard'
import Button from '../Components/Button'
import SectionBreakLine from '../Components/SectionBreakLine'
import DesignCardImg from '../Assets/Images/palette-icon.svg'
import DevCardImg from '../Assets/Images/brackets-icon.svg'
import BootstrapIcon from '../Assets/Images/bootstrap-icon.svg'
import CanvaIcon from '../Assets/Images/canva-icon.svg'
import CodepenIcon from '../Assets/Images/codepen-icon.svg'
import FigmaIcon from '../Assets/Images/figma-icon.svg'
import GitIcon from '../Assets/Images/git-icon.svg'
import GithubFilledIcon from '../Assets/Images/github-filled-icon.svg'
import JqueryIcon from '../Assets/Images/jquery-icon.svg'
import MaterialUIIcon from '../Assets/Images/material-ui-icon.svg'
import NodeJSIcon from '../Assets/Images/nodejs-icon.svg'
import NPMIcon from '../Assets/Images/npm-icon.svg'
import ReactIcon from '../Assets/Images/react-icon.svg'
import VSCodeIcon from '../Assets/Images/vscode-icon.svg'
import PhotoshopIcon from '../Assets/Images/photoshop-icon.svg'
import XDIcon from '../Assets/Images/xd-icon.svg'

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

        <div className="se-card-design">
            <SECard 
            header1="Design"
            image={DesignCardImg}
            alt="SVG of painters palette"
            header2="Bring Your Audience Home"
            para="I design beautiful sites with an organic connection to your brand. And a fiery dash of soul to keep your visitors on their toes. "
            header3="Skills"
            li1="UI / UX"
            li2="Websites / Apps"
            li3="Branding"
            li4="Logos"
            />
        </div>

        <div className="se-card-development">
            <SECard 
            header1="Development"
            image={DevCardImg}
            alt="SVG of Code Brackets"
            header2="Flawless Technical Precision"
            para="Built with leading-edge technology and practices, your site will never take personal days and it will always serve your guests with a clean experience."
            header3="Languages"
            li1="HTML / HTML5"
            li2="CSS / Sass"
            li3="Javascript"
            li4="React"
            />
        </div>
        
        <div className="tools-container">
          <div className="tools-text">
            <p>Tools I Use: </p>
          </div>

          <div className="tools-icon-container">

            <div className="tic-top">
              <img src={BootstrapIcon} alt="Bootstrap Icon" />
              <img src={CanvaIcon} alt="Bootstrap Icon" />
              <img src={CodepenIcon} alt="Bootstrap Icon" />
              <img src={FigmaIcon} alt="Bootstrap Icon" />
              <img src={GitIcon} alt="Bootstrap Icon" />
              <img src={GithubFilledIcon} alt="Bootstrap Icon" />
              <img src={JqueryIcon} alt="Bootstrap Icon" />
            </div>

            <div className="tic-bottom">
              <img src={MaterialUIIcon} alt="Bootstrap Icon" />
              <img src={NodeJSIcon} alt="Bootstrap Icon" />
              <img src={NPMIcon} alt="Bootstrap Icon" />
              <img src={ReactIcon} alt="Bootstrap Icon" />
              <img src={VSCodeIcon} alt="Bootstrap Icon" />
              <img src={PhotoshopIcon} alt="Bootstrap Icon" />
              <img src={XDIcon} alt="Bootstrap Icon" />
            </div>
          </div>
        </div>

        <div className="se-button">
          <Link style={{textDecoration: 'none'}}to="/PortfolioPage"><Button 
          text="See My Portfolio"
          /></Link> 
        </div>

        <div className="se-section-break-line">
        <SectionBreakLine />
        </div>  

      </div>
    </div>
  )
}

export default AboutPage

