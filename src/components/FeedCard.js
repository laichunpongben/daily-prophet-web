import React from 'react';
import RedditFeedCard from './RedditFeedCard';
import ArxivFeedCard from './ArxivFeedCard';
import YoutubeFeedCard from './YoutubeFeedCard';
import OpenWeatherMapFeedCard from './OpenWeatherMapFeedCard';
import LihkgFeedCard from './LihkgFeedCard';
import FoursquareFeedCard from './FoursquareFeedCard';
import ErrorCard from './ErrorCard';
import DefaultCard from './DefaultCard';
import './styles/FeedCard.css';

const FeedCard = ({ data }) => {
  const { type, ...cardData } = data;

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
    case "lihkg":
      return <LihkgFeedCard type={type} {...cardData} />;
    case "foursquare":
      return <FoursquareFeedCard type={type} {...cardData} />;
    case "error":
        return <ErrorCard type={type} {...cardData} />;
    default:
      return <DefaultCard type={type} />;
  }
};

export default FeedCard;
