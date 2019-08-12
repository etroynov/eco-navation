/*!
 * Vendor
 */

import React from 'react';
import Head from 'next/head';
import cn from 'classnames';

/*!
 * Assets
 */

import logoSrc from './logo.png';
import companySrc from './company.png';

/*!
 * Styles
 */

import styles from './styles.scss';

/**
 * Types
 */

import { IProps } from './interfaces';

/*!
 * Expo
 */

export const Header: React.FC<IProps> = ({ title, description }) => (
  <>
    <Head>
      <title>{ title ? title : 'Учебный центр "Автор"' }</title>
      <meta name="description" content={description} />
    </Head>
    <header className={styles.container}>
      <section className={cn(styles.row, styles.left)}>
        <img src={logoSrc} alt=""/>
      </section>

      <section className={cn(styles.row, styles.search, styles.center)}>
        <input type="text" placeholder="Найдите нужный урок или курс" className={styles.searchInput} />
      </section>

      <section className={cn(styles.row, styles.right)}>
        <img src={companySrc} alt=""/>
      </section>
    </header>
  </>
);
