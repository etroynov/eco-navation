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
  requestPayments,
  receivePayments,

  requestPayment,
  receivePayment,
} from '../actions/paymentsActions';

/*!
 * Expo
 */

const paymentsReducer = createReducer({
  // fetch payments
  [requestPayments]: state => ({ ...state, loading: true }),
  [receivePayments]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // fetch payments
  [requestPayment]: state => ({ ...state, loading: true }),
  [receivePayment]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  })
}, initialState);

export default paymentsReducer as any;
