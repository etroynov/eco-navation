"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Course_1 = require("./Course");
const Courses = () => (React.createElement("div", { id: "courses", className: "courses uk-container" },
    React.createElement("header", { className: "courses__header" },
        React.createElement("h2", { className: "courses__title" }, "\u041D\u0430\u0448\u0438 \u043A\u0443\u0440\u0441\u044B"),
        React.createElement("p", { className: "courses__description" }, "\u041C\u044B \u0441\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u043D\u0430\u0448\u0438 \u043A\u0443\u0440\u0441\u044B \u043F\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u043C. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0431\u044B \u0432\u0430\u043C \u0431\u044B\u043B\u043E \u0443\u0434\u043E\u0431\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0442\u043E \u0447\u0442\u043E \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E.")),
    React.createElement("div", { className: "uk-flex uk-flex-between uk-flex-wrap" },
        React.createElement(Course_1.default, { href: "/courses/medicina", img: "/static/img/badge-pen.svg", name: "Медицина", description: "24 февраля 1870 года[19] Лев Николаевич Толстой задумал роман о частной жизни и отношениях современников, но к реализации своего замысла приступил лишь в феврале 1873 года." }),
        React.createElement(Course_1.default, { href: "/courses/eco-study", img: "/static/img/badge-eco.svg", name: "Экологическое образование", description: "24 февраля 1870 года[19] Лев Николаевич Толстой задумал роман о частной жизни и отношениях современников, но к реализации своего замысла приступил лишь в феврале 1873 года." }),
        React.createElement(Course_1.default, { href: "/courses/production-security", img: "/static/img/badge-elixir.svg", name: "Промышленная безопасность", description: "24 февраля 1870 года[19] Лев Николаевич Толстой задумал роман о частной жизни и отношениях современников, но к реализации своего замысла приступил лишь в феврале 1873 года." }),
        React.createElement(Course_1.default, { href: "/courses/business-study", img: "/static/img/badge-electives.svg", name: "Бизнес образование", description: "24 февраля 1870 года[19] Лев Николаевич Толстой задумал роман о частной жизни и отношениях современников, но к реализации своего замысла приступил лишь в феврале 1873 года." }),
        React.createElement(Course_1.default, { href: "/courses/personal-study", img: "/static/img/badge-ruby.svg", name: "Курсы личностного роста", description: "24 февраля 1870 года[19] Лев Николаевич Толстой задумал роман о частной жизни и отношениях современников, но к реализации своего замысла приступил лишь в феврале 1873 года." }))));
exports.default = Courses;
