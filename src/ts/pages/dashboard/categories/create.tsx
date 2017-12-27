import * as React from 'react';
import Dashboard from '../../../components/dashboard/layout';
import CategoryCreateForm from '../../../components/dashboard/category/FormCreate';
import { Button, Card } from 'antd';
import Link from 'next/link';

/*!
 * Expo
 */

export default () => (
  <Dashboard>
    <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
      <h1 style={{ margin: 0 }}>
        Новый раздел
        <div className="buttons-panel" style={{ float: 'right' }}>
          <Link href="/dashboard/courses">
            <Button type="primary">назад</Button>
          </Link>
        </div>
      </h1>
    </header>
    <section className="form">
      <CategoryCreateForm />
    </section> 
  </Dashboard>
);
