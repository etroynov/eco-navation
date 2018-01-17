import axios from 'axios';
import { error } from './../utils/modals';
import {
  REQUEST_PAGES,
  RECEIVE_PAGES,
  REQUEST_CREATE_PAGE,
  RECEIVE_CREATE_PAGE,
  REQUEST_UPDATE_PAGE,
  RECEIVE_UPDATE_PAGE,
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
    'http://api.ucavtor.ru/pages',
  ).then(
    ({ data }) => dispatch(receivePages(data)),
    err => error(),
  );
};

/**
 * CREATE PAGE
 */

export const requestCreatePage = () => ({
  type: REQUEST_CREATE_PAGE,
});

export const receiveCreatePage = data => ({
  type: RECEIVE_CREATE_PAGE,
  payload: {
    data,
    loading: false,
  },
});

export const createPage = data => (dispatch) => {
  dispatch(requestCreatePage());

  return axios.post(
    'http://api.ucavtor.ru/pages/store',
    data,
  ).then(
    ({ data }) => dispatch(receiveCreatePage(data)),
    err => error(),
  );
};

/**
 * CREATE PAGE
 */

export const requestUpdatePage = () => ({
  type: REQUEST_CREATE_PAGE,
});

export const receiveUpdatePage = data => ({
  type: RECEIVE_CREATE_PAGE,
  payload: {
    data,
    loading: false,
  },
});

export const updatePage = () => (dispatch) => {
  dispatch(requestUpdatePage());

  return axios.post(
    'http://localhost:8081/pages/store',
  ).then(
    ({ data }) => dispatch(receiveUpdatePage(data)),
    err => error(),
  );
}

