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

import medicina from '../../data/medicina';

/*!
 * Expo
 */

export default () => (
  <Site>
    <List key="list" {...medicina} />,
  </Site>
);
