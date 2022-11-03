import React from 'react'
import './LandingPage.css'
import LpBackground from '../Components/LpBackground'
import SocialLinks from '../Components/SocialLinks'
import LpHeader from '../Components/LpHeader'
import LpButton from '../Components/LpButtonSection'
import StandingCat from '../Assets/Images/standing-cat-icon.svg'

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
