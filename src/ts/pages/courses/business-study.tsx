/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Site from '../../components/site/layout';
import List from '../../components/site/courses/List';

/*!
 * Data
 */

import busisnes from './../../data/busisnes';

/*!
 * Expo
 */

export default () => (
  <Site>
    <List key="list" {...busisnes} />,
  </Site>
);
