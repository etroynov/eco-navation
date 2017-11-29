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
import { Provider } from 'react-redux';

/*!
 * Components
 */

import Header from '../../../components/dashboard/common/Header';
import Footer from '../../../components/dashboard/common/Footer';
import Sidebar from '../../../components/dashboard/common/Sidebar';

import DepartamentCreate from '../../../components/dashboard/departament/create';
import CourseCreate from '../../../components/dashboard/course/create';

/*!
 * Expo
 */

const courses = createStore((state = []) => state);

class Courses extends React.Component {
  componentDidMount() {
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
              <ul data-uk-tab="{connect: '#courses'}" className="tabs__header uk-tab">
                <li className="uk-active">
                  <a href="#" className="tabs__link">
                    Факультеты
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
                <li>
                  <a className="tabs__link">Добавить Факультет</a>
                </li>
                <li>
                  <a className="tabs__link">Добавить курс</a>
                </li>
              </ul>
              <ul id="courses" className="tabs__content uk-switcher uk-margin">
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
                <li>
                  <DepartamentCreate />
                </li>
                <li>
                  <CourseCreate />
                </li>
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
