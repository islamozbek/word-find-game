import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CommonContext } from '../../context/common';
import SpeechService from '../../services/Speech';

const Computer = ({ setPlay }) => {
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
        setPlay(false);
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

Computer.propTypes = {
  setPlay: PropTypes.func.isRequired,
};

export default Computer;
