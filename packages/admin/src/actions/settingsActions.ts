/*!
 * Vendor
 */

import axios from 'axios';
import { Dispatch, AnyAction } from 'redux';
import { createAction, ActionCreator } from 'redux-act';

/*!
 * Utils
 */

import { error } from './../utils/modals';

/*!
 * Expo
 */

/**
 * LIST SETTINGS
 */

export const requestSettings: any = createAction('REQUEST_SETTINGS');
export const receiveSettings: any = createAction('RECEIVE_SETTINGS');

export const fetchSettings = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch(requestSettings());

  return axios
    .get(`${process.env.API_URL}/settings`)
    .then(({ data }) => dispatch(receiveSettings(data)), err => error());
};

/**
 * CREATE SETTINGS
 */

export const requestCreateSettings: any = createAction(
  'REQUEST_CREATE_SETTINGS',
);
export const receiveCreateSettings: any = createAction(
  'RECEIVE_CREATE_SETTINGS',
);

export const createSettings = data => (dispatch: Dispatch<AnyAction>) => {
  dispatch(requestCreateSettings());

  return axios
    .post(`${process.env.API_URL}/settings/create`, data)
    .then(({ data }) => dispatch(receiveCreateSettings(data)), err => error());
};

/**
 * UPDATE SETTINGS
 */

export const requestUpdateSettings: ActionCreator<any> = createAction(
  'REQUEST_UPDATE_SETTINGS',
);
export const receiveUpdateSettings: any = createAction(
  'RECEIVE_UPDATE_SETTINGS',
);

export const updateSettings = data => (dispatch: Dispatch<AnyAction>) => {
  dispatch(requestUpdateSettings());

  return axios
    .post(`${process.env.API_URL}/settings/update`, data)
    .then(({ data }) => dispatch(receiveUpdateSettings(data)), err => error());
};

/**
 * DELETE SETTINGS
 */

export const requestDeleteSettings: any = createAction(
  'REQUEST_DELETE_SETTINGS',
);
export const receiveDeleteSettings: any = createAction(
  'RECEIVE_DELETE_SETTINGS',
);

export const deleteSettings = data => (dispatch: Dispatch<AnyAction>) => {
  dispatch(requestDeleteSettings());

  return axios
    .post(`${process.env.API_URL}/settings/delete`, data)
    .then(({ data }) => dispatch(receiveDeleteSettings(data)), err => error());
};
