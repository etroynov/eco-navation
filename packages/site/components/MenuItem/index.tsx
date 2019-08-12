/*!
 * Vendor
 */

import React from 'react';
import Link from 'next/link';

/*!
 * Styles
 */

import styles from './styles.scss';

/*!
 * Expo
 */

export const MenuItem: React.FC<{
  label: string;
  link: string;
  icon: React.ReactElement;
}> = ({ label, link, icon }) => (
  <li className={styles.container}>
    <Link href={link}>
      <a className={styles.link}>
        {icon}
        <span>{label}</span>
      </a>
    </Link>
  </li>
);
