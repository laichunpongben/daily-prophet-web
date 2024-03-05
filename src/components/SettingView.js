import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ViewSettingCard from './ViewSettingCard';
import PortfolioSettingCard from './PortfolioSettingCard';

const SettingView = () => {
  return (
    <div className="setting-view-container">
      <Container maxWidth="sm" spacing={0} sx={{padding: '0px', margin: '0px'}}>
        <Stack spacing={1} sx={{display: 'flex', justifyContent: 'center'}}>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant='overline'>
              You are what you read. You control your daily feed. 
            </Typography>
          </Box>
          <ViewSettingCard />
          <PortfolioSettingCard />
        </Stack>
      </Container>
    </div>
  );
};

export default SettingView;
