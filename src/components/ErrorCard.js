import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

import './styles/Card.css';

const ErrorCard = ({ message }) => {
  return (
    <div className={`error-card`}>
      <Box sx={{ display: 'flex' }}>
        <LinearProgress />
      </Box>
    </div>
  );
};

export default ErrorCard;
