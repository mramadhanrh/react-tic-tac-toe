import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import TictacGrid from '../src/components/organisms/Grid/TictacGrid';
import gridHelper from '../src/helpers/gridHelper';
import actions from '../src/redux/actions';

const Game = ({ onSetWinner }) => {
  const router = useRouter();
  const [turn, setTurn] = useState('X');

  const handleTurnChange = gridArray => {
    if (gridHelper.checkForWin(gridArray)) {
      onSetWinner(turn);
      router.push('/winner');
      return;
    }

    setTurn(state => {
      if (state === 'X') return 'O';
      return 'X';
    });
  };

  return (
    <div>
      <h1>{`Saat ini gilirannya ${turn}`}</h1>
      <TictacGrid row={3} col={3} turn={turn} onChange={handleTurnChange} />
    </div>
  );
};

Game.propTypes = {
  onSetWinner: PropTypes.func
};

Game.defaultProps = {
  onSetWinner: () => {}
};

const mapDispatchToProps = dispatch => {
  return {
    onSetWinner: winner => dispatch(actions.user.setWinner(winner))
  };
};

export default connect(null, mapDispatchToProps)(Game);
