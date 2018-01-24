/*!
 * Vendor
 */

import { createReducer } from 'redux-act';

/*!
 * Init state
 */

const initialState = {
  loading: false,
  data: [],
};

/*!
 * Actions
 */

import {
  requestPosts,
  receivePosts,
} from '../actions/postsActions';

/*!
 * Expo
 */

const postReducer = createReducer({
  // Get posts list
  [requestPosts]: state => ({ ...state, loading: true }),
  [receivePosts]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  })
}, initialState);

export default postReducer;
