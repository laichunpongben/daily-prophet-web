// Login.js
// https://developers.google.com/identity/gsi/web/reference/js-reference

import React, { useEffect, useContext } from 'react';
import { useColorScheme } from '@mui/material-next/styles';
import Box from '@mui/material/Box';
import { AuthContext } from './context/AuthContext';
import { useView } from './context/ViewContext'; 

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginButton = () => {
  const { setToken, setUserId, setUserEmail, setUserName } = useContext(AuthContext);
  const { handleViewChange } = useView(); 
  const { mode } = useColorScheme();

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
            theme: 'outline',
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

      // Save the token and user info to local storage
      localStorage.setItem('authToken', idToken);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userEmail', userEmail);
      localStorage.setItem('userName', userName);

      setTimeout(() => {
        handleViewChange('feed'); // return to feed after login successfully
      }, 2000);
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

  const shadowColor = (mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)');

  return (
    <div className="login-button">
      <Box sx={{border: '1px solid', borderRadius: '5px', padding: '0px 0px', boxShadow: `2px 2px 2px ${shadowColor}`}}>
        <div id="g_id_signin" className="g_id_signin"></div>
      </Box>
    </div>
  );
};

export default LoginButton;
