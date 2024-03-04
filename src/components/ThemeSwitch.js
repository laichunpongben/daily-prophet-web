// ThemeSwitch.js
import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useColorScheme } from '@mui/material-next/styles';
import './styles/ThemeSwitch.css';

const ThemeSwitch = () => {
  const { mode, setMode } = useColorScheme();

  const handleThemeChange = () => {
    const newMode = (mode === 'light' ? 'dark' : 'light');
    setMode(newMode);
    localStorage.setItem('mode', newMode); 
  };

  return (
    <div className="theme-switch-container">
      <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}> 
        <Typography variant='caption'>
          Enable Dark Theme: 
        </Typography>
        <FormControlLabel control={
          <Switch  
            onChange={() => handleThemeChange()}
            checked={mode === 'dark'}
          />} label={
                <Typography variant='caption'>
                  {mode === 'dark' ? 'Dark' : 'Light'}
                </Typography>} />
      </Stack>
    </div>
  );
};

export default ThemeSwitch;
