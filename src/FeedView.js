import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import './styles/FeedView.css';

const FeedView = () => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000'; // Set your default API URL

  const [responseData, setResponseData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const fetchAndLoadFeeds = useCallback(async () => {
    const outerContainer = document.querySelector('.card-container');
    const innerContainer = document.querySelector('.inner-container');
    const outerContainerHeight = outerContainer?.offsetHeight || 0;

    try {
      let response = await fetch(`${apiUrl}/pop`);
      let data = await response.json();

      // If /pop didn't return any data or returned an error, switch to /new/20
      if (!data || !data.type || data.type === "error") {
        response = await fetch(`${apiUrl}/new/50`);
        data = await response.json();
      }

      if (data && data.type) {
        setResponseData((prevData) => (prevData ? [...prevData, data] : [data]));
      }

      const newInnerContainerHeight = innerContainer?.scrollHeight || 0;

      // console.log('Outer Container Height:', outerContainerHeight, '; Inner Container Height:', newInnerContainerHeight);

      // Stop popping if inner container height exceeds outer container height
      if (newInnerContainerHeight > outerContainerHeight) {
        // console.log('Inner container height exceeds outer container height. Stopping.');
        setFetching(false); // Stop fetching more cards
        return;
      }

      // Continue fetching recursively
      fetchAndLoadFeeds();
    } catch (error) {
      console.error('Error fetching feeds:', error.message);
    }
  }, [apiUrl, setFetching]);

  useEffect(() => {
    fetchAndLoadFeeds();
  }, [fetchAndLoadFeeds]);

  const handleScroll = useCallback(() => {
    const container = document.querySelector('.card-container');
  
    if (container) {
      const scrollPosition = container.scrollTop;
      const totalHeight = container.scrollHeight;
      const containerHeight = container.offsetHeight;
      const bufferHeight = 300;
  
      // console.log('Scroll Position:', scrollPosition, '; Total Height:', totalHeight, '; Container Height:', containerHeight);
  
      if (scrollPosition + containerHeight + bufferHeight >= totalHeight && !fetching) {
        // Reached the bottom, trigger fetching more cards
        setFetching(true);
        fetchAndLoadFeeds();
      }
    }
  }, [fetchAndLoadFeeds, fetching, setFetching]);

  useEffect(() => {
    const container = document.querySelector('.card-container');

    if (container) {
      container.addEventListener('scroll', handleScroll);

      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div className="card-container">
      <div className="inner-container">
        {responseData.map((feedData, index) => (
          <div key={index} className="card">
            <Card data={feedData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedView;
