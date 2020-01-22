import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const InputBase = ({ className, value, onChange }) => {
  return <input className={`${styles.input} ${className}`} value={value} onChange={onChange} />;
};

InputBase.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

InputBase.defaultProps = {
  className: '',
  value: '',
  onChange: () => {}
};

export default InputBase;
