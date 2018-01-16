import axios from 'axios';
import { error } from './../utils/modals';
import {
  REQUEST_PAGES,
  RECEIVE_PAGES,
} from './types';

export const requestPages = () => ({
  type: REQUEST_PAGES,
  payload: { loading: true },
});

export const receivePages = data => ({
  type: RECEIVE_PAGES,
  payload: data,
});


export const fetchPages = () => (dispatch) => {
  dispatch(requestPages());

  return axios.get(
    'http://localhost:8081/pages',
  ).then(
    ({ data }) => dispatch(receivePages(data)),
    err => error(),
  );
};

