/*!
 * Vendor
 */

import * as React from 'react';
import Link from 'next/link';
import get from 'lodash/get';

import { Col, Row } from 'antd';
import { YMInitializer } from 'react-yandex-metrika';

/*!
 * Expo
 */

const Footer = ({ settings }) => (
  <footer className="footer">
    <div className="uc-container">
      <Row>
        <Col span={6}>
          <section className="menu-footer">
            <header className="footer-menu__header">
              <h4 className="footer-menu__title">О нас</h4>
            </header>
            <ul className="footer-menu__body">
              <li className="footer-menu__item">
                <Link 
                  as="/o-companii"
                  href="/page?slug=o-companii"
                >
                  <a className="footer-menu__text">Компания</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link
                  as="/rabota"
                  href="/page?slug=rabota"
                >
                  <a className="footer-menu__text">Работа</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link
                  as="/oferta"
                  href="/page?slug=oferta"
                >
                  <a className="footer-menu__text">Оферта</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link
                  as="/polzovatelskoe-soglashenie"
                  href="/page?slug=polzovatelskoe-soglashenie"
                >
                  <a className="footer-menu__text">Пользовательское соглашение</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link
                  as="/confidentiality"
                  href="/page?slug=confidentiality"
                >
                  <a className="footer-menu__text">Положение о конфиденциальности</a>
                </Link>
              </li>
            </ul>
          </section>
        </Col>
        <Col span={12}>
          <div className="footer__about">
            <p>{get(settings, 'footer-description')}</p>
          </div>
        </Col>
      </Row>
      <div className="footer__copyright">
        <p className="footer_copyright-light uk-text-small">{`© 2017 Автор. ${get(settings, 'address')} | ${get(settings, 'header-phone')} | `}<a href={`mailto:${get(settings, 'email')}`}>{get(settings, 'email')}</a></p>
      </div>
    </div>
    <YMInitializer accounts={[47130420]} version="2" />
    <script  dangerouslySetInnerHTML={{__html: `(function(){ var widget_id = 'MLkTdVcinx';var d=document;var w=window;function l(){var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();` }} />
  </footer>
);

export default Footer;
