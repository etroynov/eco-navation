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
  requestOrganizations,
  receiveOrganizations,

  receiveCreateOrganization,
  requestCreateOrganization,

  receiveUpdateOrganization,
  requestUpdateOrganization,

  receiveDeleteOrganization,
  requestDeleteOrganization,
} from '../actions/organizationsActions';

/*!
 * Expo
 */

const organizationsReducer = createReducer({
  // Get organizations list
  [requestOrganizations]: (state: IReducerState) => ({ ...state, loading: true }),
  [receiveOrganizations]: (state: IReducerState, payload) => ({
    ...state,
    data: [...payload],
    loading: false,
  }),

  // Create organization
  [requestCreateOrganization]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveCreateOrganization]: (state: IReducerState, payload) => ({
    data: [...state.data, payload.data.organization],
    loading: true,
  }),

  // Update organization
  [requestUpdateOrganization]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveUpdateOrganization]: (state: IReducerState, payload) => {
    const data = state.data.map((item) => {
      if (item._id === payload.organization._id) {
        return { ...item, ...payload.organization };
      }

      return item;
    });

    return {
      data,
      loading: false,
    };
  },
  
  // Delete organization
  [requestDeleteOrganization]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveDeleteOrganization]: (state: IReducerState, payload) => {
    const data = state.data.filter(item => item._id !== payload.organization._id);

    return {
      data,
      loading: false,
    };
  },
}, initialState);

export default organizationsReducer as any;
