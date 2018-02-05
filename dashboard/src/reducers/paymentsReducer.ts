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

  requestPaymentStatus,
  receivePaymentStatus,

  requestPayment,
  receivePayment,
} from '../actions/paymentsActions';

/*!
 * Expo
 */

const paymentsReducer = createReducer({
  // FETCH PAYMENTS
  [requestPayments]: state => ({ ...state, loading: true }),
  [receivePayments]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // FETCH PAYMENTS STATUS
  [requestPaymentStatus]: state => ({ ...state, loading: true }),
  [receivePaymentStatus]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // FETCH PAYMENT
  [requestPayment]: state => ({ ...state, loading: true }),
  [receivePayment]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),
}, initialState);

export default paymentsReducer as any;
