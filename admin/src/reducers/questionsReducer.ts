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
  requestQuestions,
  receiveQuestions,

  receiveCreateQuestion,
  requestCreateQuestion,

  receiveUpdateQuestion,
  requestUpdateQuestion,
} from '../actions/questionsActions';

/*!
 * Expo
 */

const questionsReducer = createReducer(
  {
    // List question
    [requestQuestions]: (state: IReducerState) => ({ ...state, loading: true }),
    [receiveQuestions]: (state: IReducerState, payload) => ({
      ...state,
      data: payload,
      loading: false,
    }),

    // Create question
    [requestCreateQuestion]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveCreateQuestion]: (state: IReducerState, payload) => ({
      data: [...state.data, payload],
      loading: false,
    }),

    // Update question
    [requestUpdateQuestion]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveUpdateQuestion]: (state: IReducerState, payload) => {
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

export default questionsReducer as any;
