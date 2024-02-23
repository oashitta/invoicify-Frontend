import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div style={{textAlign: "center"}}>
    <h1>Billify Authentication</h1>
    <ul>
      <li style={{ textAlign: "center"}}>
        <button onClick={loginWithPopup} style={{marginRight: '10px'}}>Login with Popup</button>
        <button onClick={loginWithRedirect} style={{marginRight: '10px'}}>Login with Redirect</button>
        <button onClick={logout}>Logout</button>
        
      </li>
    </ul>

    <h3> User is { isAuthenticated ? "Logged in" : " Not logged in"}</h3>
    { isAuthenticated && (<pre style={{textAlign: 'start'}}> {JSON.stringify(user, null, 2)} </pre>)}
    
    </div>
  );
}

export default App;
