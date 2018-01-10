/**
 * Dependencies
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import organizations from './organizations';

/**
 * Expo
 */

export default combineReducers({
  courses,
  organizations,
  routing: routerReducer,
});
