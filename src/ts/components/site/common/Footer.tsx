/*!
 * Vendor
 */
import * as React from 'react';
import Link from 'next/link';

import { Col, Row } from 'antd';
import { YMInitializer } from 'react-yandex-metrika';

/**
 * Components
 */

import Container from './Container';

/*!
 * Expo
 */

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col span={12}>
          <section className="menu-footer">
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
                <Link href="/oferta">
                  <a className="footer-menu__text">Оферта</a>
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
            <p><strong>Учебный центр "Автор"</strong> преподаем в режиме онлайн посредством браузера видео уроки, скринкасты и многое другое. Мы стремимся помочь вам учиться.</p>
          </div>
        </Col>
      </Row>
      <div className="uk-flex-nowrap footer__copyright">
        <p className="footer_copyright-light uk-text-small">© 2017 Автор. Россия, Челябинск. | проспект Ленина д.83,офис 510 | +7 (904) 812-57-38 | <a href="mailto:avtorka@list.ru">avtorka@list.ru</a></p>
      </div>
    </Container>
    <YMInitializer accounts={[47130420]} version="2" />
  </footer>
);

export default Footer;
