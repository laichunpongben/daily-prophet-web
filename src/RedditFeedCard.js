import React from 'react';
import './styles/Card.css';

const RedditFeedCard = ({ type, community, title, author, ups, url }) => {
  const renderKeyBubble = (key) => (
    <div className="key-bubble">
      {key}
    </div>
  );

  return (
    <div className="feed-card">
      <div className="text-container">
        <h3>{title}</h3>
        <p>{renderKeyBubble('Community')} {community}</p>
        <p>{renderKeyBubble('Author')} {author}</p>
        <p>{renderKeyBubble('Ups')} {ups}</p>
        <p>{renderKeyBubble('Type')} {type}</p>
      </div>
      <div className="image-container">
        <img src={url} alt={title} style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
};

export default RedditFeedCard;
