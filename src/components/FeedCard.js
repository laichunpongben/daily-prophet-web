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
  const { source, ...cardData } = data;

  if (!source) {
    return null; // Do not render anything if source is not present
  }

  switch (source) {
    case "reddit":
      return <RedditFeedCard source={source} {...cardData} />;
    case "arxiv":
      return <ArxivFeedCard source={source} {...cardData} />;
    case "youtube":
      return <YoutubeFeedCard source={source} {...cardData} />;
    case "openweathermap":
      return <OpenWeatherMapFeedCard source={source} {...cardData} />;
    case "lihkg":
      return <LihkgFeedCard source={source} {...cardData} />;
    case "foursquare":
      return <FoursquareFeedCard source={source} {...cardData} />;
    case "error":
        return <ErrorCard source={source} {...cardData} />;
    default:
      return <DefaultCard source={source} />;
  }
};

export default FeedCard;
