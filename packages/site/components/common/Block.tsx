/*!
 * Vendor
 */

import styled from 'styled-components';

/*!
 * Components
 */

const Block = styled.div`
  padding: 50px 0;
  background: ${props => props.background ? props.background : 'transparent' };
`;

/*!
 * Expo
 */

export default Block;
