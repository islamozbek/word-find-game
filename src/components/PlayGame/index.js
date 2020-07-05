import React from 'react';
import PropTypes from 'prop-types';

const PlayGame = ({ setPlay }) => {
  const handlePlayGame = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setPlay(true);
    } catch (err) {
      alert('must');
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
