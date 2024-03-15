import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const BannerSection = () => {
  const { loginWithRedirect } = useAuth0()

  const handleGetStartedClick = () => {
    loginWithRedirect()
  }

  return (
    <section className="banner-section text-center">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <span className="material-symbols-outlined fs-1">deployed_code</span>
          <h1 className="text-capitalize">Sign Up for Billify Today</h1>
          <p>Create an account and start managing youur invoices.</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          {' '}
          {/* Add col-lg-4 and col-md-6 for responsive behavior */}
          <span className="material-symbols-outlined fs-1">deployed_code</span>
          <h1 className="text-capitalize">Effortlesly Manage Your Invoices</h1>
          <p>
            Track, organize, and send invoices with ease using Billify's
            intuitive interface.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          {' '}
          {/* Add col-lg-4 and col-md-6 for responsive behavior */}
          <span className="material-symbols-outlined fs-1">deployed_code</span>
          <h1 className="text-capitalize">Stay on top of payments</h1>
          <p>
            Receive notifications and reminders to ensure timely payments from
            your clients.
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5">
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
    </section>
  )
}

export default BannerSection
