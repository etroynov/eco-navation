/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Site from '../../components/layout';
import List from '../../components/courses';

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
