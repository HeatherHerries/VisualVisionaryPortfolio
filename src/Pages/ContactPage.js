import React from 'react'
import '../Styles/ContactPage.css'
import Navbar from '../Components/Navbar'
import ExLrgHeading from '../Components/ExtraLargeHeading'
import ContactPageImg from '../Assets/Images/contact-image.png'
import ConEmailIcon from '../Assets/Images/email-icon.svg'
import ConPhoneIcon from '../Assets/Images/phone-icon.svg'
import Form from '../Components/Form'
import SectionBreakLine from '../Components/SectionBreakLine'
import SmallContactCard from '../Components/SmallContactCard'
import SocialLinks from '../Components/SocialLinks'
import Footer from '../Components/Footer'

function ContactPage() {
  return (
    <div className='contact-page-container'>
      
      <Navbar />
      
      <div className="contact-hero">
        
        <div className="con-ex-lrg-heading">
        <ExLrgHeading 
        text="What's Your Vision?"
        />
       </div>

        <img src={ContactPageImg} alt="Heather sitting on ledge." />

        <div className="contact-hero-banner">
          <p>Hit me up, let's bring it to life!</p>
        </div>

      </div>

      <div className="contact-form">
        <div className="lrg-input">
          <Form 
          type="textarea"
          placeholder="Tell me about your vision..."
          cols="30"
          rows="5"/>
        </div>

        <div className="sm-input">
          <Form 
          type="text"
          placeholder="Name"
          cols="30"
          rows="2"
        />
        </div>

        <div className="sm-input">
          <Form 
          type="tel"
          placeholder="Phone"
          cols="30"
          rows="2"
          />
        </div>

        <div className="sm-input">
          <Form 
          type="email"
          placeholder="Email"
          cols="30"
          rows="2"
          />
         </div> 

        <div className="submit">
          <Form 
          type="submit"
          value="Submit"
          />
        </div>        
      </div>
      <SectionBreakLine />
      <div className="small-contact-cards">

        <div className="email-card">
          <SmallContactCard 
          icon={ConEmailIcon}
          alt="Email Icon"
          headingText="Send Me an Email"
          subheadingText="heather@thevisualvisionary.com"
          />
        </div>

        <div className="phone-card">
          <SmallContactCard 
          icon={ConPhoneIcon}
          alt="Phone Icon"
          headingText="Give Me a Ring"
          subheadingText="(720)757-0779"
          />
        </div>

        <div className="con-social-links">
          <SocialLinks />
          <SectionBreakLine />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default ContactPage
