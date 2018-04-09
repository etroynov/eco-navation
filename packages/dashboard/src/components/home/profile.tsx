/*!
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';

/*!
 * Styles
 */

import * as styles from './profile.css';

/*!
 * Expo
 */

const Profile: React.SFC<IProfile> = ({ fio, position }) => (
  <figure className={styles.avatarContainer}>
    <img src="http://ucavtor.ru/static/img/whitecollar.svg" className={styles.avatar} />
    <figcaption className="profile__img-caption">
      <h3 className={styles.caption}>{fio}</h3>
      <p  className={styles.position}>{position}</p>
      <hr className={styles.devider} />
    </figcaption>
  </figure>
);

export default Profile;
