/*!
 * Vendor
 */

import axios from 'axios';
import { createAction } from 'redux-act';

/*!
 * Expo
 */

/**
 * LIST PAGE
 */


export const requestPages = createAction('REQUEST_PAGES');
export const receivePages = createAction('RECEIVE_PAGES');


export const fetchPages = () => (dispatch) => {
  dispatch(requestPages());

  return axios.get(
    'http://api.ucavtor.ru/pages',
  ).then(
    ({ data }) => dispatch(receivePages(data)),
  );
};