/*!
 * Vendor
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

/*!
 * Reducers
 */

import reducer from './reducers';

/*!
 * Initial State
 */

const initialState = {
  courses: {
    loading: false,
    data: [],
  },
  pages: {
    loading: false,
    data: [],
  },
  posts: {
    loading: false,
    data: [],
  },
  sections: {
    loading: false,
    data: [],
  },
  settings: {
    loading: false,
    data: [],
  }
}

/*!
 * Expo
 */

const store = (state = initialState) => {
  return createStore(
    reducer,
    state,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)
    )
  )
}

export default store;