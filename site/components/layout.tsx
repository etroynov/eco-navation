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

const Site = ({ title, description, settings, children }) => (
  <Layout>
    <Header title={title} description={description} settings={settings} />
    <Content>
      {children}
    </Content>
    <Footer settings={settings} />
  </Layout>
);

export default Site;
