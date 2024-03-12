import React from 'react'
import PropTypes from 'prop-types'
import { Auth0Provider } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE // Optional: Set the audience for access token verification
  const navigate = useNavigate()

  const onRedirectCallback = (appState) => {
    navigate(appState && appState.targetUrl ? appState.targetUrl : '/user') // Redirect to the home page after authentication
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true} // Enable refresh token support
      cacheLocation="localstorage" // Store tokens in local storage for persistence
    >
      {children}
    </Auth0Provider>
  )
}

Auth0ProviderWithHistory.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Auth0ProviderWithHistory
