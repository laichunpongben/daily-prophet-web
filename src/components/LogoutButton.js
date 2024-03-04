// Logout.js
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material-next/styles';
import { useAuth } from './context/AuthContext';
import { useView } from './context/ViewContext';

const LogoutButton = () => {
  const { setToken, setUserId, setUserEmail, setUserName } = useAuth();
  const { setView } = useView();
  const { mode } = useColorScheme();

  const handleLogout = () => {
    // Perform logout actions, clear user data, and navigate to login or another view
    setToken(null);
    setUserId(null);
    setUserEmail(null);
    setUserName(null);

    // Remove user data from local storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');

    setView('login'); // Redirect to login view after logout
  };

  const shadowColor = (mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)');

  return (
    <div className="logout-button">
      <ButtonBase 
        onClick={handleLogout} 
        sx={{border: '1px solid', borderRadius: '5px', padding: '0px 55px', boxShadow: `2px 2px 2px ${shadowColor}`}}>
        <LogoutIcon />
        <Typography variant='overline'>
          Logout
        </Typography>
      </ButtonBase>
    </div>
  );
};

export default LogoutButton;
