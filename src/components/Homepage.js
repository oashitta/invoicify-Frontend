import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/Homepage.css'

// This function will probably change to header as it contains the login logout buttons. 

function Homepage() {

  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div >
    <h1>Billify Authentication</h1>
    <ul>
      <li >
        <button onClick={loginWithPopup} >Login with Popup</button>
        <button onClick={loginWithRedirect} >Login with Redirect</button>
        <button onClick={logout}>Logout</button>
        
      </li>
    </ul>

    <h3> User is { isAuthenticated ? "Logged in" : " Not logged in"}</h3>
    { isAuthenticated && (<pre style={{textAlign: 'start'}}> {JSON.stringify(user, null, 2)} </pre>)}

    </div>
    
  );
}

export default Homepage;