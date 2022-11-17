import React from 'react'
import '../Styles/PortfolioPage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SectionHeader from '../Components/SectionHeader'

function PortfolioPage() {
  return (
    <div className="portfolio-page-container">
      <Navbar />
    
      <div className="visions-revealed-container">
      <div className="vb-header">
          <SectionHeader 
          text="Visions Revealed"
          />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default PortfolioPage
