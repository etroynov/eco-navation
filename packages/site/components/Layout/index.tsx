/*!
 * Vendor
 */

import * as React from 'react';

/*!
 * Components
 */

import { Header, Footer, Sidebar } from '../common';

/*!
 * Styles
 */

import styles from './styles.scss';

/*!
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

export const Layout: React.FC<IProps> = ({
  title, description, settings, children,
}) => (
  <div className={styles.container}>
    <Header title={title} description={description} settings={settings} />
    <Sidebar />
    <main>
      {children}
    </main>
    <Footer settings={settings} />
  </div>
);
