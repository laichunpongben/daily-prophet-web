// SettingView.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ViewSettingCard from './ViewSettingCard';
import PortfolioSettingCard from './PortfolioSettingCard';

const SettingView = () => {
  return (
    <div className="setting-view-container">
      <Helmet>
        <title>Customize Your Preferences - Daily Prophet</title>
        <meta name="description" content="Customize your preferences and view settings on Daily Prophet. Adjust your profile details, choose subjects of interest, and configure portfolio settings in the app's user-friendly interface." />
      </Helmet>
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
