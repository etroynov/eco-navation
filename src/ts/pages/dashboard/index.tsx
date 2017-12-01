import * as React from 'react';
import Head from 'next/head';

/*!
 * Components
 */

import Header from '../../components/dashboard/common/Header';
import Footer from '../../components/dashboard/common/Footer';
import Sidebar from '../../components/dashboard/common/Sidebar';

/*!
 * Expo
 */

export default class extends React.Component {
  render() {
    return (
      <div className="page">
        <Head>
          <title>Главная</title>
        </Head>
        <Sidebar />
        <div className="page__content">
          <div className="page__header-container">
            <Header />
          </div> 
          <Footer />
        </div>
      </div>
    );
  }
}
