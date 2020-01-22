import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const ButtonBase = ({ className, onClick, children }) => {
  return (
    <button type="button" className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonBase.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

ButtonBase.defaultProps = {
  className: '',
  onClick: () => {},
  children: null
};

export default ButtonBase;
