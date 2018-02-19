/*!
 * Vendor
 */

import axios from 'axios';
import * as React from 'react';

/*!
 * Components
 */

import Site from '../components/layout';
import Article from '../components/article';

/*!
 * Expo
 */

const Post = ({ page: { _id = 0, title = '', description = '', name = '', content = '' }, settings }) => (
  <Site title={title} description={description} settings={settings}>
    <section className="uc-container page">
      <Article key={_id} name={name} content={content} />
    </section>
  </Site>
);

Post.getInitialProps = async ({ query }) => {
  try {
    const [postRes, settingsRes] = await Promise.all([
      axios.get(`http://api.ucavtor.ru/posts/${query.slug}`),
      axios.get('http://api.ucavtor.ru/settings'),
    ]);
    
    let settings = {};

    console.info(postRes);

    if (Array.isArray(settingsRes.data) && !!settingsRes.data.length) {
      settingsRes.data.forEach(({ value, slug }) => settings[slug] = value );
    }

    return {
      settings,
      page: postRes.data,
    };
  } catch (e) {
    return {};
  }
};

export default Post;
