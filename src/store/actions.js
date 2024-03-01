// src/store/actions.js
export const START_FETCHING = 'START_FETCHING';
export const STOP_FETCHING = 'STOP_FETCHING';

export const startFetching = () => ({ type: START_FETCHING });
export const stopFetching = () => ({ type: STOP_FETCHING });

export const APPEND_CARD = 'APPEND_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';


export const appendCard = (newCard) => ({
  type: APPEND_CARD,
  payload: newCard,
});

export const removeCard = (index) => ({
  type: REMOVE_CARD,
  payload: index,
});