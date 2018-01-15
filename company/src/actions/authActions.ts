import axios from 'axios';
import { Modal } from 'antd';
import setAuthorizationToken from '../utils/setAuthorizationToket';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types';


export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const login = data => dispatch => axios.post('http://localhost:8081/organizations/login', data).then(
  ({ data }) => {
    const { token } = data;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    location.pathname = '/';
  },
  err => {
    Modal.warning({
      title: 'Неверный логин или пароль!',
      content: `'Вы ввели неправильный логин или пароль. Если ошибка возникает повторно напишите нам на support@ucavtor.ru или в онлайн консультант.`,
    }); 
  },
);
