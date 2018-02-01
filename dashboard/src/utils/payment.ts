/*!
 * Vendor
 */

import axios from 'axios';

/*!
 * Expo
 */

export const init = (userId, courseId) => axios.post(
  'http://localhost:8081/payments/create',
  { userId, courseId },
);
