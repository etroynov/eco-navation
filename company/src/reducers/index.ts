/**
 * Dependencies
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import auth from './auth';

/**
 * Expo
 */

export default combineReducers({
  auth,
  courses,
  routing: routerReducer,
});
