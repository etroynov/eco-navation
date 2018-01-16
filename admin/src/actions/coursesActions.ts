import axios from 'axios';

import { error } from './../utils/modals';
import {
  REQUEST_COURSES,
  RECEIVE_COURSES,
} from './types';

export const requestCourses = () => ({
  type: REQUEST_COURSES,
  payload: { loading: true },
});

export const receiveCourses = data => ({
  type: RECEIVE_COURSES,
  payload: {
    data,
    loading: false,
  },
});


export const fetchPages = () => (dispatch) => {
  dispatch(requestCourses());

  return axios.get(
    'http://localhost:8081/courses',
  ).then(
    ({ data }) => dispatch(receiveCourses(data)),
    err => error(),
  );
};

