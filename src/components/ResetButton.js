// ResetButton.js
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material-next/styles';

const ResetButton = ({ onClick }) => {
  const { mode } = useColorScheme();

  const handleReset = () => {
    if (onClick && typeof onClick === 'function') {
      onClick(); 
    }
  };

  const shadowColor = (mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)');

  return (
    <div className="reset-button">
      <ButtonBase 
        onClick={handleReset} 
        sx={{border: '1px solid', borderRadius: '5px', padding: '0px 20px', boxShadow: `1px 1px 1px ${shadowColor}`}}>
        <SettingsBackupRestoreIcon />
        <Typography variant='overline'>
          Reset
        </Typography>
      </ButtonBase>
    </div>
  );
};

export default ResetButton;
