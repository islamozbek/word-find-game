import React, { useEffect, useContext, useState } from 'react';
import { CommonContext } from '../../context/common';
import RecognitionService from '../../services/Recognition';
import { isCorrectWord } from '../../lib/util';

const Human = () => {
  const [state, dispatch] = useContext(CommonContext);
  const [seconds, setSeconds] = useState(8);
  useEffect(() => {
    const handleService = async () => {
      const humanWord = await RecognitionService();
      console.log(humanWord);
      const word = humanWord.split(' ').reverse()[0];
      const computerWord = state.words[state.words.length - 1];
      const correct = state.names.includes(word) && isCorrectWord(computerWord, word);
      if (correct) {
        dispatch({ type: 'SET_WORDS', word });
        dispatch({ type: 'SET_NEXT', next: 'computer' });
        setSeconds(8);
      } else {
        console.log(word);
      }
    };

    if (state.next === 'human') {
      handleService();
    }
  }, [state.next]);

  useEffect(() => {
    let interval = null;
    if (seconds === 0) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        const newSeconds = seconds - 1;
        setSeconds(newSeconds);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      {seconds}
    </div>
  );
};

export default Human;
