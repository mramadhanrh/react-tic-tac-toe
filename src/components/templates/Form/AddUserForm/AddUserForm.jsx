import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputBase from '../../../atoms/Inputs/InputBase';

import styles from './index.module.css';
import ButtonBase from '../../../atoms/Buttons/ButtonBase/ButtonBase';

const AddUserForm = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');

  const handleChange = e => {
    const {
      target: { value }
    } = e;

    setUserName(value);
  };

  const handleSubmit = () => {
    onSubmit(userName);
  };

  return (
    <div className={styles.form}>
      <p>Hi What&apos;s your name</p>
      <InputBase onChange={handleChange} value={userName} />
      <ButtonBase className={styles.form__button} onClick={handleSubmit}>
        <p>Submit</p>
      </ButtonBase>
    </div>
  );
};

AddUserForm.propTypes = {
  onSubmit: PropTypes.func
};

AddUserForm.defaultProps = {
  onSubmit: () => {}
};

export default AddUserForm;
