// LoginView.js
import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { AuthContext } from './context/AuthContext'; 
import './styles/LoginView.css';

const LoginView = () => {
  const { userName } = useContext(AuthContext);

  return (
    <div className="login-view-container">
      <Container maxWidth="sm" spacing={0} sx={{padding: '0px', margin: '0px'}}>
        <Stack spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            {userName ? (
              <Typography variant='overline'>Welcome back, {userName}!</Typography>
            ) : (
              <Typography variant='overline'>You are logged out. Please login!</Typography>
            )}
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <LoginButton />
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <LogoutButton />
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default LoginView;
