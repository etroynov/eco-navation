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

/*!
 * Expo
 */

const { Content } = Layout;

const Site = ({ children }) => (
  <Layout>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </Layout>
);

export default Site;