/*!
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import { Menu } from '../../Menu';
import { MenuItem } from '../../MenuItem';

/*!
 * Assets
 */

import LoginIcon from './login.svg';
import CollectionsIcon from './collections.svg';
import DirectionsIcon from './directions.svg';
import CoursesIcon from './courses.svg';
import VebinarsIcon from './vebinars.svg';
import ArticlesIcon from './articles.svg';
import DocsIcon from './docs.svg';
import EnvelopIcon from './envelop.svg';
import AboutIcon from './about.svg';

/*!
 * Styles
 */

import styles from './styles.scss';

/**
 * Menu
 */

const menu: ReadonlyArray<{
  label: string;
  link: string;
  icon: React.ReactElement;
}> = [
  {
    label: 'Главная',
    link: '/',
    icon: <CollectionsIcon className={styles.icon} />,
  },
  {
    label: 'Подборки',
    link: '/',
    icon: <CollectionsIcon className={styles.icon} />,
  },
  {
    label: 'Направления',
    link: '/',
    icon: <DirectionsIcon className={styles.icon} />,
  },
  {
    label: 'Курсы',
    link: '/',
    icon: <CoursesIcon className={styles.icon} />,
  },
  {
    label: 'Вебинары',
    link: '/',
    icon: <VebinarsIcon className={styles.icon} />,
  },
  {
    label: 'Статьи',
    link: '/',
    icon: <ArticlesIcon className={styles.icon} />,
  },
  {
    label: 'Документы',
    link: '/',
    icon: <DocsIcon className={styles.icon} />,
  },
  {
    label: 'Обратная связь',
    link: '/',
    icon: <EnvelopIcon className={styles.icon} />,
  },
  {
    label: 'О проекте',
    link: '/',
    icon: <AboutIcon className={styles.icon} />,
  },
];

/*!
 * Expo
 */

export const Sidebar = () => (
  <aside className={styles.container}>
    <section className={styles.authContainer}>
      <MenuItem
        label="Войти в систему"
        link="/auth"
        icon={<LoginIcon className={styles.icon} />}
      />
    </section>
    <section className={styles.block}>
      <nav className={styles.menu}>
        <Menu>
          {menu.map(item => <MenuItem key={item.link} {...item} />)}
        </Menu>
      </nav>
    </section>
  </aside>
);
