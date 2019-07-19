/*!
 * Vendor
 */

import React from 'react';
import get from 'lodash/get';
import Head from 'next/head';
import cn from 'classnames';

/*!
 * Styles
 */

import styles from './styles.scss';

/*!
 * Expo
 */

export const Header = ({ title, description, settings }) => (
  <>
    <Head>
      <title>{ title ? title : 'Учебный центр "Автор"' }</title>
      <meta name="description" content={description} />
    </Head>
    <header className={styles.container}>
      <section className={cn(styles.row, styles.left)}>
        <div>УЦ "АВТОР"</div>
        <div>Обучающая платформа</div>
      </section>

      <section className={cn(styles.row, styles.search, styles.center)}>
        <input type="text" placeholder="Найдите нужный урок или курс" className={styles.searchInput} />
      </section>

      <section className={cn(styles.row, styles.right)}>
        <div>
          {get(settings, 'header-phone')}
        </div>
        <div>
          <a href={`mailto:${get(settings, 'email')}`}>
            {get(settings, 'email')}
          </a>
        </div>
      </section>
    </header>
  </>
);
