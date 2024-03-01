import React from 'react';
import { toTitleCase } from '../Util';
import './styles/Card.css';

const ArxivFeedCard = ({ type, category, id, title, summary, author, updated, url }) => {
  const renderKeyBubble = (key) => (
    <div className="key-bubble">
      {key}
    </div>
  );

  return (
    <div className="feed-card">
      <div className="text-container">
        <h3>{title}</h3>
        <p>{renderKeyBubble('Category')} {category}</p>
        <p>{renderKeyBubble('ID')} {id}</p>
        <p>{renderKeyBubble('Summary')} {summary}</p>
        <p>{renderKeyBubble('Author')} {author}</p>
        <p>{renderKeyBubble('Updated Time')} {updated}</p>
        <p>{renderKeyBubble('Source')} {toTitleCase(type)}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read More...
        </a>
      </div>
    </div>
  );
};

export default ArxivFeedCard;
