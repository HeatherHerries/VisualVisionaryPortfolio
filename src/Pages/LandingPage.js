import React from 'react'
import '../Styles/LandingPage.css'
import LpBackground from '../Components/LpBackground'
import SocialLinks from '../Components/SocialLinks'
import LpHeader from '../Components/LpHeader'
import LpButton from '../Components/LpButtonSection'


function LandingPage() {
  return (
    <>
      <LpBackground />
      <SocialLinks />
      <LpHeader />
      <LpButton />
    </>
  )
}

export default LandingPage
