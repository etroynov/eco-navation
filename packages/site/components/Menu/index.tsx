/*!
 * Vendor
 */

import React from 'react';

/*!
 * Styles
 */

import styles from './styles.scss';

/*!
 * Expo
 */

export const Menu: React.FC = ({ children }) => (
  <ul className={styles.container}>{children}</ul>
);
