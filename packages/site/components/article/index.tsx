import * as React from 'react';

const Article = ({ name, content }) => (
  <section>
    <div className="article">
      <header className="article__header">
        <h1 className="article__title">{name}</h1>
      </header>

      <section className="article__body" dangerouslySetInnerHTML={{__html: content }} />
    </div>
  </section>
);

export default Article;
