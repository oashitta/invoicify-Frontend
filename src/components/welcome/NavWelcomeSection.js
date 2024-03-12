import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom' // Import Link from React Router

const NavWelcomeSection = () => {
  const { logout, isAuthenticated, user } = useAuth0()

  const handleSignOut = () => {
    logout({ returnTo: window.location.origin })
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand logo">
          Billify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-4">
              <Link to="/invoice" className="nav-link">
                Invoices
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link to="/estimates" className="nav-link">
                Estimates
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link to="/quotes" className="nav-link">
                Quotes
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link to="/bills" className="nav-link">
                Bills
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {isAuthenticated ? (
              <div className="me-2">
                <span className="fs-6">Welcome, {user.name}</span>
                <button
                  type="button"
                  className="btn btn-login ms-2"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavWelcomeSection
