/*!
 * Vendor
 */

import axios from 'axios';
import { createAction } from 'redux-act';

/*!
 * Expo
 */

/**
 * LIST Course
 */


export const requestCourses = createAction('REQUEST_COURSES');
export const receiveCourses = createAction('RECEIVE_COURSES');


export const fetchCourses = () => (dispatch) => {
  dispatch(requestCourses());

  return axios.get(
    'http://api.ucavtor.ru/courses',
  ).then(
    ({ data }) => dispatch(receiveCourses(data)),
  );
};