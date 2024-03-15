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
            <li className="nav-item ms-4">
              <Link to="/items" className="nav-link">
                Items
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link to="/vendors" className="nav-link">
                Vendors
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link to="/clients" className="nav-link">
                Clients
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link to="/reports" className="nav-link">
                Reporting
              </Link>
            </li>
          </ul>
          {/* Search Bar */}
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter search term"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex align-items-center">
            {isAuthenticated ? (
              <div className="me-2 d-flex align-items-center mt-2">
                {/* Profile picture */}
                <img
                  src={user.picture}
                  alt="Profile"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                />
                {/* Welcome message */}
                <div>
                  <span className="fs-6">Welcome, {user.name}</span>
                  <button
                    type="button"
                    className="btn btn-login ms-2"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavWelcomeSection
