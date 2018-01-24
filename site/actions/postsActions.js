/*!
 * Vendor
 */

import axios from 'axios';
import { createAction } from 'redux-act';

/*!
 * Expo
 */

/**
 * LIST Post
 */


export const requestPosts = createAction('REQUEST_POSTS');
export const receivePosts = createAction('RECEIVE_POSTS');


export const fetchPosts = () => (dispatch) => {
  dispatch(requestPosts());

  return axios.get(
    'http://api.ucavtor.ru/posts',
  ).then(
    ({ data }) => dispatch(receivePosts(data))
  );
};