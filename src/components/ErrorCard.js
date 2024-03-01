import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css';

const ErrorCard = ({ message }) => (
  <div className="error-card">
    <div className="error-header">
      <span>Error</span>
    </div>
    <div className="error-content">
      <p>{message}</p>
    </div>
  </div>
);

ErrorCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorCard;