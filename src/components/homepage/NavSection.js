import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const NavSection = () => {
  const { loginWithRedirect } = useAuth0()

  const handleGetStartedClick = () => {
    // Redirect the user to the signup page
    loginWithRedirect({
      screen_hint: 'signup',
    })
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="/images/logo.png"
            alt="Billify Logo"
            style={{ width: '100px', height: 'auto' }}
          />
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Invoice Management
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Create Invoice
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Manage Invoice
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More Options
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a clasName="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <button type="button" className="btn btn-more me-2">
              Learn More
            </button>
            <button
              type="button"
              className="btn btn-login"
              onClick={handleGetStartedClick}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavSection
