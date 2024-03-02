// LoginView.js
import React, { useContext } from 'react';
import Login from './Login';
import Logout from './Logout';
import { AuthContext } from './AuthContext'; 
import './styles/LoginView.css';

const LoginView = () => {
  const { userName } = useContext(AuthContext);

  return (
    <div className="login-container">
      <div className="welcome-message">
        {userName ? (
          <p>Welcome back, {userName}!</p>
        ) : (
          <p>You are logged out. Please login!</p>
        )}
      </div>
      <Login />
      <Logout />
    </div>
  );
};

export default LoginView;
