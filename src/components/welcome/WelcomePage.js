import WelcomeSection from './WelcomeSection'
import React from 'react'
import Layout from '../Layout'

const WelcomePage = () => {
  const sideLinks = (
    <ul className="list-group">
      <li className="list-group-item">Invoices</li>
      <li className="list-group-item">Estimates</li>
      <li className="list-group-item">Quotes</li>
      <li className="list-group-item">Bills</li>
      <li className="list-group-item">Reporting</li>
    </ul>
  )

  return (
    <Layout sideLinks={sideLinks}>
      <WelcomeSection />
    </Layout>
  )
}

export default WelcomePage
