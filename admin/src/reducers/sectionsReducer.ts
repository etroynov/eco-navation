/*!
 * Vendor
 */

import { createReducer } from 'redux-act';

/*!
 * Init state
 */

const initialState: IReducerState = {
  loading: false,
  data: [],
};

/*!
 * Actions
 */

import {
  requestSections,
  receiveSections,

  receiveCreateSection,
  requestCreateSection,

  receiveUpdateSection,
  requestUpdateSection,
} from '../actions/sectionsActions';

/*!
 * Expo
 */

const sectionsReducer = createReducer(
  {
    [requestSections]: (state: IReducerState) => ({ ...state, loading: true }),
    [receiveSections]: (state: IReducerState, payload) => ({
      ...state,
      data: payload,
      loading: false,
    }),

    [requestCreateSection]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveCreateSection]: (state: IReducerState, payload) => ({
      data: [...state.data, payload],
      loading: false,
    }),

    [requestUpdateSection]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveUpdateSection]: (state: IReducerState, payload) => ({
      data: [...state.data, payload],
      loading: true,
    }),
  },
  initialState,
);

export default sectionsReducer as any;
