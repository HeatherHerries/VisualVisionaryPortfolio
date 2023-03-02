import React from 'react'
import '../Styles/PortfolioPage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SectionHeader from '../Components/SectionHeader'
import SectionBreakLine from '../Components/SectionBreakLine'
import PortCardHolder from '../Components/PortCardHolder'
import DevImg1 from '../Assets/Images/PCCMockup.png'
import DevImg2 from '../Assets/Images/portfolio-placeholder.png'
import DevImg3 from '../Assets/Images/portfolio-placeholder.png'
import DevImg4 from '../Assets/Images/portfolio-placeholder.png'
import DevImg5 from '../Assets/Images/portfolio-placeholder.png'
import DevImg6 from '../Assets/Images/portfolio-placeholder.png'
import DesignImg1 from '../Assets/Images/portfolio-placeholder.png'
import DesignImg2 from '../Assets/Images/portfolio-placeholder.png'
import DesignImg3 from '../Assets/Images/portfolio-placeholder.png'
import DesignImg4 from '../Assets/Images/portfolio-placeholder.png'
import DesignImg5 from '../Assets/Images/portfolio-placeholder.png'
import DesignImg6 from '../Assets/Images/portfolio-placeholder.png'


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

          pchImgs={[
            {
            img: DevImg1, 
            index: '1',
            alt: 'Placeholder Image',
            title: 'ProjectCode Co-op',
            subtitle: 'Tools used:',
            item1: 'HTML / CSS',
            item2: 'React',
            item3: 'React Bootstrap',
            item4: 'Netlify Form Management'
            },

            {
            img: DevImg2, 
            index: '2',
            alt: 'Placeholder Image',
            title: 'Rebellious Meow',
            subtitle: 'Project Coming Soon',
            item1: '',
            item2: '',
            item3: '',
            item4: ''
            },

            {
            img: DevImg3, 
            index: '3',
            alt: 'Placeholder Image',
            title: '',
            subtitle: 'Project Coming Soon',
            item1: '',
            item2: '',
            item3: '',
            item4: ''
            },

            {
            img: DevImg4, 
            index: '4',
            alt: '',
            title: '',
            subtitle: 'Project Coming Soon',
            item1: '',
            item2: '',
            item3: '',
            item4: ''
            },

            {
            img: DevImg5, 
            index: '5',
            alt: 'Placeholder Image',
            title: '',
            subtitle: 'Project Coming Soon',
            item1: '',
            item2: '',
            item3: '',
            item4: ''
            },

            {
            img: DevImg6, 
            index: '6',
            alt: 'Placeholder Image',
            title: '',
            subtitle: 'Project Coming Soon',
            item1: '',
            item2: '',
            item3: '',
            item4: ''
            },
          ]}
          />
        </div>

        <div className="vr-design-container">
          <PortCardHolder
            sbText="Design" 
            pchPara="My thoughtful visual designs will celebrate your brand, connect with your audience, and create a natural flow to navigate the site. I hope these samples of my work will spark your imagination.
            "
            pchImgs={[
              {
              img: DesignImg1, 
              index: '1',
              alt: 'Placeholder Image',
              title: '',
              subtitle: 'Project Coming Soon',
              item1: '',
              item2: '',
              item3: '',
              item4: ''
              },
  
              {
              img: DesignImg2, 
              index: '2',
              alt: 'Placeholder Image',
              title: '',
              subtitle: 'Project Coming Soon',
              item1: '',
              item2: '',
              item3: '',
              item4: ''
              },
  
              {
              img: DesignImg3, 
              index: '3',
              alt: 'Placeholder Image',
              title: '',
              subtitle: 'Project Coming Soon',
              item1: '',
              item2: '',
              item3: '',
              item4: ''
              },
  
              {
              img: DesignImg4, 
              index: '4',
              alt: 'Placeholder Image',
              title: '',
              subtitle: 'Project Coming Soon',
              item1: '',
              item2: '',
              item3: '',
              item4: ''
              },
  
              {
              img: DesignImg5, 
              index: '5',
              alt: 'Placeholder Image',
              title: '',
              subtitle: 'Project Coming Soon',
              item1: '',
              item2: '',
              item3: '',
              item4: ''
              },
  
              {
              img: DesignImg6, 
              index: '6',
              alt: 'Placeholder Image',
              title: '',
              subtitle: 'Project Coming Soon',
              item1: '',
              item2: '',
              item3: '',
              item4: ''
              },
            ]}
            />
          </div>
        </div>
      </div>

      
      
      <div className="port-footer">
      <div className="portfolio-break-line">
        <SectionBreakLine />
      </div>
        <Footer />
      </div>
    </div>
  )
}

export default PortfolioPage
