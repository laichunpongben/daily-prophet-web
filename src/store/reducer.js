// src/store/reducer.js
import { START_FETCHING, STOP_FETCHING, APPEND_CARD, REMOVE_CARD, SAVE_SCROLL_POSITION } from './actions';

const initialState = {
  fetching: true,
  cards: [],
  scrollPosition: 0,
};

// immutability helpers
// function insertItemImHelper(array, action) {
//   let newArray = array.slice()
//   newArray.splice(action.index, 0, action.item)
//   return newArray
// }

function removeItemSplice(array, action) {
  let newArray = array.slice()
  newArray.splice(action.index, 1)
  return newArray
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      console.log('Reducer: START_FETCHING');
      return { ...state, fetching: true };
    case STOP_FETCHING:
      console.log('Reducer: STOP_FETCHING');
      return { ...state, fetching: false };
    case APPEND_CARD:
      console.log('Reducer: APPEND_CARD');
      return {
        ...state,
        cards: [
          ...state.cards,
          action.payload,
        ]
      };
    case REMOVE_CARD:
      console.log('Reducer: REMOVE_CARD');
      return {
        ...state,
        cards: removeItemSplice(state.cards, action.payload)
      };
    case SAVE_SCROLL_POSITION:
      console.log('Reducer: SAVE_SCROLL_POSITION');
      return { ...state, scrollPosition: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
