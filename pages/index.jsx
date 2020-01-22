import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

import AddUserForm from '../src/components/templates/Form/AddUserForm';

import actions from '../src/redux/actions';

const Home = ({ onAddUsername }) => {
  const router = useRouter();

  const handleSubmit = value => {
    onAddUsername(value);
    router.push('/game');
  };

  return (
    <div>
      <AddUserForm onSubmit={handleSubmit} />
    </div>
  );
};

Home.propTypes = {
  onAddUsername: PropTypes.func
};

Home.defaultProps = {
  onAddUsername: () => {}
};

const mapDispatchToProps = dispatch => {
  return {
    onAddUsername: userName => dispatch(actions.user.addUserName(userName))
  };
};

export default connect(null, mapDispatchToProps)(Home);
