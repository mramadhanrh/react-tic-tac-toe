import types from '../types';

const { ADD_USER_NAME } = types.user;

const addUserName = userName => ({
  type: ADD_USER_NAME,
  userName
});

export default {
  addUserName
};
