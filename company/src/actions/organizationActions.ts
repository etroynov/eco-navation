import axios from 'axios';
import { Modal } from 'antd';
import { RECEIVE_ORGANIZATION_EMPLOYERS } from './types';


export const receiveOrganizationEmployers = ({ employers }) => ({
  type: RECEIVE_ORGANIZATION_EMPLOYERS,
  payload: employers,
});

export const fetchOrganizationEmployers = () => dispatch => axios.get(
  'http://localhost:8081/organizations/employers'
).then(
  ({ data }) => {
    dispatch(receiveOrganizationEmployers(data));
  },
  err => {
    Modal.error({
      title: 'Ошибка!',
      content: `В ходе отправки запроса возникла ошибка. Если ошибка возникает повторно напишите нам на support@ucavtor.ru или в онлайн консультант.`,
    }); 
  },
);
