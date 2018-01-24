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
  requestCourses,
  receiveCourses,
} from '../actions/coursesActions';

/*!
 * Expo
 */

const coursesReducer = createReducer({
  // List course
  [requestCourses]: state => ({ ...state, loading: true }),
  [receiveCourses]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),
}, initialState);

export default coursesReducer;
