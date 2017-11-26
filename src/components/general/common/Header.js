"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
/*!
 * Components
 */
const head_1 = require("next/head");
const link_1 = require("next/link");
/*!
 * Expo
 */
exports.default = () => (React.createElement("header", { className: "header" },
    React.createElement(head_1.default, null,
        React.createElement("title", null, "\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440 \"\u0410\u0432\u0442\u043E\u0440\""),
        React.createElement("link", { rel: "stylesheet", href: "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" }),
        React.createElement("link", { rel: "stylesheet", href: "/static/css/uikit.min.css" }),
        React.createElement("link", { rel: "stylesheet", href: "/static/css/style.css" })),
    React.createElement("div", { className: "uk-container" },
        React.createElement("nav", { className: "header-menu uk-navbar-container uk-navbar uk-navbar-transparent", "uk-navbar": "true" },
            React.createElement("div", { className: "uk-navbar-left" },
                React.createElement("ul", { className: "uk-navbar-nav" },
                    React.createElement("li", null,
                        React.createElement(link_1.default, { href: "/" },
                            React.createElement("a", null, "\u0433\u043B\u0430\u0432\u043D\u0430\u044F"))),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#courses" }, "\u041A\u0443\u0440\u0441\u044B")))),
            React.createElement("div", { className: "uk-navbar-right" },
                React.createElement("ul", { className: "uk-navbar-nav" },
                    React.createElement("li", null,
                        React.createElement(link_1.default, { href: "/login" },
                            React.createElement("a", null,
                                React.createElement("i", { className: "icon ion-locked" }),
                                "\u0432\u0445\u043E\u0434")))))))));
