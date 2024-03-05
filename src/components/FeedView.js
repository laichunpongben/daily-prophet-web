// FeedView.js
import React, { useEffect, useCallback, useRef, useState, useMemo } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { throttle } from 'lodash';
import FeedCard from './FeedCard';
import { useAuth } from './context/AuthContext';

const FeedView = () => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
  const { token } = useAuth();

  const MAX_CARDS_ON_PAGE = 1000;
  const EXPECTED_CARDS_ON_PAGE = 10;
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
      const bufferHeight = 350;
      const isReachBottom = (window.innerHeight + window.scrollY) + bufferHeight >= document.body.offsetHeight;

      if (isReachBottom) {
        if (!fetching) {
          setFetching(true);
        }
        fetchAndLoadFeeds();
      }
    }, 100);
  }, [fetching, fetchAndLoadFeeds]);

  // remove cards when too many cards
  useEffect(() => {
    if (cards.length > MAX_CARDS_ON_PAGE) {
      // console.log('Length of cards >>> ', MAX_CARDS_ON_PAGE, ': ', cards.length);

      setFetching(false);
      setCards((prevCards) => prevCards.slice(-EXPECTED_CARDS_ON_PAGE));
    }
  }, [cards]);

  // init page with cards
  // eslint-disable-next-line
  useEffect(() => {
    if (cards.length < EXPECTED_CARDS_ON_PAGE) {
      // console.log('Length of cards <<< ', EXPECTED_CARDS_ON_PAGE, ': ', cards.length);
      setFetching(true);
    }
  }); // always checking

  useEffect(() => {
    if (cards.length === MAX_CARDS_ON_PAGE) {
      // console.log('Length of cards === ', cards.length);
    }
  }, [cards]);

  // eslint-disable-next-line
  useEffect(() => {
    if (cards.length > 1 && cards[0]?.type === "error") {
      setCards((prevCards) => prevCards.slice(1));
    }
  }); // always checking

  useEffect(() => {
    if (fetching) {
      fetchAndLoadFeeds();
    }
  }, [fetchAndLoadFeeds, fetching]);

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [throttledHandleScroll]);

  return (
    <div className="feed-view-container">
      <div className="feed-card-container">
        <Container maxWidth="sm" spacing={0} sx={{ padding: 0, margin: 0 }}>
          <Stack spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            {cards.map((feedData, index) => (
              <div key={index} className="feed-card" ref={index === 0 ? topCardRef : null}>
                <FeedCard data={feedData} />
              </div>
            ))}
          </Stack>
        </Container>
      </div>
    </div>
  );

};

export default FeedView;
