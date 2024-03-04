import React from 'react';
import RedditFeedCard from './RedditFeedCard';
import ArxivFeedCard from './ArxivFeedCard';
import YoutubeFeedCard from './YoutubeFeedCard';
import OpenWeatherMapFeedCard from './OpenWeatherMapFeedCard';
import FoursquareFeedCard from './FoursquareFeedCard';
import ErrorCard from './ErrorCard';
import './styles/FeedCard.css';

const FeedCard = ({ data }) => {
  const { type, ...cardData } = data;

  // console.log('card data:', cardData);

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
    case "error":
        return <ErrorCard type={type} {...cardData} />;
    default:
      return <p>Unsupported card type: {type}</p>;
  }
};

export default FeedCard;
