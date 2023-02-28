import React from 'react'
import '../Styles/PortfolioPage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SectionHeader from '../Components/SectionHeader'
import DevImg1 from '../Assets/Images/pcc-mockup.png'
import DevImg2 from '../Assets/Images/dev-placeholder-2.png'
import DevImg3 from '../Assets/Images/dev-placeholder-3.png'
import DevImg4 from '../Assets/Images/dev-placeholder-4.png'
import DevImg5 from '../Assets/Images/dev-placeholder-5.png'
import DevImg6 from '../Assets/Images/dev-placeholder-6.png'
import PortCard from '../Components/PortCard'

const DevCardData =[
  {
    img: DevImg1,
    title: 'ProjectCode Co-op',
    subtitle: 'Tools Used',
    item1: 'React',
    item2: 'React Bootstrap',
    item3: 'Netlify Form Management',
    item4: 'Shopify API'
  },

  {
    img: DevImg2,
    title: 'ProjectCode Co-op',
    subtitle: 'Tools Used',
    item1: 'React',
    item2: 'React Bootstrap',
    item3: 'Netlify Form Management',
    item4: 'Shopify API'
  },

  {
    img: DevImg3,
    title: 'ProjectCode Co-op',
    subtitle: 'Tools Used',
    item1: 'React',
    item2: 'React Bootstrap',
    item3: 'Netlify Form Management',
    item4: 'Shopify API'
  },

  {
    img: DevImg4,
    title: 'ProjectCode Co-op',
    subtitle: 'Tools Used',
    item1: 'React',
    item2: 'React Bootstrap',
    item3: 'Netlify Form Management',
    item4: 'Shopify API'
  },

  {
    img: DevImg5,
    title: 'ProjectCode Co-op',
    subtitle: 'Tools Used',
    item1: 'React',
    item2: 'React Bootstrap',
    item3: 'Netlify Form Management',
    item4: 'Shopify API'
  },

  {
    img: DevImg6,
    title: 'ProjectCode Co-op',
    subtitle: 'Tools Used',
    item1: 'React',
    item2: 'React Bootstrap',
    item3: 'Netlify Form Management',
    item4: 'Shopify API'
  }
]


function PortfolioPage() {
  
  return (
    <div className="portfolio-page-container">
      <Navbar />
    
      <div className="vr-header">
        <SectionHeader 
        text="Visions Revealed"
        />
      </div>

      <div className="dev-section">
        <h1 className="description-title">Development</h1>
        <p className="description">A flawless user experience is vital to maintain site engagement. I employ industry-best technology and techniques to keep your site functioning and your visitors confident. Have a peek at some of my smooth-running creations below.</p>

        <div className="port-cards">
          <PortCard details={DevCardData}/>
        </div>
      </div>

      <div className="design-section">
        <h1 className="description-title">Development</h1>
        <p className="description">A flawless user experience is vital to maintain site engagement. I employ industry-best technology and techniques to keep your site functioning and your visitors confident. Have a peek at some of my smooth-running creations below.</p>

        <div className="port-cards">
          <PortCard details={DevCardData}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioPage
