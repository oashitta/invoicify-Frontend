import React, { useState } from 'react'

const ResendVerificationEmail = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const resendVerificationEmail = async () => {
    setLoading(true)
    setError(null)
    setSuccessMessage(null)
    try {
      const token = `process.env.REACT_APP_AUTH0_MANAGEMENT_API_TOKEN` // Replace 'YOUR_MANAGEMENT_API_TOKEN' with your actual Management API token
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Authorization', `Bearer ${token}`) // Include the Management API token in the Authorization header

      const raw = JSON.stringify({
        user_id: 'string',
        client_id: 'string',
        identity: {
          user_id: 'string',
        },
        organization_id: 'string',
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }

      const response = await fetch(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/jobs/verification-email`,
        requestOptions
      )
      if (!response.ok) {
        throw new Error('Failed to resend verification email')
      }
      setSuccessMessage('Verification email sent successfully')
    } catch (err) {
      setError(err.message || 'Failed to resend verification email')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={resendVerificationEmail}
        disabled={loading}
        className="btn"
      >
        Resend Verification Email
      </button>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default ResendVerificationEmail
