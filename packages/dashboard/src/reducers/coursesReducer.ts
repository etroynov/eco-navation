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
  current: {},
};

/*!
 * Actions
 */

import {
  requestCourses,
  receiveCourses,

  receiveCourse,
  requestCourse,

  receiveCourseTestQuestions,
  requestCourseTestQuestions,
} from '../actions/coursesActions';

/*!
 * Expo
 */

const coursesReducer = createReducer({
  // fetch courses
  [requestCourses]: (state: IReducerState) => ({ ...state, loading: true }),
  [receiveCourses]: (state: IReducerState, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // fetch course
  [requestCourse]: (state: IReducerState) => ({ ...state, loading: true }),
  [receiveCourse]: (state: IReducerState, payload) => ({
    ...state,
    current: { ...payload },
    loading: false,
  }),

  // fetch course
  [requestCourseTestQuestions]: (state: IReducerState) => ({ ...state, loading: true }),
  [receiveCourseTestQuestions]: (state: IReducerState, payload) => ({
    ...state,
    current: { ...state.current, questions: payload },
    loading: false,
  }),
}, initialState);

export default coursesReducer as any;
