import React from 'react'
import '../Styles/AboutPage.css'
import VBImage from '../Assets/Images/vb-image.png'
import EVImage from '../Assets/Images/evolution-of-a-vision-image.png'
import Navbar from '../Components/Navbar'
import SectionHeader from '../Components/SectionHeader'
import SECard from '../Components/SECard'
import EVCard from '../Components/EVCard'
import VACard from '../Components/VACard'
import Button from '../Components/Button'
import SectionBreakLine from '../Components/SectionBreakLine'
import Footer from '../Components/Footer'
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
import CassetteTape from '../Assets/Images/tape-icon.svg'
import SewingMachine from '../Assets/Images/sewing-machine-icon.svg'
import Recliner from '../Assets/Images/recliner-icon.svg'
import StationWagon from '../Assets/Images/station-wagon-icon.svg'
import { Link } from "react-router-dom"

function AboutPage() {

  return (
    <div className='about-page-container'>
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



        <div className="se-card-design"> <SECard 
          header1="Design"
          image={DesignCardImg}
          alt="SVG of painters palette"
          header2="Bring Your Audience Home"
          para="I design beautiful sites with an organic connection to your brand. And a fiery dash of soul to keep your visitors on their toes. "
          header3="Skills"
          lis={['UI / UX', 'Websites / Apps', 'Branding', 'Logos' ]}
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
          lis= { ['HTML / HTML5', 'CSS / Sass', 'Javascript', 'React'] }
          />
        </div>
        
        <div className="tools-container">
          <div className="tools-text">
            <p>Tools I Use: </p>
          </div>

          <div className="tools-icon-container">

            <div className="tic-top">
              <Link style={{textDecoration: 'none'}}to='https://getbootstrap.com/'><img src={BootstrapIcon} alt="Bootstrap Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://www.canva.com/'><img src={CanvaIcon} alt="Canva Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://codepen.io/'><img src={CodepenIcon} alt="Codepen Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://www.figma.com/'><img src={FigmaIcon} alt="Figma Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://git-scm.com/'><img src={GitIcon} alt="Git Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://github.com/'><img src={GithubFilledIcon} alt="Github Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://jquery.com/'><img src={JqueryIcon} alt="Jquery Icon" /></Link>
            </div>

            <div className="tic-bottom">
              <Link style={{textDecoration: 'none'}}to='https://mui.com/'><img src={MaterialUIIcon} alt="Material UI Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://nodejs.org/en/'><img src={NodeJSIcon} alt="NodeJS Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://npmjs.com/'><img src={NPMIcon} alt="NPM Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://reactjs.org/'><img src={ReactIcon} alt="React Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://code.visualstudio.com/'><img src={VSCodeIcon} alt="VS Code Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://www.adobe.com/products/photoshop.html'><img src={PhotoshopIcon} alt="Photoshop Icon" /></Link>
              <Link style={{textDecoration: 'none'}}to='https://www.adobe.com/products/xd.html'><img src={XDIcon} alt="XD Icon" /></Link>
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

      <div className="evolution-vision-container">

        <div className="ev-header">
          <SectionHeader 
          text="Evolution of a Vision"
          />
        </div>

        <div className="ev-image">
          <img src={EVImage} alt="" />
        </div>

        <div className="ev-text-content">
          <p>All my projects large and small begin with the same simple vision: an app that solves your problem, performs without fail and looks great doing it! </p>
          <br />
          <p>Getting there can be a bumpy experience for sure. I might stomp around a bit, hung-up on solving a tangle of code or a stubborn design concept, but experience has taught me to trust the process, and that includes the stumbles and frustrations. 
          </p>
        </div>

        <div className="ev-cards-container">
          <EVCard 
          title='Summon the Muse'
          para1='All creators have a process to summon their talent.
          My muse and I get along great, I give her what she needs and we make beautiful music together. 
          '
          para2='Mostly, I’m a workout, coffee, hot tub, and earbuds girl! I like a good sweat and I like a good soak. Add the perfect song to my morning joe and I’m a rocket-fueled creative problem solver. And that’s when I go to work, and my muse has to hang on for the ride.
          '/>
          
          <EVCard 
          title='Get to Work'
          para1='Relentless research, hard work, and a touch of the divine. That’s my recipe.  
          '
          para2='The research is truly the foundation and everything grows from that. Sleeves rolled up, I do the deep dive … What apps and brands are setting the bar in my client’s industry? What can I learn from them? How can I improve upon their success and avoid their failures? Are there new coding techniques or design trends that would push my client’s site to another level? I’m voracious for knowledge and any advantage I can get.
        '/>

          <EVCard 
          title='Love Your Site'
          para1='Designing and developing apps is my jam. Every day, I get to geek-out on the technical nuts and bolts of high-performance sites, AND I get to let my hair down and flex my visual creativity too!  
          '
          para2='It has taken hard work to get here and more hard work to stay at the top of my game. But it’s a labor of love and I take my craft seriously. After all, clients entrust me with their brand. That’s why I always deliver my very best. I have too much personal pride and respect to do anything less. Besides, I’m having way too much fun to half-ass it! 
        '/>
          
        </div>

        <div className="ev-button">
          <Link style={{textDecoration: 'none'}}to="/ContactPage"><Button 
          text="Let's Work Together"
          /></Link> 
        </div>

        <div className="ev-section-break-line">
          <SectionBreakLine />
        </div>  

      </div>

      <div className="visualization-aside-container">

      <div className="va-header">
        <SectionHeader 
        text="Visualization Aside"
        />
      </div>
      
      <div className="va-cards-container">
        <VACard 
        vaimage1={CassetteTape}
        vaalt1="Cassette Tape Icon"
        vapara1="My friends call me an old soul with a dreamer spirit, but really I just like mixtapes,"  
        vapara2="designing and making my own clothes Pretty In Pink style," 
        vaimage2={SewingMachine}
        vaalt2="Sewing Machine Icon"
        />

        <div className="vertical-section-break-line">
        </div>

        <VACard 
        vaimage1={Recliner}
        vaalt1="Recliner Icon"
        vapara1="sitting back all comfy like in my poofy recliner doing the Netflix and chill with my cat Biggie Smalls and"
        vapara2="I'm always down to take a roadtrip or two just as long as I can sit in one of the  backwards facing seats  of the station wagon."
        vaimage2={StationWagon}
        vaalt2="Station Wagon Icon"
        />
      </div>

      <div className="va-quote">
        <p>“This is a really volcanic ensemble you're wearing today, it's really marvelous!”</p>
        <p className='va-quote-ref'>-- Ducky, Pretty In Pink</p>
      </div>

      <div className="ev-section-break-line">
        <SectionBreakLine />
      </div>  

      </div>

        <Footer />
    </div>
  )
}

export default AboutPage

