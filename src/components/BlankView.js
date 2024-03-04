// BlankView.js
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const BlankView = () => {
  return (
    <div className="blank-view-container">
      <Container maxWidth="sm" spacing={0} sx={{padding: '0px', margin: '0px'}}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
        </Box>
      </Container>
    </div>
  );
};

export default BlankView;
