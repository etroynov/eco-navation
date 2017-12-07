import * as React from 'react';
import Link from 'next/link';

const Course = ({ href, img, name, description, price } : {href: string; img: string; name: string; description: string; price: number;}) => (
  <article className="course">
    <Link as={`/курс/${name}`} href={`/course?name=${name}&description=${description}&img=${img}&price=${price}`}>
      <a className="course__link">
        <div className="uk-flex">
          <div className="left-column uk-width-1-4">
            <figure className="course__img-container">
              <img src={img} alt={name} className="course__img" width="100" height="100" />
            </figure>
          </div>
          
          <div className="right-column uk-width-1-1">
            <header className="course__header">
              <h3 className="course__title">{name}</h3>
            </header>
            <section className="course__body">
              <p className="course__text">{`${description.slice(0, 150)}...`}</p>
            </section>
          </div>
        </div>
      </a>
    </Link>
  </article>
);

export default Course;
