// AboutView.js
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const AboutView = () => {
  return (
    <div className="about-view-container">
      <Container maxWidth="sm" spacing={0} sx={{ padding: '0px', margin: '0px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <Typography variant="overline" align="center" paragraph>
            Created by Ben Lai ©2024
          </Typography>
          {/* Add more information about your app here */}
        </Box>
      </Container>
    </div>
  );
};

export default AboutView;
