import React, { useContext, useEffect, useState } from 'react';
import { CommonContext } from '../../context/common';
import SpeechService from '../../services/Speech';

const Computer = () => {
  const [state, dispatch] = useContext(CommonContext);
  const [word, setWord] = useState('');

  useEffect(() => {
    const handleService = async () => {
      const computerWord = await SpeechService(state.names, state.words);
      if (computerWord) {
        setWord(computerWord);
        dispatch({ type: 'SET_WORDS', word: computerWord });
        dispatch({ type: 'SET_NEXT', next: 'human' });
      } else {
        console.log('wrong Answer');
      }
    };
    if (state.next === 'computer') {
      handleService();
    }
  }, [state.next]);

  return (
    <div>
      {word}
    </div>
  );
};

export default Computer;
