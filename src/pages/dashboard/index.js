"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const head_1 = require("next/head");
/*!
 * Components
 */
const Header_1 = require("../../components/dashboard/common/Header");
const Footer_1 = require("../../components/dashboard/common/Footer");
const Sidebar_1 = require("../../components/dashboard/common/Sidebar");
/*!
 * Expo
 */
class default_1 extends React.Component {
    render() {
        return (React.createElement("div", { className: "page" },
            React.createElement(head_1.default, null,
                React.createElement("title", null, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")),
            React.createElement(Sidebar_1.default, null),
            React.createElement("div", { className: "page__content" },
                React.createElement("div", { className: "page__header-container" },
                    React.createElement(Header_1.default, null)),
                React.createElement(Footer_1.default, null))));
    }
}
exports.default = default_1;
