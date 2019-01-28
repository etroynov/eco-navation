/**
 * Vendor
 */

import React from 'react';
import cn from 'classnames';

/**
 * Interfaces
 */

import { IMain } from './interfaces';

type mainProps = IMain;

/**
 * Styles
 */

import styles from './styles.scss';

/**
 * Expo
 */

const Main: React.FunctionComponent<mainProps> = ({ className, children }) => (
  <main className={cn([className, styles.container])}>{children}</main>
);

export default Main;
