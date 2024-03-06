import React from 'react'
import PropTypes from 'prop-types'
import { Auth0Provider } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  const navigate = useNavigate()

  const onRedirectCallback = (appState) => {
    navigate(appState && appState.targetUrl ? appState.targetUrl : '/user') // Redirect to the home page after authentication
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

Auth0ProviderWithHistory.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Auth0ProviderWithHistory
