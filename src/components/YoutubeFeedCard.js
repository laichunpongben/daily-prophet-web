import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import VisibilitySensor from 'react-visibility-sensor';
import { useMediaQuery } from 'react-responsive';
import { toTitleCase } from '../Util';
import './styles/Card.css';

const YoutubeFeedCard = ({ type, id, title, channel, publishTime }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isPlaying, setPlaying] = useState(false);

  const renderKeyBubble = (key) => (
    <div className="key-bubble">
      {key}
    </div>
  );

  const calculateHeight = (width) => {
    // Calculate height maintaining a 16:9 aspect ratio and rounding to the nearest integer
    return Math.round((9 / 16) * width);
  };

  const handleVisibilityChange = (isVisible) => {
    // Video is not visible, set playing to false to pause
    if (!isVisible) {
      setPlaying(false);
    }
  };

  return (
    <div className="feed-card">
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility={true}>
        <div className="youtube-container">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            playing={isPlaying}
            width={isMobile ? '100%' : '560'}
            height={calculateHeight(isMobile ? (window.innerWidth - 20) : 560)}
            config={{
              youtube: {
                playerVars: {
                  autoplay: 0,
                },
              },
            }}
          />
        </div>
      </VisibilitySensor>
      <div className="text-container">
        <h3>{title}</h3>
        <p>{renderKeyBubble('Channel')} {channel}</p>
        <p>{renderKeyBubble('Publish Time')} {publishTime}</p>
        <p>{renderKeyBubble('Source')} {toTitleCase(type)}</p>
      </div>
    </div>
  );
};

export default YoutubeFeedCard;
