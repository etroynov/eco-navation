import * as React from 'react';
import Link from 'next/link';

/*!
 * Expo
 */

const Footer = () => (
  <footer className="footer">
    <div className="uk-container">
      <div className="uk-flex uk-flex-wrap">
        <div className="uk-width-1-2">
          <div className="uk-grid" uk-grid="true">
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
                  <Link href="/pressa">
                    <a className="footer-menu__text">пресса о нас</a>
                  </Link>
                </li>
                <li className="footer-menu__item">
                  <Link href="/rules">
                    <a className="footer-menu__text">правила использования ресурсов</a>
                  </Link>
                </li>
                <li className="footer-menu__item">
                  <Link href="/oferta">
                    <a className="footer-menu__text">пользовательское соглашение</a>
                  </Link>
                </li>
              </ul>
            </section>

            <section className="menu uk-width-1-3">
              <header className="footer-menu__header">
                <h4 className="footer-menu__title">Услуги</h4>
              </header>
              <ul className="footer-menu__body">
                <li className="footer-menu__item">
                  <Link href="/courses">
                    <a className="footer-menu__text">курсы</a>
                  </Link>
                </li>
                <li className="footer-menu__item">
                  <Link href="/screencast">
                    <a className="footer-menu__text">скринкасты</a>
                  </Link>
                </li>
                <li className="footer-menu__item">
                  <Link href="/blog">
                    <a className="footer-menu__text">блог</a>
                  </Link>
                </li>
                <li className="footer-menu__item">
                  <Link href="/price">
                    <a className="footer-menu__text">цены</a>
                  </Link>
                </li>
                <li className="footer-menu__item">
                  <Link href="/corporative">
                    <a className="footer-menu__text">корпоративным клиентам</a>
                  </Link>
                </li>
              </ul>
            </section>

            <section className="menu uk-width-1-3">
              <header className="footer-menu__header">
                <h4 className="footer-menu__title">Нужна помощь?</h4>
              </header>
              <ul className="footer-menu__body">
                <li className="footer-menu__item">
                  <Link href="/contact_us">
                    <a className="footer-menu__text">связатся с нами</a>
                  </Link>
                </li>
                <li className="footer-menu__item">
                  <Link href="/help">
                    <a className="footer-menu__text">помощь</a>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="uk-width-1-2">
          <div className="footer__about">
            <p>
              <strong>Экологические новации</strong> преподаем основы БЖ в режиме онлайн посредством браузера видео уроки, скринкасты и многое другое. Мы стремимся помочь вам учиться.
            </p>
          </div>
        </div>
        <div className="uk-flex-nowrap footer__copyright">
          <p className="footer_copyright-light uk-text-small">© 2017 Автор. Россия, Челябинск.</p>
        </div>
      </div>
    </div>

    <script src="/static/js/uikit.min.js"></script>
  </footer>
);

export default Footer;
