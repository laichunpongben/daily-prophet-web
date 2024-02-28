import React from 'react';
import './Card.css';

const ErrorCard = ({ type, message }) => (
  <div>
    <p>{message}</p>
  </div>
);

export default ErrorCard;
