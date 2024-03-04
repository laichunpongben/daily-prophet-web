// SaveButton.js
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material-next/styles';

const SaveButton = ({ onClick }) => {
  const { mode } = useColorScheme();

  const handleSave = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  const shadowColor = (mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)');

  return (
    <div className="save-button">
      <ButtonBase 
        onClick={handleSave} 
        sx={{border: '1px solid', borderRadius: '5px', padding: '0px 20px', boxShadow: `1px 1px 1px ${shadowColor}`}}>
        <SaveIcon />
        <Typography variant='overline'>
          Save
        </Typography>
      </ButtonBase>
    </div>
  );
};

export default SaveButton;
