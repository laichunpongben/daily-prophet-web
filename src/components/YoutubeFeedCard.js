import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useMediaQuery } from 'react-responsive';
import { toTitleCase } from '../Util';
import { Waypoint } from 'react-waypoint';
import './styles/Card.css';

const YoutubeFeedCard = ({ type, id, title, channel, publishTime }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [playing, setPlaying] = useState(false);

  const renderKeyBubble = (key) => (
    <div className="key-bubble">
      {key}
    </div>
  );

  const calculateHeight = (width) => {
    return Math.round((9 / 16) * width);
  };

  const handleVisible = (isVisible) => {
    if (!isVisible) {
      setPlaying(false);
    }
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <div className="feed-card">
      <Waypoint onEnter={() => handleVisible(true)} onLeave={() => handleVisible(false)}>
        <div className="youtube-container">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            playing={playing}
            width={isMobile ? '100%' : '560'}
            height={calculateHeight(isMobile ? (window.innerWidth - 20) : 560)}
            controls
            config={{
              youtube: {
                playerVars: {
                  autoplay: 0,
                },
              },
            }}
            onPlay={handlePlay}
            onPause={handlePause}
          />
        </div>
      </Waypoint>
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
