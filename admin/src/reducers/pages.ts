/**
 * Dependencies
 */

import {
  REQUEST_PAGES,
  RECEIVE_PAGES,
} from './../actions/types';

const initialState = {
  loading: false,
  data: [],
};

/**
 * Expo
 */

const pages = (state = initialState, action: IReduxAction) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_PAGES: return { ...state, ...payload };
    case RECEIVE_PAGES: return { ...state, loading: false };
    default: return state;
  }
};

export default pages;