/*!
 * Vendor
 */

import React, { useState } from 'react';
import { Row, Tag } from 'antd';

/*!
 * Components
 */

import Item from './Item';

const { CheckableTag } = Tag;

/*!
 * Types
 */

interface Props {
  name: string;
  description: string;
  items: ReadonlyArray<any>;
  tagsCloud: ReadonlyArray<any>;
}

/*!
 * Expos
 */

export const Courses: React.FC<Props> = ({
  name = '',
  description = '',
  items = [],
  tagsCloud = [],
}) => {
  const [tags, setTags] = useState([]);

  let currentItems = items;

  if (!!tags.length) {
    currentItems = items.filter(({ tags }) => tags.includes(tags));
  }

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...tags, tag]
      : tags.filter(t => t !== tag);

    setTags(nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  };

  return (
    <section className="courses">
        <div className="uc-container">
          <header className="courses__header">
            <h2 className="courses__title">{name}</h2>
            <p className="courses__description">{description}</p>
            <div className="tags-cloud">
              {tagsCloud.map(({ name, slug }, index) => (
                <CheckableTag
                  key={index}
                  className="tags-cloud__item"
                  checked={tags.includes(slug)}
                  onChange={handleChange.bind(null, slug)}
                >
                  {name}
                </CheckableTag>
              ))}
            </div>
          </header>

          <Row>
            {currentItems.map((item, index) => <Item key={index} {...item} />)}
          </Row>
        </div>
      </section>
  );
};
