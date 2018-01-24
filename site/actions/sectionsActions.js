/*!
 * Vendor
 */

import axios from 'axios';
import { createAction } from 'redux-act';

/*!
 * Expo
 */

/**
 * LIST SECTION
 */


export const requestSections = createAction('REQUEST_SECTIONS');
export const receiveSections = createAction('RECEIVE_SECTIONS');


export const fetchSections = () => (dispatch) => {
  dispatch(requestSections());

  return axios.get(
    'http://api.ucavtor.ru/sections',
  ).then(
    ({ data }) => dispatch(receiveSections(data))
  );
};