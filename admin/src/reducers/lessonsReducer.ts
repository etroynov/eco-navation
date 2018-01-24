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
  requestLessons,
  receiveLessons,

  receiveCreateLesson,
  requestCreateLesson,

  receiveUpdateLesson,
  requestUpdateLesson,
} from '../actions/lessonsActions';

/*!
 * Expo
 */

const lessonsReducer = createReducer(
  {
    // List lesson
    [requestLessons]: (state: IReducerState) => ({ ...state, loading: true }),
    [receiveLessons]: (state: IReducerState, payload) => ({
      ...state,
      data: payload,
      loading: false,
    }),

    // Create lesson
    [requestCreateLesson]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveCreateLesson]: (state: IReducerState, payload) => ({
      data: [...state.data, payload],
      loading: false,
    }),

    // Update lesson
    [requestUpdateLesson]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveUpdateLesson]: (state: IReducerState, payload) => {
      const data = state.data.map((item) => {
        if (item._id === payload._id) {
          return { ...item, ...payload };
        }

        return item;
      });

      return {
        data,
        loading: false,
      };
    },
  },
  initialState,
);

export default lessonsReducer as any;
