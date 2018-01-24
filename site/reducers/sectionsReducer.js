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
  requestSections,
  receiveSections,
} from '../actions/sectionsActions';

/*!
 * Expo
 */

const sectionsReducer = createReducer({
  // List section
  [requestSections]: state => ({ ...state, loading: true }),
  [receiveSections]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),
}, initialState);

export default sectionsReducer;
