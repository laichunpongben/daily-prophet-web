import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ThemeSettingCard from './ThemeSettingCard';
import PortfolioSettingCard from './PortfolioSettingCard';
import './styles/SettingView.css';

const SettingView = () => {
  return (
    <div className="setting-container">
      <Container maxWidth="sm">
        <Stack spacing={1} sx={{display: 'flex', justifyContent: 'center'}}>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant='overline'>
              You are what you read. You control your daily feed. 
            </Typography>
          </Box>
          <ThemeSettingCard />
          <PortfolioSettingCard />
        </Stack>
      </Container>
    </div>
  );
};

export default SettingView;
