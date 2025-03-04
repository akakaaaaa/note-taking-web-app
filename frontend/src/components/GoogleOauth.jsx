import React, { useState } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import "./styles/GoogleOauth.scss";
import googleLogo from "../assets/images/icon-google.svg";

const CustomGoogleOAuth = () => {
  const [user, setUser] = useState(null);
  const login = useGoogleLogin({
    onSuccess: (response) => {
      console.log("Login Success:", response);
      setUser(response);
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

  return (
    <div className="google-button-container">
      {!user ? (
        <button className="googleButton" onClick={() => login()}>
          <img src={googleLogo} alt="" />
        </button>
      ) : (
        <div>
          <h3>Welcome, {user.profileObj?.name}</h3>
          <img src={user.profileObj?.imageUrl} alt="Profile" />
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <CustomGoogleOAuth />
  </GoogleOAuthProvider>
);

export default App;
