// Login.js
// https://developers.google.com/identity/gsi/web/reference/js-reference

import React, { useEffect, useContext } from 'react';
import { TokenContext } from '../TokenContext';
import './styles/Login.css';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = () => {
  const { setToken, setUserId, setUserEmail, setUserName } = useContext(TokenContext);

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      try {
        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: handleCredentialResponse,
          context: 'signin',
        });

        window.google.accounts.id.renderButton(
          document.getElementById('g_id_signin'),
          {
            theme: 'filled_blue',
            size: 'medium',
            text: 'signin_with',
          }
        );
      } catch (error) {
        console.error('Error initializing Google Sign-In:', error);
      }
    };

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;

    script.onload = initializeGoogleSignIn;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response) => {
    console.log('Credential response:', response);

    // Handle the Sign-In response here
    if (response.credential) {
      // Successful login
      console.log('Login successful!');

      // Extract user information from the ID token
      const idToken = response.credential;
      const decodedToken = parseJwt(idToken);

      // Access user information
      const userId = decodedToken.sub;
      const userEmail = decodedToken.email;
      const userName = decodedToken.name;

      // console.log('User ID:', userId);
      // console.log('User Email:', userEmail);
      // console.log('User Name:', userName);

      // Set the token and user info in the context
      setToken(idToken);
      setUserId(userId);
      setUserEmail(userEmail);
      setUserName(userName);
    } else {
      // Failed login
      console.error('Login failed. Error details:', response);
    }
  };

  // Function to parse JWT token
  const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

    return JSON.parse(jsonPayload);
  };

  return (
    <div className="login-container">
      <div id="g_id_signin" className="g_id_signin"></div>
    </div>
  );
};

export default Login;
