import React from 'react';
import { toTitleCase } from './Util';
import './styles/Card.css';

const RedditFeedCard = ({ type, community, title, author, ups, num_comments, created_utc, url }) => {
  const renderKeyBubble = (key) => (
    <div className="key-bubble">
      {key}
    </div>
  );

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'UTC',
    });
    return formatter.format(date);
  };

  const isImageURL = (url) => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif']; 
    const urlExtension = url.split('.').pop().toLowerCase();
  
    return imageExtensions.includes(urlExtension);
  };
  

  return (
    <div className="feed-card">
      <div className="text-container">
        <h3>{title}</h3>
        <p>{renderKeyBubble('Community')} {community}</p>
        <p>{renderKeyBubble('Author')} {author}</p>
        <p>{renderKeyBubble('Ups')} {ups}</p>
        <p>{renderKeyBubble('Num comments')} {num_comments}</p>
        <p>{renderKeyBubble('Submitted Time')} {formatDate(created_utc)} UTC</p>
        <p>{renderKeyBubble('Source')} {toTitleCase(type)}</p>
      </div>
      <div className="image-container">
        {isImageURL(url) ? (
          <img src={url} alt={title} style={{ maxWidth: '100%' }} />
        ) : (
          <>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Read More...
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default RedditFeedCard;
