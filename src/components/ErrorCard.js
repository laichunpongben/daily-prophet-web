import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ErrorCard = ({ message }) => {
  return (
    <div className="error-card">
      <Card>
        <CardContent>
          <Box spacing={1} sx={{display: 'flex', justifyContent: 'center'}}>
            <Alert variant="outlined" severity="warning">
              <Typography variant='caption'>
                Loading feeds... If the issue persists, please check the Setting!
              </Typography>
            </Alert>
          </Box>
        </CardContent>
      </Card>
      
    </div>
  );
};

export default ErrorCard;
