import React from 'react'
import NavSection from './NavSection'
import BannerSection from './BannerSection'

const LandingPage = () => {
  return (
    <div className="container-fluid landing-page">
      <NavSection />
      <div className="banner-container">
        <BannerSection />
      </div>
    </div>
  )
}

export default LandingPage
