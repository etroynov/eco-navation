/**
 * Dependencies
 */

import {
  REQUEST_ORGANIZATIONS,
  RECEIVE_ORGANIZATIONS,
} from './../actions/types';

const initialState = [];

/**
 * Expo
 */

const organizations = (state = initialState, action: IReduxAction) => {
  const { type, payload } = action;
  
  switch (type) {
    case RECEIVE_ORGANIZATIONS: return { ...state };
    case REQUEST_ORGANIZATIONS: return { ...state, payload };
    default: return state;
  }
};

export default organizations;
