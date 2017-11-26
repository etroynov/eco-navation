"use strict";
/*!
 * Dependencies
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
/**
 * Components
 */
const Header_1 = require("../../components/general/common/Header");
const List_1 = require("../../components/general/courses/List");
const Footer_1 = require("../../components/general/common/Footer");
/*!
 * Expo
 */
exports.default = () => [
    React.createElement(Header_1.default, { key: "header" }),
    React.createElement(List_1.default, { key: "list" }),
    React.createElement(Footer_1.default, { key: "footer" }),
];
