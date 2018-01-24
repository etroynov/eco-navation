/*!
 * Vendor
 */

import { createReducer } from 'redux-act';

/*!
 * Init state
 */

const initialState = {
  loading: false,
  data: [],
};

/*!
 * Actions
 */

import {
  requestPages,
  receivePages,
} from '../actions/pagesActions';

/*!
 * Expo
 */

const pagesReducer = createReducer({
  // Get pages list
  [requestPages]: state => ({ ...state, loading: true }),
  [receivePages]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),
}, initialState);

export default pagesReducer;
