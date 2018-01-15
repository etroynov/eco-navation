import { SET_CURRENT_USER } from './../actions/types';
import { isEmpty } from 'lodash';

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = initialState, action: any = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER: return {
      isAuthenticated: !isEmpty(payload),
      user: payload,
    };

    default: return state;
  }
};

export default authReducer;
