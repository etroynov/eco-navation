/*!
 * Vendor
 */

import axios from 'axios';
import { createAction } from 'redux-act';

/*!
 * Utils
 */

import { error } from './../utils/modals';

/*!
 * Expo
 */

/**
 * LIST Course
 */

export const requestCourses: any = createAction('REQUEST_COURSES');
export const receiveCourses: any = createAction('RECEIVE_COURSES');

export const fetchCourses = () => (dispatch) => {
  dispatch(requestCourses());

  return axios.get(
    'http://api.ucavtor.ru/courses',
  ).then(
    ({ data }) => dispatch(receiveCourses(data)),
    err => error(),
  );
};


export const requestGetCourse: any = createAction('REQUEST_GET_COURSE');
export const receiveGetCourse: any = createAction('RECEIVE_GET_COURSE');

export const getCourse = (data) => (dispatch) => {
  dispatch(requestGetCourse());

  return axios.get(
    `http://api.ucavtor.ru/courses/${data}`,
  ).then(
    ({ data }) => dispatch(receiveGetCourse(data)),
    err => error(),
  );
};
