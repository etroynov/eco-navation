/*!
 * Vendor
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './coursesReducer';
import payments from './paymentsReducer';
import auth from './auth';

/*!
 * Expo
 */

export default combineReducers({
  auth,
  courses,
  payments,
  routing: routerReducer,
});
