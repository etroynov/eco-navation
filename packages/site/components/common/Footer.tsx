/*!
 * Vendor
 */

import * as React from 'react';
import Link from 'next/link';
import get from 'lodash/get';

import styled from 'styled-components';
import { FaVk } from 'react-icons/fa';
import { Col, Row } from 'antd';
import { YMInitializer } from 'react-yandex-metrika';

/*!
 * Components
 */

const VK = styled(FaVk)`
  color: #fff;
  font-size: 28px;
  &:hover {
    color: #aebdc1;
  }
`;

const SocialTitle = styled.h4`
  color: #fff;
  text-transform: uppercase;
`;

/*!
 * Expo
 */

export const Footer = ({ settings }) => (
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
                  as="/page/o-companii"
                  href="/page?slug=o-companii"
                >
                  <a className="footer-menu__text">Компания</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link
                  as="/page/rabota"
                  href="/page?slug=rabota"
                >
                  <a className="footer-menu__text">Работа</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link
                  as="/page/oferta"
                  href="/page?slug=oferta"
                >
                  <a className="footer-menu__text">Оферта</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link
                  as="/page/polzovatelskoe-soglashenie"
                  href="/page?slug=polzovatelskoe-soglashenie"
                >
                  <a className="footer-menu__text">Пользовательское соглашение</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link
                  as="/page/confidentiality"
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
            <div className="footer__social-links">
              <SocialTitle>мы в социальных сетях</SocialTitle>
              <a href="https://vk.com/ucavtor"><VK /></a>
            </div>
          </div>
        </Col>
      </Row>
      <div className="footer__copyright">
        <p className="footer_copyright-light uk-text-small">{`
          © 2017 Автор. ${get(settings, 'address')} | ${get(settings, 'header-phone')} | `}
          <a href={`mailto:${get(settings, 'email')}`}>{get(settings, 'email')}</a></p>
      </div>
    </div>
    <YMInitializer accounts={[47130420, 50455168]} version="2" />
    <script  dangerouslySetInnerHTML={{__html: `(function(){ var widget_id = 'MLkTdVcinx';var d=document;var w=window;function l(){var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();` }} />
  </footer>
);
