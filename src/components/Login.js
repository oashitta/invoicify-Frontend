import { useAuth0 } from "@auth0/auth0-react";
import { React, useState } from "react";

// We will need to choose which login option we want to use. login with redirect or login with popup
const LoginButton = () => {
  const { loginWithRedirect, loginWithPopup, isAuthenticated } = useAuth0();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginWithRedirect = () => {
    setIsLoading(true);
    loginWithRedirect();
  };

  const handleLoginWithPopup = () => {
    setIsLoading(true);
    loginWithPopup();
  };

  return (
    
      !isAuthenticated && (
        <div>
          <button onClick={handleLoginWithRedirect} disabled={isLoading}>
            Log In / Sign Up with Redirect
          </button>
          <button onClick={handleLoginWithPopup} disabled={isLoading}>
            Log In / Sign Up with Popup
          </button>
        </div>
      )
    
  );
};

export default LoginButton;
