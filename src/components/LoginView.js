// LoginView.js
import React, { useContext } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { AuthContext } from './context/AuthContext'; 
// import { useTheme } from './context/ThemeContext';
import './styles/LoginView.css';

const LoginView = () => {
  const { userName } = useContext(AuthContext);
  // const { theme } = useTheme();

  return (
    <div className={`login-container`}>
      <div className={`welcome-message`}>
        {userName ? (
          <p>Welcome back, {userName}!</p>
        ) : (
          <p>You are logged out. Please login!</p>
        )}
      </div>
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default LoginView;
