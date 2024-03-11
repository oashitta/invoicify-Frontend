import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

const ResendVerificationEmail = () => {
  const { user, loginWithRedirect } = useAuth0()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const resendVerificationEmail = async () => {
    setLoading(true)
    setError(null)
    setSuccessMessage(null)
    try {
      // Make a POST request to Auth0 to resend verification email
      const response = await axios.post(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/jobs/verification-email`,
        { user_id: user.sub }, // Use user's sub as the user_id
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTH0_MANAGEMENT_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      )
      setSuccessMessage(response.data.message)
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to resend verification email'
      )
    } finally {
      setLoading(false)
    }
  }

  if (
    error &&
    error.error_description === 'Please verify your email before logging in.'
  ) {
    return (
      <div>
        <p>Please verify your email before logging in.</p>
        <button onClick={resendVerificationEmail} disabled={loading}>
          Resend Verification Email
        </button>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
      </div>
    )
  }

  // If user is verified or no error related to email verification, proceed with login
  return (
    <div>
      <p>User is verified. Proceed with login.</p>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  )
}

export default ResendVerificationEmail
