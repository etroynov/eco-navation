/*!
 * Vendor
 */

import { combineReducers } from 'redux';

/*!
 * Reducers
 */

import pages from './pagesReducer';
import posts from './postsReducer';
import courses from './coursesReducer';
import settings from './settingsReducer';
import sections from './sectionsReducer';

/*!
 * Expo
 */

export default combineReducers({
  pages,
  posts,
  courses,
  sections,
  settings,
});
