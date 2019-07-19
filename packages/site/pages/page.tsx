/*!
 * Vendor
 */

import axios from 'axios';
import React from 'react';

/*!
 * Components
 */

import { Layout } from '../components/Layout';
import Article from '../components/article';

/*!
 * Expo
 */

const Page = ({ page: { _id = 0, title = '', description = '', name = '', content = '' }, settings}) => [
  <Layout title={title} description={description} settings={settings}>
    <section className="uc-container page">
      <Article key={_id} name={name} content={content} />
    </section>
  </Layout>
];

Page.getInitialProps = async ({ query }) => {
  try {
    const [ pageRes, settingsRes ] = await Promise.all([
      axios.get(`http://api.ucavtor.ru/pages/${query.slug}`),
      axios.get('http://api.ucavtor.ru/settings'),
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
