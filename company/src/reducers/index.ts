/**
 * Dependencies
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import organization from './organization';
import courses from './courses';
import auth from './auth';

/**
 * Expo
 */

export default combineReducers({
  routing: routerReducer,
  organization,
  courses,
  auth,
});
