import types from '../types';

const { ADD_USER_NAME, SET_WINNER } = types.user;

const addUserName = userName => ({
  type: ADD_USER_NAME,
  userName
});

const setWinner = winner => ({
  type: SET_WINNER,
  winner
});

export default {
  addUserName,
  setWinner
};
