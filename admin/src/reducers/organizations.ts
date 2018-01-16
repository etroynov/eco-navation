/**
 * Dependencies
 */

import {
  REQUEST_ORGANIZATIONS,
  RECEIVE_ORGANIZATIONS,
} from './../actions/types';

const initialState = {
  loading: false,
  data: [],
};

/**
 * Expo
 */

const organizations = (state = initialState, action: IReduxAction) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_ORGANIZATIONS: return { ...state, ...payload };
    case RECEIVE_ORGANIZATIONS: return { ...state, loading: false };
    default: return state;
  }
};

export default organizations;
