// PlayVideoOffScreenSwitch.js
import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useView } from './context/ViewContext';

const PlayVideoOffScreenSwitch = () => {
  const { playVideoOffScreen, setPlayVideoOffScreen } = useView(); // Adjust the context and function names

  const handlePlayVideoOffScreenChange = () => {
    const newPlayVideoOffScreen = !playVideoOffScreen;
    setPlayVideoOffScreen(newPlayVideoOffScreen);
    localStorage.setItem('playVideoOffScreen', newPlayVideoOffScreen.toString()); 
  };

  return (
    <div className="play-video-off-screen-switch-container">
      <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
        <Typography variant='caption'>
          When Video is off screen:
        </Typography>
        <FormControlLabel
          control={
            <Switch
              onChange={() => handlePlayVideoOffScreenChange()}
              checked={playVideoOffScreen}
            />
          }
          label={
            <Typography variant='caption'>
              {playVideoOffScreen ? 'Continue playing' : 'Pause video'}
            </Typography>
          }
        />
      </Stack>
    </div>
  );
};

export default PlayVideoOffScreenSwitch;
