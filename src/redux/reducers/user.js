import types from '../types';

const initialState = {
  userName: '',
  winner: ''
};

const user = (state = initialState, action) => {
  const { ADD_USER_NAME, SET_WINNER } = types.user;
  const { type, userName, winner } = action;

  switch (type) {
    case ADD_USER_NAME:
      return {
        ...state,
        userName
      };
    case SET_WINNER:
      return {
        ...state,
        winner
      };
    default:
      return state;
  }
};

export default user;
