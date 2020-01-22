import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Winner = ({ user }) => {
  const { userName, winner } = user;
  return (
    <div>
      <h1>{`Hore ${userName} pemenangnya adalah ${winner}`}</h1>
    </div>
  );
};

Winner.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string,
    winner: PropTypes.string
  })
};

Winner.defaultProps = {
  user: {
    userName: '',
    winner: ''
  }
};

const mapStateToProps = state => {
  const { user } = state;

  return {
    user
  };
};

export default connect(mapStateToProps)(Winner);
