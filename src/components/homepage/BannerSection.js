import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const BannerSection = () => {
  const { loginWithRedirect } = useAuth0()

  const handleGetStartedClick = () => {
    loginWithRedirect()
  }

  return (
    <section className="banner-section">
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="col-md-6 col-sm-12">
          <h1 className="text-capitalize">
            Simplify your invoice management with billify
          </h1>
          <p>
            Billify is the ultimate solution for managing your invoices
            efficiently. Streamline your invoicing process, save time, and get
            paid faster.
          </p>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-login me-2"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
            <button type="button" className="btn btn-more">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-md-auto col-sm-12 mt-5">
          {' '}
          {/* col-md-auto for larger screens and col-sm-12 for smaller screens */}
          <img
            className="img-fluid"
            src="/images/banner-image.jpg"
            alt="Woman holding a paper"
            style={{ maxWidth: '100%', height: 'auto' }} // Ensure the image is responsive
          />
        </div>
      </div>
    </section>
  )
}

export default BannerSection
