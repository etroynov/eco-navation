/*!
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

/*!
 * Expo
 */

const Profile = ({ user }) => (
  <Card title="ваш профиль" className="dashboard-card">
    <div className="profile">
      <figure className="profile__img-container">
        <h2 style={{ margin: 0, textAlign: 'center' }}>{user.fio}</h2>
        <img src={require('../../assets/img/whitecollar.svg')} alt="" className="profile__img" />
        <figcaption className="profile__img-caption">
          <p>{user.position}</p>
          <hr className="profile__divider" />
        </figcaption>
      </figure>
    </div>
  </Card>
);

export default Profile;
