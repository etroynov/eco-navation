/**
 * Dependencies
 */

import {
  REQUEST_PAGES,
  RECEIVE_PAGES,

  REQUEST_CREATE_PAGE,
  RECEIVE_CREATE_PAGE,
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
    case REQUEST_PAGES: return { ...state, loading: true };
    case RECEIVE_PAGES: return { ...state, data: [...payload], loading: false };

    case REQUEST_CREATE_PAGE: return { ...state, loading: true };
    case RECEIVE_CREATE_PAGE: return {
      data: [
        ...state.data,
        payload.data.page,
      ],
      loading: false,
    };
    default: return state;
  }
};

export default pages;
