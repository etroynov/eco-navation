"use strict";
/*!
 * Dependencies
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
/**
 * Components
 */
const Header_1 = require("../components/general/common/Header");
const Article_1 = require("../components/general/home/article/Article");
const Footer_1 = require("../components/general/common/Footer");
/*!
 * Expo
 */
exports.default = () => [
    React.createElement(Header_1.default, { key: "header" }),
    React.createElement(Article_1.default, { key: "about", title: "О компании" }),
    React.createElement(Footer_1.default, { key: "footer" }),
];
