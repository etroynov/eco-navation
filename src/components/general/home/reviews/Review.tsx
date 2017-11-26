import * as React from 'react';

const Review = ({ avatar, name, text } : {avatar: string; name: string; text: string;}) => (
  <section className="review"> 
    <img src={avatar} alt=""/>
    <section className="review__body">{text}</section>

    <header className="review__header">
      <h3 className="review__title">{name}</h3>
    </header>
  </section>
);

export default Review;
