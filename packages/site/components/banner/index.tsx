/*!
 * Vendor
 */

import * as React from 'react';
import styled from 'styled-components';

/*!
 * Components
 */

import Block from '../common/Block';

const Image = styled.img`
  width: 100%;
`;

/*!
 * Expo
 */

const Banner = () => (
  <Block>
    <Image src="/static/img/content/banner-ep.jpg" />
  </Block>
);

export default Banner;
