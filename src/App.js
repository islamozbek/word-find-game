import React, { useState } from 'react';
import { CommonContextProvider } from './context/common';

import PlayGame from './components/PlayGame';
import Computer from './components/Computer';
import Human from './components/Human';

function App() {
  const [play, setPlay] = useState(false);
  return (
    <CommonContextProvider>
      { !play && <PlayGame setPlay={setPlay} /> }
      {
        play
        && (
          <>
            <Computer />
            <Human />
          </>
        )
      }
    </CommonContextProvider>
  );
}

export default App;
