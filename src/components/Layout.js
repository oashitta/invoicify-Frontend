// Layout.js
import React from 'react'
import NavWelcomeSection from '../components/welcome/NavWelcomeSection'

const Layout = ({ children }) => {
  return (
    <div>
      <NavWelcomeSection />
      {children}
    </div>
  )
}

export default Layout
