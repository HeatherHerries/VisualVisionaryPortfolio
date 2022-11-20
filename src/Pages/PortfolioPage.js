import React from 'react'
import '../Styles/PortfolioPage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SectionHeader from '../Components/SectionHeader'
import PortCardHolder from '../Components/PortCardHolder'
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
    
      <div className="visions-revealed-container">

        <div className="vr-header">
          <SectionHeader 
          text="Visions Revealed"
          />

        <div 
        className="vr-dev-container">
          <PortCardHolder
          sbText="Development" 
          pchPara="A flawless user experience is vital to maintain site engagement. I employ industry-best technology and techniques to keep your site functioning and your visitors confident. Have a peek at some of my smooth-running creations below."
          pchImg1={DevImg1}
          pchImg2={DevImg2}
          pchImg3={DevImg3}
          pchImg4={DevImg4}
          pchImg5={DevImg5}
          pchImg6={DevImg6}

          // pchImgs={[
          //   {
          //   img: {DevImg1}, 
          //   index: '1',
          //   alt: 'Placeholder Image'
          //   },

          //   {
          //   img: {DevImg2}, 
          //   index: '2',
          //   alt: 'Placeholder Image'
          //   },

          //   {
          //   img: {DevImg3}, 
          //   index: '3',
          //   alt: 'Placeholder Image'
          //   },

          //   {
          //   img: {DevImg4}, 
          //   index: '4',
          //   alt: 'Placeholder Image'
          //   },

          //   {
          //   img: {DevImg5}, 
          //   index: '5',
          //   alt: 'Placeholder Image'
          //   },

          //   {
          //   img: {DevImg6}, 
          //   index: '6',
          //   alt: 'Placeholder Image'
          //   },
          // ]}
          />
        </div>

        <div className="vr-design-container">
          <PortCardHolder
            sbText="Design" 
            pchPara="My thoughtful visual designs will celebrate your brand, connect with your audience, and create a natural flow to navigate the site. I hope these samples of my work will spark your imagination.
            "
            pchImg1={DesignImg1}
            pchImg2={DesignImg2}
            pchImg3={DesignImg3}
            pchImg4={DesignImg4}
            pchImg5={DesignImg5}
            pchImg6={DesignImg6}

            // pchImgs={[
            //   {
            //   img: {DesignImg1}, 
            //   index: '1',
            //   alt: 'Placeholder Image'
            //   },
  
            //   {
            //   img: {DesignImg2}, 
            //   index: '2',
            //   alt: 'Placeholder Image'
            //   },
  
            //   {
            //   img: {DesignImg3}, 
            //   index: '3',
            //   alt: 'Placeholder Image'
            //   },
  
            //   {
            //   img: {DesignImg4}, 
            //   index: '4',
            //   alt: 'Placeholder Image'
            //   },
  
            //   {
            //   img: {DesignImg5}, 
            //   index: '5',
            //   alt: 'Placeholder Image'
            //   },
  
            //   {
            //   img: {DesignImg6}, 
            //   index: '6',
            //   alt: 'Placeholder Image'
            //   },
            // ]}
            />
          </div>
        </div>
      </div>
      
      <Footer />

    </div>
  )
}

export default PortfolioPage
