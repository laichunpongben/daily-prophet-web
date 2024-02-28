import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake, faWind } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const getWeatherIcon = (description) => {
  // Map weather descriptions to corresponding icons
  const iconMapping = {
    'clear sky': faSun,
    'broken clouds': faCloud,
    'few clouds': faCloud,
    'overcast clouds': faCloud,
    'scattered clouds': faCloud,
    'light rain': faCloudRain,
    'moderate rain': faCloudRain,
    'heavy intensity rain': faCloudRain,
    'snow': faSnowflake,
    'light snow': faSnowflake,
    'rain and snow': faSnowflake,
    'windy': faWind,  // Not found
  };

  // Default to a generic icon if the description is not in the mapping
  return iconMapping[description] || faSun;
};

const OpenWeatherMapFeedCard = ({ type, city, temperature, feels_like, description }) => {
  const renderKeyBubble = (key) => (
    <div className="key-bubble">
      {key}
    </div>
  );

  return (
    <div className="feed-card">
      <div className="text-container">
        <h3>{`Current Weather in ${city}`}</h3>
        <p className="weather-icon-container">
          <FontAwesomeIcon icon={getWeatherIcon(description)} />
        </p>
        <p>{renderKeyBubble('Temperature')} {`${temperature}°C`}</p>
        <p>{renderKeyBubble('Feels Like')} {`${feels_like}°C`}</p>
        <p>{renderKeyBubble('Description')} {description}</p>
        <p>{renderKeyBubble('Type')} {type}</p>
      </div>
    </div>
  );
};

export default OpenWeatherMapFeedCard;
