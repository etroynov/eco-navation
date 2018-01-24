/*!
 * Vendor
 */

import axios from 'axios';
import { createAction } from 'redux-act';

/*!
 * Expo
 */

/**
 * LIST SETTINGS
 */


export const requestSettings = createAction('REQUEST_SETTINGS');
export const receiveSettings = createAction('RECEIVE_SETTINGS');


export const fetchSettings = () => (dispatch) => {
  dispatch(requestSettings());

  return axios.get(
    'http://api.ucavtor.ru/settings',
  ).then(
    ({ data }) => dispatch(receiveSettings(data))
  );
};