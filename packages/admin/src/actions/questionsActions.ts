/*!
 * Vendor
 */

import axios from 'axios';
import { createAction } from 'redux-act';

/*!
 * Utils
 */

import { error } from './../utils/modals';

/*!
 * Expo
 */

/**
 * FETCH COURSE QUESTIONS
 */

export const requestQuestions: any = createAction('REQUEST_QUESTIONS');
export const receiveQuestions: any = createAction('RECEIVE_QUESTIONS');

export const fetchQuestions = id => dispatch => {
  dispatch(requestQuestions());

  return axios
    .get(`${process.env.API_URL}/questions/${id}`)
    .then(({ data }) => dispatch(receiveQuestions(data)), err => error());
};

/**
 * CREATE QUESTION
 */

export const requestCreateQuestion: any = createAction(
  'REQUEST_CREATE_QUESTION',
);
export const receiveCreateQuestion: any = createAction(
  'RECEIVE_CREATE_QUESTION',
);

export const createQuestion = data => dispatch => {
  dispatch(requestCreateQuestion());

  return axios
    .post(`${process.env.API_URL}/questions/create`, data)
    .then(({ data }) => dispatch(receiveCreateQuestion(data)), err => error());
};

/**
 * UPDATE QUESTION
 */

export const requestUpdateQuestion: any = createAction(
  'REQUEST_UPDATE_QUESTION',
);
export const receiveUpdateQuestion: any = createAction(
  'RECEIVE_UPDATE_QUESTION',
);

export const updateQuestion = data => dispatch => {
  dispatch(requestUpdateQuestion());

  return axios
    .post(`${process.env.API_URL}/questions/update`, data)
    .then(({ data }) => dispatch(receiveUpdateQuestion(data)), err => error());
};

/**
 * DELETE QUESTION
 */

export const requestDeleteQuestion: any = createAction(
  'REQUEST_DELETE_QUESTION',
);
export const receiveDeleteQuestion: any = createAction(
  'RECEIVE_DELETE_QUESTION',
);

export const deleteQuestion = data => dispatch => {
  dispatch(requestDeleteQuestion());

  return axios
    .post(`${process.env.API_URL}/questions/delete`, data)
    .then(() => dispatch(receiveDeleteQuestion(data)), err => error());
};
