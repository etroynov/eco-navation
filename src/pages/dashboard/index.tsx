import * as $ from 'jquery';
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
  componentDidMount() {
    UIkit.switcher(
    	$('.uk-tab'), 
      { connect:'.uk-switcher' },
    );
  }

  render() {
    return (
      <div className="page">
        <Head>
          <title>Курсы</title>
        </Head>
        <Sidebar />
        <div className="page__content">
          <div className="page__header-container">
            <Header />
          </div>
          <div>
            <ul data-uk-tab="true">
              <li className="uk-active">
                <a href="#" style={{ padding: '20px 0' }}>
                  Профессии
                  <span className="prof__counter-point" style={{ margin: '0 10px' }}>•</span>
                  <span className="prof__counter">28</span>
                </a>
              </li>
              <li>
                <a href="#" style={{ padding: '20px 0' }}>
                  Бесплатные интенсивы
                  <span className="prof__counter-point" style={{ margin: '0 10px' }}>•</span>
                  <span className="prof__counter">9</span>
                </a>
              </li>
              <li>
                <a href="#" style={{ padding: '20px 0' }}>
                  Курсы
                  <span className="prof__counter-point" style={{ margin: '0 10px' }}>•</span>
                  <span className="prof__counter">85</span>
                </a>
              </li>
            </ul>
            <ul className="uk-switcher">
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
