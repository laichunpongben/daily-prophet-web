// AddRowButton.js
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material-next/styles';

const AddRowButton = ({ onClick }) => {
  const { mode } = useColorScheme();

  const handleAddRow = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  const shadowColor = (mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)');

  return (
    <div className="add-row-button">
      <ButtonBase 
        onClick={handleAddRow} 
        sx={{border: '1px solid', borderRadius: '5px', padding: '0px 10px', boxShadow: `1px 1px 1px ${shadowColor}`}}>
        <AddIcon />
        <Typography variant='overline'>
          Add Row
        </Typography>
      </ButtonBase>
    </div>
  );
};

export default AddRowButton;
