/*!
 * Vendor
 */

import * as React from 'react';
import { Layout } from 'antd';

/*!
 * Components
 */

import Header from './common/Header';
import Footer from './common/Footer';

/**
 * Types
 */

interface IProps {
  title?: string;
  description?: string;
  settings?: any;
  children?: any;
}

/*!
 * Expo
 */

const { Content } = Layout;

const Site: React.FC<IProps> = ({ title, description, settings, children }) => (
  <Layout>
    <Header title={title} description={description} settings={settings} />
    <Content>
      {children}
    </Content>
    <Footer settings={settings} />
  </Layout>
);

export default Site;
