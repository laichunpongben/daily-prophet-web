import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material-next/LinearProgress';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// import './styles/ErrorCard.css';

const ErrorCard = ({ message }) => {
  // console.log(message);
  return (
    <div className="error-card">
      <Card>
        <CardContent>
          <Stack spacing={1} sx={{display: 'flex', justifyContent: 'center'}}>
            <Alert variant="outlined" severity="warning">
              <Typography variant='caption'>
                Loading feeds... If the issue persists, please check the Setting!
              </Typography>
            </Alert>
            <Box sx={{'min-width': '500px'}}>
              <LinearProgress />
            </Box>
          </Stack>
        </CardContent>
      </Card>
      
    </div>
  );
};

export default ErrorCard;
