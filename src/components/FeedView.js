// src/components/FeedView.js
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { throttle } from 'lodash';
import Card from './Card';
import { startFetching, stopFetching, appendCard } from '../store/actions';
import './styles/FeedView.css';

const FeedView = () => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  const MAX_CARDS_ON_PAGE = 1000;
  const EXPECTED_CARDS_ON_PAGE = 5;
  
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
        const bufferHeightFactor = 0.5;

        // console.log('Scroll Position:', scrollPosition, '; Total Height:', totalHeight, '; Container Height:', containerHeight);

        const isReachBottom = scrollPosition + containerHeight * (1 + bufferHeightFactor) >= totalHeight;

        console.log("Reach bottom: ", isReachBottom, " Fetching: ", fetching);

        if (isReachBottom) {
          if (!fetching) {
            dispatch(startFetching());
          }
          fetchAndLoadFeeds();
        }
      }
    }, 200),
    [cards, dispatch, startFetching, fetchAndLoadFeeds]
  );

  // remove cards when too many cards
  useEffect(() => {
    if (cards.length > MAX_CARDS_ON_PAGE) {
      console.log("Length of cards >>> ", MAX_CARDS_ON_PAGE, ": ", cards.length);

      // const topCard = document.querySelector('.feed-card');
      // console.log("Top card height: ", topCard.offsetHeight);

      // const container = document.querySelector('.card-container');
      // dispatch(saveScrollPosition(container.scrollTop));
      // console.log("BEFORE Removal Scroll Position: ", container.scrollTop, "; Scroll Height: ", container.scrollHeight);

      // dispatch(stopFetching());
      // dispatch(removeCard(0));

      // dispatch(saveScrollPosition(container.scrollTop));
      // console.log("AFTER Removal Scroll Position: ", container.scrollTop, "; Scroll Height: ", container.scrollHeight);

      // container.scrollTop -= 350;
      // dispatch(saveScrollPosition(container.scrollTop));
      // console.log("AFTER ADJ Scroll Position: ", container.scrollTop, "; Scroll Height: ", container.scrollHeight);
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
          <div key={index} className="card">
            <Card data={feedData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedView;
