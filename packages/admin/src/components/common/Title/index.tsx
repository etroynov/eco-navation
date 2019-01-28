/**
 * Vendor
 */

import React from 'react';
import cn from 'classnames';

/**
 * Interfaces
 */

import { ITitle } from './interfaces';

type titleProps = ITitle;

/**
 * Styles
 */

import styles from './styles.scss';

/**
 * Expo
 */

const Main: React.FunctionComponent<titleProps> = ({ className, children }) => (
  <h1 className={cn([className, styles.container])}>{children}</h1>
);

export default Main;
