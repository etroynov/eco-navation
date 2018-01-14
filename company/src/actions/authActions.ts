import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToket';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types';


export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const login = authData => async (dispatch) => {
  const { data } = await axios.post('http://localhost:8081/organizations/login', authData);

  setAuthorizationToken(data.token);
  dispatch(setCurrentUser(jwt.decode(data.token)));

  return localStorage.setItem('jwtToken', data.token);
};
