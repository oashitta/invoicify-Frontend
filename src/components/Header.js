import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import '../css/Homepage.css'
import LoginButton from './Login';
import LogoutButton from './Logout';

// This function will probably change to header as it contains the login logout buttons. 

function Header() {

  const { user, isAuthenticated } = useAuth0();

  function callApi() {
    axios.get("http://localhost:3500/").then(response => console.log(response.data)).catch(error => console.log(error.message))
  }

  function callProtectedApi() {
    axios.get("http://localhost:3500/protected").then(response => console.log(response.data)).catch(error => console.log(error.message))
  }

  return (
    <div >
     
      <h1>Billify Authentication</h1>
      <LoginButton />
      <LogoutButton />

      <ul>
        <li >
          <button onClick={callApi}>Call API Route</button>
        </li>
        <li >
          <button onClick={callProtectedApi}>Call Protected API Route</button>
        </li>
      </ul>

      <h3> User is { isAuthenticated ? "Logged in" : " Not logged in"}</h3>
      { isAuthenticated && (<pre style={{textAlign: 'start'}}> {JSON.stringify(user, null, 2)} </pre>)}

    </div>
    
  );
}

export default Header;