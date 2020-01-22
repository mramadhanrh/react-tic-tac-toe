import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '../ButtonBase';

import styles from './index.module.css';

const TictacButton = ({ buttonValue, onClick }) => {
  return (
    <ButtonBase className={styles.button} onClick={onClick}>
      <p>{buttonValue}</p>
    </ButtonBase>
  );
};

const buttonValue = {
  X: 'X',
  O: 'O',
  Empty: ''
};

TictacButton.buttonValue = buttonValue;

TictacButton.propTypes = {
  buttonValue: PropTypes.oneOf(Object.values(buttonValue)),
  onClick: PropTypes.func
};

TictacButton.defaultProps = {
  buttonValue: '',
  onClick: () => {}
};

export default TictacButton;
