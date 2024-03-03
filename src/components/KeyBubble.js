import React from 'react';
import Chip from '@mui/material-next/Chip';
import './styles/KeyBubble.css';

const KeyBubble = ({ label }) => {
  return (
    <div className="key-bubble">
      <Chip label={label} variant="elevated" small="small" color="secondary" />
    </div>
  );
};

export default KeyBubble;
