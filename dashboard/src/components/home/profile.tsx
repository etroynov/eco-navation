/*!
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

/*!
 * Expo
 */

const Profile = ({ fio, position }) => (
  <Card title="ваш профиль" className="dashboard-card">
    <div className="profile">
      <figure className="profile__img-container">
        <h2 style={{ margin: 0, textAlign: 'center' }}>{fio}</h2>
        <img src={require('../../assets/img/whitecollar.svg')} alt="" className="profile__img" />
        <figcaption className="profile__img-caption">
          <p>{position}</p>
          <hr className="profile__divider" />
        </figcaption>
      </figure>
    </div>
  </Card>
);

export default Profile;
