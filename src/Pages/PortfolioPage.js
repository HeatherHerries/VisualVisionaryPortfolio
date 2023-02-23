import React from 'react'
import '../Styles/PortfolioPage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SectionHeader from '../Components/SectionHeader'
import DevImg1 from '../Assets/Images/dev-placeholder-1.png'
import DevImg2 from '../Assets/Images/dev-placeholder-2.png'
import DevImg3 from '../Assets/Images/dev-placeholder-3.png'
import DevImg4 from '../Assets/Images/dev-placeholder-4.png'
import DevImg5 from '../Assets/Images/dev-placeholder-5.png'
import DevImg6 from '../Assets/Images/dev-placeholder-6.png'
import DesignImg1 from '../Assets/Images/design-placeholder-1.png'
import DesignImg2 from '../Assets/Images/design-placeholder-2.png'
import DesignImg3 from '../Assets/Images/design-placeholder-3.png'
import DesignImg4 from '../Assets/Images/design-placeholder-4.png'
import DesignImg5 from '../Assets/Images/design-placeholder-5.png'
import DesignImg6 from '../Assets/Images/design-placeholder-6.png'


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
        <h1>Development</h1>
        <p></p>
      </div>

      <div className="design-section">
        <h1>Design</h1>
        <p></p>
      </div>
  
      
      <Footer />
    </div>
  )
}

export default PortfolioPage
