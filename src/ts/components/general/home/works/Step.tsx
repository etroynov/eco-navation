import * as React from 'react';

const Step = ({ name, description, img } : {name: string; description: string; img: string;}) => (
  <section className="step">
    <div className="uk-flex">
      <div className="uk-width-1-2 uk-text-right">
        <div className="step__description">
          <header className="step__header">
            <h2 className="step__title">{name}</h2>
          </header>

          <section className="step__body">
            <p className="step__text">{description}</p>
          </section>
        </div>
        
      </div>
      <div className="step__timeline step__timeline--circle uk-width-1-2">
        <figure className="step__img-container">
          <img src={img} alt="" className="step__img" />
        </figure>
      </div>
    </div>
  </section>
);

export default Step;
