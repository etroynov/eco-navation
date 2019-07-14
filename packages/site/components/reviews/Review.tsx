/**
 * Vendor
 */

import React from 'react';

/**
 * Types
 */

interface Props {
  avatar: string;
  name: string;
}

/**
 * Expo
 */

const Review: React.FC<Props> = ({ avatar, name }) => (
  <section className="review">
    <figure className="review__img-container" >
      <img className="review__img" src={avatar} alt={name} width="150" />
    </figure>
    <header className="review__header">
      <h3 className="review__title" style={{ textAlign: 'center' }}>{name}</h3>
    </header>
  </section>
);

export default Review;
