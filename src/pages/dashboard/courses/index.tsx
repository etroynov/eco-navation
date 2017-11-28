/**
 * Libs
 */

import * as $ from 'jquery';
import * as React from 'react';
import { createStore } from 'redux';

/**
 * Components
 */

import Head from 'next/head';
import Link from 'next/link';
import { Provider } from 'react-redux';

/*!
 * Declaration
 */

declare const UIkit: {
  switcher: (el: JQuery, options: object) => {};
  tab: (el: JQuery, options: object) => {};
};

/*!
 * Components
 */

import Header from '../../../components/dashboard/common/Header';
import Footer from '../../../components/dashboard/common/Footer';
import Sidebar from '../../../components/dashboard/common/Sidebar';

/*!
 * Expo
 */

const courses = createStore((state = []) => state);

class Courses extends React.Component {
  componentDidMount() {
    UIkit.switcher(
    	$('.tabs__header'), 
      { connect: '.uk-switcher' },
    );

    UIkit.tab($('.tabs__header'), { connect:'.tabs__content' });
  }

  render() {
    return (
      <Provider store={courses}>
        <div className="page">
          <Head>
            <title>Курсы</title>
          </Head>
          <Sidebar />
          <div className="page__content">
            <div className="page__header-container">
              <Header />
            </div>
            <div className="tabs">
              <ul data-uk-tab="true" data-uk-switcher="true" className="tabs__header uk-tab">
                <li className="uk-active">
                  <a href="#" className="tabs__link">
                    Профессии
                    <span className="prof__counter-point" style={{ margin: '0 10px' }}>•</span>
                    <span className="prof__counter">28</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tabs__link">
                    Бесплатные интенсивы
                    <span className="prof__counter-point" style={{ margin: '0 10px' }}>•</span>
                    <span className="prof__counter">9</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tabs__link">
                    Курсы
                    <span className="prof__counter-point" style={{ margin: '0 10px' }}>•</span>
                    <span className="prof__counter">85</span>
                  </a>
                </li>
                <li style={{ float: 'right' }}>
                  <a className="tabs__link">Добавить Факультет</a>
                </li>
                <li style={{ float: 'right' }}>
                  <a className="tabs__link">Добавить курс</a>
                </li>
              </ul>
              <ul className="tabs__content uk-switcher">
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
              </ul>
            </div>
            <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default Courses;
