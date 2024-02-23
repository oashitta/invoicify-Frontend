import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/Homepage.css'
import LoginButton from './Login';
import LogoutButton from './Logout';

// This function will probably change to header as it contains the login logout buttons. 

function Header() {

  const { user, isAuthenticated } = useAuth0();

  return (
    <div >
     
      <h1>Billify Authentication</h1>
      <LoginButton />
      <LogoutButton />
      <h3> User is { isAuthenticated ? "Logged in" : " Not logged in"}</h3>
      { isAuthenticated && (<pre style={{textAlign: 'start'}}> {JSON.stringify(user, null, 2)} </pre>)}

    </div>
    
  );
}

export default Header;