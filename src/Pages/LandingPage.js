import React from 'react'
import './LandingPage.css'
import LpBackground from '../Components/LpBackground'
import SocialLinks from '../Components/SocialLinks'
import LpHeader from '../Components/LpHeader'
import LpButton from '../Components/LpButtonSection'


function LandingPage() {
  return (
    <div>
      <LpBackground />
      <SocialLinks />
      <LpHeader />
      <LpButton />
    </div>
  )
}

export default LandingPage
