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
  requestSettings,
  receiveSettings,
} from '../actions/settingsActions';

/*!
 * Expo
 */

const settingsReducer = createReducer({
  // Get settings list
  [requestSettings]: state => ({ ...state, loading: true }),
  [receiveSettings]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  })
}, initialState);

export default settingsReducer;
