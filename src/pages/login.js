"use strict";
/**
 * Dependencies
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const head_1 = require("next/head");
const link_1 = require("next/link");
/**
 * Components
 */
const Sidebar_1 = require("../components/dashboard/common/Sidebar");
const Footer_1 = require("../components/dashboard/common/Footer");
/*!
 * Expo
 */
exports.default = () => (React.createElement("div", { className: "page" },
    React.createElement(head_1.default, null,
        React.createElement("link", { rel: "stylesheet", href: "/static/css/uikit.min.css" }),
        React.createElement("link", { rel: "stylesheet", href: "/static/css/dashboard.css" }),
        React.createElement("title", null, "\u0412\u0445\u043E\u0434"),
        React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", key: "viewport" })),
    React.createElement(Sidebar_1.default, null),
    React.createElement("div", { className: "page__content" },
        React.createElement("div", { className: "page__header-container" },
            React.createElement("header", { className: "header" },
                React.createElement("h2", { className: "header__title" }, "\u0412\u0445\u043E\u0434"),
                React.createElement("ul", { className: "header__menu menu nav" },
                    React.createElement("li", { className: "menu__item" },
                        React.createElement("a", null,
                            React.createElement("svg", { width: "32", height: "32", className: "svg-icon icon-voice-of-marketing" },
                                React.createElement("svg", { id: "icon-voice-of-marketing", viewBox: "0 0 32 32", width: "100%", height: "100%" },
                                    React.createElement("path", { d: "M21 11.005v12.882c-1.992-1.441-5.702-3.578-11-4.467v-8.836c5.291-0.895 9.006-3.035 11-4.475v4.896zM8 19.151c-0.952-0.093-1.946-0.146-2.986-0.146h-1.015c-0.551 0-0.999-0.448-0.999-0.999v-6.002c0-0.551 0.448-0.999 0.999-0.999h1.001c1.045 0 2.043-0.055 3-0.149v8.295zM23 11.56v-7.56c0-0.404-0.243-0.769-0.617-0.924s-0.804-0.070-1.090 0.217c-0.058 0.057-5.828 5.707-16.293 5.712h-1.001c-1.653 0-2.999 1.345-2.999 2.999v0.001c-0.552 0-1 0.448-1 1v4c0 0.552 0.448 1 1 1v0.001c0 1.654 1.346 2.999 2.999 2.999h0.306l2.758 7.352c0.147 0.389 0.52 0.648 0.937 0.648h2c0.287 0 0.56-0.123 0.75-0.338 0.189-0.216 0.278-0.502 0.242-0.786l-0.798-6.387c7.151 1.369 11.051 5.166 11.097 5.211 0.191 0.193 0.448 0.295 0.709 0.295 0.129 0 0.258-0.024 0.382-0.075 0.374-0.155 0.618-0.52 0.618-0.925v-7.55c1.191-0.693 2-1.968 2-3.445s-0.809-2.752-2-3.445v0zM31 14.005h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h3c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM26.657 19.248c-0.391-0.391-1.024-0.391-1.414 0-0.391 0.39-0.391 1.023 0 1.414l2.121 2.121c0.39 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.121-2.121zM26.657 10.762l2.121-2.121c0.391-0.391 0.391-1.024 0-1.414-0.39-0.391-1.024-0.391-1.414 0l-2.121 2.121c-0.391 0.391-0.391 1.024 0 1.414 0.39 0.391 1.023 0.391 1.414 0v0z" }))))),
                    React.createElement("li", { className: "menu__item" },
                        React.createElement("a", null,
                            React.createElement("svg", { width: "32", height: "32", className: "svg-icon icon-search " },
                                React.createElement("svg", { id: "icon-search", viewBox: "0 0 32 32", width: "100%", height: "100%" },
                                    React.createElement("path", { d: "M14 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C8.477 24 4 19.523 4 14S8.477 4 14 4s10 4.477 10 10-4.477 10-10 10zM21.043 22.457l5.25 5.25a1 1 0 0 0 1.414-1.414l-5.25-5.25a1 1 0 0 0-1.414 1.414z" }))))),
                    React.createElement("li", { className: "menu__item" },
                        React.createElement(link_1.default, { href: "/login" },
                            React.createElement("a", null, "\u0412\u0445\u043E\u0434"))),
                    React.createElement("li", { className: "menu__item" },
                        React.createElement(link_1.default, { href: "/registration" },
                            React.createElement("a", null, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")))))),
        React.createElement("div", { className: "login-box uk-flex uk-flex-center" },
            React.createElement("form", { action: "", className: "login-form uk-width-1-4" },
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("input", { type: "text", className: "uk-input", placeholder: "E-mail" })),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("div", { className: "uk-form-controls" },
                        React.createElement("input", { type: "text", className: "uk-input", placeholder: "Пароль" }))),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", null,
                        React.createElement("input", { className: "uk-checkbox", type: "checkbox" }),
                        " \u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F")),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement(link_1.default, { href: "/dashboard" },
                        React.createElement("input", { type: "submit", className: "uk-button uk-button-primary uk-width-1-1", value: "войти" }))))),
        React.createElement(Footer_1.default, null))));
