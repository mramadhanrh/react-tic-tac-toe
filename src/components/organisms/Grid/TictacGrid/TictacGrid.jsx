import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TictacButton from '../../../atoms/Buttons/TictacButton';

import gridHelper from '../../../../helpers/gridHelper';

import styles from './index.module.css';

const TictacGrid = ({ row, col, turn, onChange }) => {
  const [gridArray, setGridArrayValue] = useState(gridHelper.getGridInArray(row, col));

  const handleButtonClick = (rowIdx, colIdx) => {
    if (gridArray[rowIdx][colIdx] === 'X' || gridArray[rowIdx][colIdx] === 'O') return;

    setGridArrayValue(state => {
      const cloneState = [...state];
      cloneState[rowIdx][colIdx] = turn;

      return cloneState;
    });
    onChange(gridArray);
  };

  return (
    <div className={styles.container}>
      {gridArray.map((gridRow, gridRowIdx) => {
        return (
          <div>
            {gridRow.map((colValue, gridColIdx) => (
              <TictacButton
                onClick={() => handleButtonClick(gridRowIdx, gridColIdx)}
                buttonValue={colValue}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

TictacGrid.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
  turn: PropTypes.oneOf(['X', 'O']),
  onChange: PropTypes.func
};

TictacGrid.defaultProps = {
  row: 3,
  col: 3,
  turn: 'X',
  onChange: () => {}
};

export default TictacGrid;
