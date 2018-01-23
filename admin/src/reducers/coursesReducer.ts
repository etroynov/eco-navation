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
  requestCourses,
  receiveCourses,

  receiveCreateCourse,
  requestCreateCourse,

  receiveUpdateCourse,
  requestUpdateCourse,
} from '../actions/coursesActions';

/*!
 * Expo
 */

const coursesReducer = createReducer(
  {
    [requestCourses]: (state: IReducerState) => ({ ...state, loading: true }),
    [receiveCourses]: (state: IReducerState, payload) => ({
      ...state,
      data: payload,
      loading: false,
    }),

    [requestCreateCourse]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveCreateCourse]: (state: IReducerState, payload) => ({
      data: [...state.data, payload],
      loading: false,
    }),

    [requestUpdateCourse]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveUpdateCourse]: (state: IReducerState, payload) => ({
      data: [...state.data, payload],
      loading: false,
    }),
  },
  initialState,
);

export default coursesReducer as any;
