/**
 * Dependencies
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import pages from './pages';
import organizations from './organizations';

/**
 * Expo
 */

export default combineReducers({
  pages,
  courses,
  organizations,
  routing: routerReducer,
});
