import { useReducer } from 'react';
import Names from '../names.json';

const initialState = {
  names: Names,
  words: [],
  next: null,
};

const CommonReducer = () => {
  const actions = (state, action) => {
    switch (action.type) {
      case 'SET_NEXT':
        return {
          ...state,
          next: action.next,
        };
      case 'SET_WORDS':
        return {
          ...state,
          words: [...state.words, action.word],
        };
      case 'CLEAR_WORDS':
        return {
          ...state,
          words: [],
        };
      default:
        return state;
    }
  };

  return useReducer(actions, initialState);
};

export default CommonReducer;
