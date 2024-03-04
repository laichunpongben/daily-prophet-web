// LoginView.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth } from './context/AuthContext'; 

const LoginView = () => {
  const { userId, userName } = useAuth();

  return (
    <div className="login-view-container">
      <Container maxWidth="sm" spacing={0} sx={{padding: '0px', margin: '0px'}}>
        <Stack spacing={2} sx={{display: 'flex', justifyContent: 'center', minHeight: '80vh'}}>   {/* center vertically in screen */}
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            {userName ? (
              <Typography variant='overline'>Welcome back, {userName}!</Typography>
            ) : (
              <Typography variant='overline'>You are logged out. Please login!</Typography>
            )}
          </Box>
          { userId === null ? (
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <LoginButton />
            </Box> ) : (
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <LogoutButton />
            </Box>
          )}
        </Stack>
      </Container>
    </div>
  );
};

export default LoginView;
