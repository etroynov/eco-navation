/*!
 * Vendor
 */

import * as React from 'react';
import Link from 'next/link';

/**
 * Styles
 */

import styles from './styles.scss';

/*!
 * Expo
 */

export const Sidebar = () => (
  <aside className={styles.container}>
    <section className={styles.block}>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a className={styles.link}>главная</a>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  </aside>
);
