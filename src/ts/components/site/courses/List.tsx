import * as React from 'react';
import { Row } from 'antd';

import Item from './Item';
import Container from './../common/Container';


const List = ({ name, description, items } : { name: string; description: string; items: any[] }) => (
  <Container>
    <section className="courses">
    <header className="courses__header">
      <h2 className="courses__title">{name}</h2>
      <p className="courses__description">{description}</p>
    </header>

    <Row>
      {items.map(item => <Item {...item} />)}
    </Row>
    </section>
  </Container>
);

export default List;
