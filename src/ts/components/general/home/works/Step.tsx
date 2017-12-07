import * as React from 'react';

const Content = ({ name, description, context }) => (
  <div className={`uk-width-1-2 ${context}`}>
    <div className="step__description">
      <header className="step__header">
        <h2 className="step__title">{name}</h2>
      </header>

      <section className="step__body">
        <p className="step__text">{description}</p>
      </section>
    </div>
  </div>
);

const Img = ({ img, context }) => (
  <div className={`step__timeline step__timeline--circle ${context} uk-width-1-2`}>
    <figure className="step__img-container">
      <img src={img} alt="" className="step__img" />
    </figure>
  </div>
);

const Step = ({ name, description, img, odd } : {name: string; description: string; img: string; odd: boolean;}) => {
  let body = null;

  if(odd) {
    body = <div className="uk-flex"><Img context="step__timeline--right step__timeline--circle--right" img={img} /><Content context="" name={name} description={description} /></div>;
  } else {
    body = <div className="uk-flex"><Content context="uk-text-right" name={name} description={description} /><Img img={img} /></div>;
  }

  return (
    <section className="step">
      {body}
    </section>
  );
}

export default Step;
