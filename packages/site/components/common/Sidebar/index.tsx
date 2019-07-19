/*!
 * Vendor
 */

import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

/*!
 * Assets
 */

import LoginIcon from './login.svg';

/*!
 * Styles
 */

import styles from './styles.scss';

/*!
 * Expo
 */

export const Sidebar = () => (
  <aside className={styles.container}>
    <section className={styles.authContainer}>
      <Link href="/auth">
        <a className={cn(styles.link, styles.authLink)}>
          <LoginIcon className={styles.authIcon} />
          <span className={styles.authLinkText}>Войти в систему</span>
        </a>
      </Link>
    </section>
    <section className={styles.block}>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a className={styles.link}>главная</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link as="/documents" href="/page?slug=documents">
              <a className={styles.link}>документы</a>
            </Link>
          </li>
          <li>
            <Link as="/info" href="/page?slug=info">
              <a className={styles.link}>инфо</a>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  </aside>
);
