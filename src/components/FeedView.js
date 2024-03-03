import React, { useEffect, useCallback, useRef, useState, useMemo } from 'react';
import { throttle } from 'lodash';
import Card from './Card';
import { useAuth } from './context/AuthContext';
import './styles/FeedView.css';

const FeedView = () => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
  const { token } = useAuth();

  const MAX_CARDS_ON_PAGE = 1000;
  const EXPECTED_CARDS_ON_PAGE = 5;
  const CARDS_NO_REPEAT = 50;

  const [fetching, setFetching] = useState(true);
  const [cards, setCards] = useState([]);
  const topCardRef = useRef(null);

  const fetchPop = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/pop`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return null;
    }
  }, [apiUrl, token]);

  const fetchAndLoadFeeds = useCallback(async () => {
    try {
      if (!fetching) {
        return;
      }
  
      const data = await fetchPop();
  
      if (data && data.type) {
        // Check if the new card is the same as the previous one
        const isSameCard = cards.length > 0 && cards.slice(-CARDS_NO_REPEAT).some((card) => JSON.stringify(card) === JSON.stringify(data));
  
        if (!isSameCard) {
          setCards((prevCards) => [...prevCards, data]);
        }
  
        setFetching(false);
      }
    } catch (error) {
      console.error('Error fetching feeds:', error.message);
    }
  }, [fetching, fetchPop, cards]);
  

  // append cards when reaching bottom
  const throttledHandleScroll = useMemo(() => {
    return throttle(() => {
      const container = document.querySelector('.card-container');
      if (container) {
        const scrollPosition = container.scrollTop;
        const totalHeight = container.scrollHeight;
        const containerHeight = container.offsetHeight;
        const bufferHeightFactor = 0.2;

        const isReachBottom = scrollPosition + containerHeight * (1 + bufferHeightFactor) >= totalHeight;

        if (isReachBottom) {
          if (!fetching) {
            setFetching(true);
          }
          fetchAndLoadFeeds();
        }
      }
    }, 100);
  }, [fetching, fetchAndLoadFeeds]);

  // remove cards when too many cards
  useEffect(() => {
    if (cards.length > MAX_CARDS_ON_PAGE) {
      // console.log('Length of cards >>> ', MAX_CARDS_ON_PAGE, ': ', cards.length);

      const topCardHeight = topCardRef.current ? topCardRef.current.offsetHeight : 0;
      // console.log('Top card height:', topCardHeight);

      setFetching(false);
      setCards((prevCards) => prevCards.slice(1));

      const container = document.querySelector('.card-container');
      container.scrollTop -= topCardHeight;
    }
  }, [cards]);

  // init page with cards
  useEffect(() => {
    if (cards.length < EXPECTED_CARDS_ON_PAGE) {
      // console.log('Length of cards <<< ', EXPECTED_CARDS_ON_PAGE, ': ', cards.length);
      setFetching(true);
    }
  }, [cards]);

  useEffect(() => {
    if (cards.length === MAX_CARDS_ON_PAGE) {
      // console.log('Length of cards === ', cards.length);
    }
  }, [cards]);

  useEffect(() => {
    if (fetching) {
      fetchAndLoadFeeds();
    }
  }, [fetchAndLoadFeeds, fetching]);

  useEffect(() => {
    const container = document.querySelector('.card-container');

    if (container) {
      container.addEventListener('scroll', throttledHandleScroll);

      return () => {
        container.removeEventListener('scroll', throttledHandleScroll);
      };
    }
  }, [throttledHandleScroll]);

  return (
    <div>
      <div className={`card-container`}>
        <div className={`inner-container`}>
          {cards.map((feedData, index) => (
            <div key={index} className={`card`} ref={index === 0 ? topCardRef : null}>
              <Card data={feedData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default FeedView;
