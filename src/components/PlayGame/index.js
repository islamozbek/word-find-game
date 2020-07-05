import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CommonContext } from '../../context/common';

const PlayGame = ({ setPlay }) => {
  const [, dispatch] = useContext(CommonContext);
  const handlePlayGame = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      dispatch({ type: 'SET_NEXT', next: 'computer' });
      dispatch({ type: 'CLEAR_WORDS' });
      setPlay(true);
    } catch (err) {
      alert('You have to allow your microphone to play!');
    }
  };
  return (
    <button type="button" onClick={handlePlayGame}>Play Game</button>
  );
};

PlayGame.propTypes = {
  setPlay: PropTypes.func.isRequired,
};

export default PlayGame;
