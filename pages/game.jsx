import React, { useState } from 'react';

import TictacGrid from '../src/components/organisms/Grid/TictacGrid';
import gridHelper from '../src/helpers/gridHelper';

const Game = () => {
  const [turn, setTurn] = useState('X');

  const handleTurnChange = gridArray => {
    setTurn(state => {
      if (state === 'X') return 'O';
      return 'X';
    });

    gridHelper.checkForWin(gridArray);
  };

  return (
    <div>
      <TictacGrid row={3} col={3} turn={turn} onChange={handleTurnChange} />
    </div>
  );
};

export default Game;
