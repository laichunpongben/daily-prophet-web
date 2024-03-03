import React from 'react';
import PropTypes from 'prop-types';
// import { useTheme } from './context/ThemeContext';
import './styles/Card.css';

const ErrorCard = ({ message }) => {
  // const { theme } = useTheme(); 

  return (
    <div className={`error-card`}>
      <div className={`error-header`}>
        <span>Loading...</span>
      </div>
      <div className={`error-content`}>
        <p>{message}</p>
      </div>
    </div>
  );
};

ErrorCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorCard;
