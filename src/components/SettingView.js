// SettingView.js
import React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ViewSettingCard from './ViewSettingCard';
import PortfolioSettingCard from './PortfolioSettingCard';

const SettingView = () => {
  return (
    <div className="setting-view-container">
      <Container maxWidth="sm" spacing={0} sx={{padding: '0px', margin: '0px'}}>
        <Stack spacing={1} sx={{display: 'flex', justifyContent: 'center'}}>
          <ViewSettingCard />
          <PortfolioSettingCard />
        </Stack>
      </Container>
    </div>
  );
};

export default SettingView;
