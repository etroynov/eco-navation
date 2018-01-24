/*!
 * Vendor
 */

import * as React from 'react';
import { Row, Tag } from 'antd';
import { connect } from 'react-redux';

/*!
 * Components
 */

import Item from './Item';

const { CheckableTag } = Tag;

/*!
 * Expos
 */

class List extends React.Component {
  state = {
    selectedTags: [],
  };

  constructor(props) {
    super(props);
  }

  handleChange = (tag, checked) => {
    const { selectedTags } = this.state;

    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);

    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const {
      name = '', 
      description = '',
      items = [],
      tagsCloud = [],
    } = this.props;
    const { selectedTags } = this.state;

    let currentItems = items;

    if (!!selectedTags.length) {
      currentItems = items.filter(({ tags }) => selectedTags.includes(tags));
    }

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
                  checked={selectedTags.includes(slug)}
                  onChange={checked => this.handleChange(slug, checked)}
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
  }
}

const mapStateToProps = ({ courses }) => {
  console.info('test', courses);

  return {};
}; 

export default connect(
  mapStateToProps,
)(List);
