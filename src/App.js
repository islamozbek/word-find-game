import React, { useState } from 'react';
import { CommonContextProvider } from './context/common';

import PlayGame from './components/PlayGame';
import GameOver from './components/GameOver';
import Computer from './components/Computer';
import Human from './components/Human';

import './App.scss';

function App() {
  const [play, setPlay] = useState(false);
  return (
    <CommonContextProvider>
      <div className="game-container">
        {!play
          ? (
            <>
              <PlayGame setPlay={setPlay} />
              <GameOver />
            </>
          )
          : (
            <>
              <Computer setPlay={setPlay} />
              <Human setPlay={setPlay} />
            </>
          )}
      </div>
    </CommonContextProvider>
  );
}

export default App;
