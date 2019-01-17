/*!
 * Vendor
 */

import axios from 'axios';
import { Dispatch, AnyAction } from 'redux';
import { createAction } from 'redux-act';

/*!
 * Utils
 */

import { error } from './../utils/modals';

/*!
 * Expo
 */

/**
 * LIST USER
 */

export const requestUsers: any = createAction('REQUEST_USERS');
export const receiveUsers: any = createAction('RECEIVE_USERS');

export const fetchUsers = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch(requestUsers());

  return axios
    .get(`${process.env.API_URL}/users`)
    .then(({ data }) => dispatch(receiveUsers(data)), err => error());
};

/**
 * UPDATE USER
 */

export const requestUpdateUser: any = createAction('REQUEST_UPDATE_USER');
export const receiveUpdateUser: any = createAction('RECEIVE_UPDATE_USER');

export const updateUser = data => (dispatch: Dispatch<AnyAction>) => {
  dispatch(requestUpdateUser());

  return axios
    .post(`${process.env.API_URL}/users/update`, data)
    .then(({ data }) => dispatch(receiveUpdateUser(data)), err => error());
};

/**
 * RESET USER PASSWORD
 */

export const requestResetUserPassword: any = createAction(
  'REQUEST_RESET_USER_PASSWORD',
);
export const receiveResetUserPassword: any = createAction(
  'RECEIVE_RESET_USER_PASSWORD',
);

export const resetUserPassword = _id => (dispatch: Dispatch<AnyAction>) => {
  dispatch(requestResetUserPassword());

  return axios
    .post(`${process.env.API_URL}/users/reset-password`, { _id })
    .then(
      ({ data }) => dispatch(receiveResetUserPassword(data)),
      err => error(),
    );
};

/**
 * DELETE USER
 */

export const requestDeleteUser: any = createAction('REQUEST_DELETE_USER');
export const receiveDeleteUser: any = createAction('RECEIVE_DELETE_USER');

export const deleteUser = _id => (dispatch: Dispatch<AnyAction>) => {
  dispatch(requestDeleteUser());

  return axios
    .post(`${process.env.API_URL}/users/delete`, { _id })
    .then(dispatch.bind(null, receiveDeleteUser({ _id })), error);
};
