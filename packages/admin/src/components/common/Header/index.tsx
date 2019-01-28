/**
 * Vendor
 */

import React from 'react';
import cn from 'classnames';

/**
 * Interfaces
 */

import { IHeader } from './interfaces';

type headerProps = IHeader;

/**
 * Styles
 */

import styles from './styles.scss';

/**
 * Expo
 */

const Header: React.FunctionComponent<headerProps> = ({ className, children }) => (
  <header className={cn([className, styles.container])}>{children}</header>
);

export default Header;
