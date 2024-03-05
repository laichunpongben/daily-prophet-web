import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ErrorCard = ({ message }) => {
  return (
    <div className="error-card">
      <Card>
        <CardContent>
          <Box spacing={1} sx={{display: 'flex', justifyContent: 'center'}}>
            <MuiAlert
              elevation={6}
              variant="outlined"
              severity="warning"
              sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
              <Typography variant='caption'>
                Loading feeds... Please wait! <br/> If the issue persists, please check the Setting!
              </Typography>
            </MuiAlert>
          </Box>
        </CardContent>
      </Card>
      
    </div>
  );
};

export default ErrorCard;
