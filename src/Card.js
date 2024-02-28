import React from 'react';
import './Card.css';
import RedditFeedCard from './RedditFeedCard';
import ArxivFeedCard from './ArxivFeedCard';
import YoutubeFeedCard from './YoutubeFeedCard';
import OpenWeatherMapFeedCard from './OpenWeatherMapFeedCard';
import FoursquareFeedCard from './FoursquareFeedCard';
import PortfolioCard from './PortfolioCard';
import ErrorCard from './ErrorCard';

const Card = ({ data }) => {
  const { type, ...cardData } = data;

  console.log('card data:', cardData);

  if (!type) {
    return null; // Do not render anything if type is not present
  }

  switch (type) {
    case "reddit":
      return <RedditFeedCard type={type} {...cardData} />;
    case "arxiv":
      return <ArxivFeedCard type={type} {...cardData} />;
    case "youtube":
      return <YoutubeFeedCard type={type} {...cardData} />;
    case "openweathermap":
      return <OpenWeatherMapFeedCard type={type} {...cardData} />;
    case "foursquare":
      return <FoursquareFeedCard type={type} {...cardData} />;
    case "portfolio":
      return <PortfolioCard type={type} {...cardData} />;
    case "error":
        return <ErrorCard type={type} {...cardData} />;
    default:
      return <p>Unsupported card type: {type}</p>;
  }
};

export default Card;
