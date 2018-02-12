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

const Page = ({ page: { _id = 0, title = '', description = '', name = '', content = '' }, settings}) => [
  <Site title={title} description={description} settings={settings}>
    <section className="uc-container page">
      <Article key={_id} name={name} content={content} />
    </section>
  </Site>
];

Page.getInitialProps = async ({ query }) => {
  try {
    const [ pageRes, settingsRes ] = await Promise.all([
      axios.get(`http://localhost:8081/pages/${query.slug}`),
      axios.get('http://localhost:8081/settings'),
    ]);
    
    let settings = {};

    if (Array.isArray(settingsRes.data) && !!settingsRes.data.length) {
      settingsRes.data.forEach(({ value, slug }) => settings[slug] = value );
    }

    return {
      settings,
      page: pageRes.data,
    };
  } catch (e) {
    return {};
  }
}

export default Page;
