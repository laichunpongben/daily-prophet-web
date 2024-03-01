// src/components/FeedView.js
import React, { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { throttle } from 'lodash';
import Card from './Card';
import { startFetching, stopFetching, appendCard, removeCard } from '../store/actions';
import './styles/FeedView.css';

const FeedView = () => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  const MAX_CARDS_ON_PAGE = 1000;
  const EXPECTED_CARDS_ON_PAGE = 5;

  const topCardRef = useRef(null);
  
  const dispatch = useDispatch();
  const fetching = useSelector((state) => state.fetching);
  const cards = useSelector((state) => state.cards);

  const fetchPop = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/pop`);
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
  }, [apiUrl]);

  const fetchAndLoadFeeds = useCallback(async () => {
    try {
      if (!fetching) {
        return;
      }

      const data = await fetchPop();

      if (data && data.type) {
        dispatch(appendCard(data));
        dispatch(stopFetching());
      }
    } catch (error) {
      console.error('Error fetching feeds:', error.message);
    }
  }, [dispatch, fetchPop, fetching]);

  // append cards when reaching bottom
  const throttledHandleScroll = useCallback(
    throttle(() => {
      const container = document.querySelector('.card-container');
      if (container) {
        const scrollPosition = container.scrollTop;
        const totalHeight = container.scrollHeight;
        const containerHeight = container.offsetHeight;
        const bufferHeightFactor = 0.2;

        const isReachBottom = scrollPosition + containerHeight * (1 + bufferHeightFactor) >= totalHeight;

        console.log("Reach bottom: ", isReachBottom, " Fetching: ", fetching);

        if (isReachBottom) {
          if (!fetching) {
            dispatch(startFetching());
          }
          fetchAndLoadFeeds();
        }
      }
    }, 100),
    [cards, dispatch, fetchAndLoadFeeds]
  );

  // remove cards when too many cards
  useEffect(() => {
    if (cards.length > MAX_CARDS_ON_PAGE) {
      console.log("Length of cards >>> ", MAX_CARDS_ON_PAGE, ": ", cards.length);

      const topCardHeight = topCardRef.current ? topCardRef.current.offsetHeight : 0;
      console.log('Top card height:', topCardHeight);

      dispatch(stopFetching());
      dispatch(removeCard(0));

      const container = document.querySelector('.card-container');
      container.scrollTop -= topCardHeight;
    }
  }, [cards, dispatch]);

  // init page with cards
  useEffect(() => {
    if (cards.length < EXPECTED_CARDS_ON_PAGE) {
      console.log("Length of cards <<< ", EXPECTED_CARDS_ON_PAGE, ": ", cards.length);
      dispatch(startFetching());
    }
  }, [cards, dispatch]);

  useEffect(() => {
    if (cards.length === MAX_CARDS_ON_PAGE) {
      console.log("Length of cards === ", cards.length);
    }
  }, [cards]);

  useEffect(() => {
    console.log("Fetching: ", fetching);
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
    <div className="card-container">
      <div className="inner-container">
        {cards.map((feedData, index) => (
          <div key={index} className="card" ref={index === 0 ? topCardRef : null}>
            <Card data={feedData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedView;
