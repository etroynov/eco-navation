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

import personal from '../../data/personal';

/*!
 * Expo
 */

export default () => (
  <Site>
    <List key="list" {...personal} />
  </Site>
);
