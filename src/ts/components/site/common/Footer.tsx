import * as React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';

import Container from './Container';

/*!
 * Expo
 */

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col span={12}>
          <section className="menu-footer uk-width-1-3 uk-first-column">
            <header className="footer-menu__header">
              <h4 className="footer-menu__title">О нас</h4>
            </header>
            <ul className="footer-menu__body">
              <li className="footer-menu__item">
                <Link href="/about">
                  <a className="footer-menu__text">компания</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link href="/job">
                  <a className="footer-menu__text">работа</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link href="/oferta">
                  <a className="footer-menu__text">пользовательское соглашение</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link href="/confidentiality">
                  <a className="footer-menu__text">Положение о конфиденциальности</a>
                </Link>
              </li>
            </ul>
          </section>
        </Col>
        <Col span={12}>
          <div className="footer__about">
            <p>
              <strong>Учебный центр "Автор"</strong> преподаем в режиме онлайн посредством браузера видео уроки, скринкасты и многое другое. Мы стремимся помочь вам учиться.
            </p>
          </div>
        </Col>
      </Row>
      <div className="uk-flex-nowrap footer__copyright">
        <p className="footer_copyright-light uk-text-small">© 2017 Автор. Россия, Челябинск.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
