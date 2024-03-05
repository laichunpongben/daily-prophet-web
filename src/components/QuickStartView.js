import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const QuickStartView = () => {
  return (
    <Container maxWidth="sm" spacing={0} sx={{ padding: '0px', margin: '0px' }}>
      <Stack sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        height: '80vh', 
        padding: '0px', 
        margin: '0px' 
      }}>
        <Typography variant="button" paragraph color="textSecondary">
          Welcome to the App!
        </Typography>
        <Typography variant="caption" paragraph color="textSecondary">
          Follow these steps to get started:
        </Typography>
        <Typography variant="caption" color="textSecondary">
          (1) <strong>LOGIN</strong> for a personal profile
        </Typography>
        <Typography variant="caption" color="textSecondary">
          (2) Add subjects you feel interesting in <strong>SETTING</strong>
        </Typography>
        <Typography variant="caption" paragraph color="textSecondary">
          (3) Enjoy reading in <strong>FEED</strong>
        </Typography>
        <Typography variant="caption" color="textSecondary" align="left">
          That's it! You're all set to make the most of your app experience.
        </Typography>
      </Stack>
    </Container>
  );
};

export default QuickStartView;
