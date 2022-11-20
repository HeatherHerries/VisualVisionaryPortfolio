import React from 'react'
import '../Styles/ContactPage.css'
import Navbar from '../Components/Navbar'
import ExLrgHeading from '../Components/ExtraLargeHeading'
import ContactPageImg from '../Assets/Images/contact-image.png'
import Footer from '../Components/Footer'

function ContactPage() {
  return (
    <div className='contact-page-container'>
      
      <Navbar />
      
      <div className="contact-hero">
       <ExLrgHeading 
       text="What's Your Vision?"
       />

        <img src={ContactPageImg} alt="Picture of Heather sitting on ledge." />

        <div className="contact-hero-banner">
          <p>Hit me up, let's bring it to life!</p>
        </div>

      </div>

      <div className="contact-form">
        <form action=""></form>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
