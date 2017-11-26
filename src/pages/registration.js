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
const Header_1 = require("../components/dashboard/common/Header");
const Sidebar_1 = require("../components/dashboard/common/Sidebar");
const Footer_1 = require("../components/dashboard/common/Footer");
/*!
 * Expo
 */
exports.default = () => (React.createElement("div", { className: "page" },
    React.createElement(head_1.default, null,
        React.createElement("link", { rel: "stylesheet", href: "/static/css/uikit.min.css" }),
        React.createElement("link", { rel: "stylesheet", href: "/static/css/dashboard.css" }),
        React.createElement("title", null, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"),
        React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", key: "viewport" })),
    React.createElement(Sidebar_1.default, null),
    React.createElement("div", { className: "page__content" },
        React.createElement("div", { className: "page__header-container" },
            React.createElement(Header_1.default, null)),
        React.createElement("div", { className: "login-box uk-flex uk-flex-center", style: { padding: '100px 0' } },
            React.createElement("form", { action: "", className: "login-form uk-width-1-4" },
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", { className: "uk-form-label" }, "\u0424\u0418\u041E"),
                    React.createElement("div", { className: "uk-form-controls" },
                        React.createElement("input", { type: "text", className: "uk-input", placeholder: "Иванов Иван Иванович" }))),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", { className: "uk-form-label" }, "\u0422\u0415\u041B\u0415\u0424\u041E\u041D"),
                    React.createElement("div", { className: "uk-form-controls" },
                        React.createElement("input", { type: "text", className: "uk-input", placeholder: "+7 (XXX) XXX-XX-XX" }))),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", { className: "uk-form-label" }, "E-MAIL"),
                    React.createElement("div", { className: "uk-form-controls" },
                        React.createElement("input", { type: "text", className: "uk-input", placeholder: "example@mail.com" }))),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", { className: "uk-form-label" }, "\u041A\u041E\u041C\u041F\u0410\u041D\u0418\u042F"),
                    React.createElement("div", { className: "uk-form-controls" },
                        React.createElement("input", { type: "text", className: "uk-input", placeholder: "УЦ `АВТОР`" }))),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", { className: "uk-form-label" }, "\u041F\u0410\u0420\u041E\u041B\u042C"),
                    React.createElement("div", { className: "uk-form-controls" },
                        React.createElement("input", { type: "password", className: "uk-input" }))),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", { className: "uk-form-label" }, "\u041F\u0410\u0420\u041E\u041B\u042C \u0415\u0429\u0401 \u0420\u0410\u0417 "),
                    React.createElement("div", { className: "uk-form-controls" },
                        React.createElement("input", { type: "password", className: "uk-input" }))),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement(link_1.default, { href: "/dashboard" },
                        React.createElement("input", { type: "submit", className: "uk-button uk-button-primary uk-width-1-1", value: "зарегистрироваться" }))))),
        React.createElement(Footer_1.default, null))));
