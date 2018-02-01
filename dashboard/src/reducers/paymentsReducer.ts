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
}, initialState);

export default paymentsReducer as any;
