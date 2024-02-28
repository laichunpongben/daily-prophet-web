import React from 'react';
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive';
import './Card.css';

const YoutubeFeedCard = ({ type, id, title, channel, description, publishTime }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const renderKeyBubble = (key) => (
    <div className="key-bubble">
      {key}
    </div>
  );

  const opts = {
    height: isMobile ? '200' : '315',
    width: isMobile ? '100%' : '560',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="feed-card">
      <div className="youtube-container">
        <YouTube videoId={id} opts={opts} />
      </div>
      <div className="text-container">
        <h3>{title}</h3>
        <p>{renderKeyBubble('Channel')} {channel}</p>
        <p>{renderKeyBubble('Description')} {description}</p>
        <p>{renderKeyBubble('Publish Time')} {publishTime}</p>
        <p>{renderKeyBubble('Type')} {type}</p>
      </div>
    </div>
  );
};

export default YoutubeFeedCard;