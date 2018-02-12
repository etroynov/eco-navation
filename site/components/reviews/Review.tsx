import * as React from 'react';

const Review = ({ avatar, name, text }) => (
  <section className="review">  
    <figure className="review__img-container" >
      <img className="review__img" src={avatar} alt={name} width="150" />
    </figure>
    <header className="review__header">
      <h3 className="review__title" style={{ textAlign: 'center' }}>{name}</h3>
    </header>
    <section className="review__body">{text}</section> 
  </section>
);

export default Review;
