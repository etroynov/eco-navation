import * as React from 'react';
import Dashboard from '../components/layout';
import { Button, Table } from 'antd';
import { Link } from 'react-router-dom';

const dataSource = [{
  key: '1',
  fio: 'Тройнов Евгений Александрович',
  position: 'ИТ - Специалист',
  email: 'troinof@yandex.ru',
}, {
  key: '2',
  fio: 'Кожевников Андрей Алексеевич',
  position: 'Директор',
  email: 'avtorka@list.ru',
}];

const columns = [{
  title: 'ФИО',
  dataIndex: 'fio',
  key: 'fio',
}, {
  title: 'Должность',
  dataIndex: 'position',
  key: 'position',
}, {
  title: 'Электронная почта',
  dataIndex: 'email',
  key: 'email',
}];


/*!
 * Expo
 */

export default () => (
  <Dashboard title="Сотрудники">
    <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
      <h1 style={{ margin: 0 }}>
        Сотрудники
        <Button type="primary" icon="user-add" style={{ float: 'right', marginTop: 10 }}>
          <Link to="/users/create" style={{ color: '#fff' }}>
            Добавить сотрудника
          </Link>
        </Button>
      </h1>
    </header>

    <Table dataSource={dataSource} columns={columns} />
  </Dashboard>
);
