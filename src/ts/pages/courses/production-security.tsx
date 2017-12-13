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

import production from '../../data/production';

/*!
 * Expo
 */

export default () => (
  <Site>
    <List key="list" {...production} />,
  </Site>
);
