/**
 * Dependencies
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './coursesReducer';
import auth from './auth';

/**
 * Expo
 */

export default combineReducers({
  auth,
  courses,
  routing: routerReducer,
});
