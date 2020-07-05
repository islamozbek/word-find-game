import { useReducer } from 'react';
import Names from '../names.json';

const initialState = {
  names: Names,
  words: [],
  next: 'computer',
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
      default:
        return state;
    }
  };

  return useReducer(actions, initialState);
};

export default CommonReducer;
