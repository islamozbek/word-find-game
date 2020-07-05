import React, { useContext } from 'react';
import { CommonContext } from '../../context/common';

const GameOver = () => {
  const [state] = useContext(CommonContext);
  return (
    state.words.length > 0
    && (
      <div className="game-over">
        <p>{state.words.join(' -> ')}</p>
      </div>
    )
  );
};

export default GameOver;
