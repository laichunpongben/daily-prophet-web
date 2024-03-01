import React from 'react';
import './styles/Card.css';

const FoursquareFeedCard = ({ type, name, address, category, distance, latitude, longitude, open, url }) => {
  const renderKeyBubble = (key) => (
    <div className="key-bubble">
      {key}
    </div>
  );

  return (
    <div className="feed-card">
      <div className="text-container">
        <h3>{name}</h3>
        <p>{renderKeyBubble('Address')} {address}</p>
        <p>{renderKeyBubble('Category')} {category}</p>
        <p>{renderKeyBubble('Distance')} {distance} meters</p>
        <p>{renderKeyBubble('Latitude')} {latitude}</p>
        <p>{renderKeyBubble('Longitude')} {longitude}</p>
        <p>{renderKeyBubble('Open Status')} {open}</p>
        <p>{renderKeyBubble('Type')} {type}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          More Details
        </a>
      </div>
    </div>
  );
};

export default FoursquareFeedCard;
