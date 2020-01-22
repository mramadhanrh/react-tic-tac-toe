import types from '../types';

const initialState = {
  userName: ''
};

const user = (state = initialState, action) => {
  const { ADD_USER_NAME } = types.user;
  const { type, userName } = action;

  if (type === ADD_USER_NAME)
    return {
      ...state,
      userName
    };

  return state;
};

export default user;
