import * as React from 'react';
import Item from './Item';

const List = ({ name, description, items } : { name: string; description: string; items: any[] }) => (
  <div className="courses uk-container">
    <header className="courses__header">
      <h2 className="courses__title">{name}</h2>
      <p className="courses__description">{description}</p>
    </header>

    <div className="uk-flex uk-flex-between uk-flex-wrap">
      {items.map(item => <Item {...item} />)}
    </div>
  </div>
);

export default List;
