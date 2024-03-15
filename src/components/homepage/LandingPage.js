import React, { useState, useEffect } from 'react'
import NavSection from './NavSection'
import BannerSection from './BannerSection'
import ModalSection from './ModalSection'

const LandingPage = () => {
  const [verificationError, setVerificationError] = useState(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const error = params.get('error')
    const errorDescription = params.get('error_description')

    // Check if the error indicates email verification is pending
    if (
      error === 'access_denied' &&
      errorDescription.includes('Check your email')
    ) {
      setVerificationError(errorDescription)
    }
  }, [])

  const handleCloseModal = () => {
    setVerificationError(null)
  }

  return (
    <div className="container-fluid landing-page">
      <NavSection />
      <div className="banner-container">
        <BannerSection />
      </div>
      {verificationError && (
        <ModalSection
          errorMessage={verificationError}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default LandingPage
