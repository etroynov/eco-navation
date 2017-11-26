"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
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
    componentDidMount() {
        UIkit.switcher($('.uk-tab'), { connect: '.uk-switcher' });
    }
    render() {
        return (React.createElement("div", { className: "page" },
            React.createElement(head_1.default, null,
                React.createElement("title", null, "\u041A\u0443\u0440\u0441\u044B")),
            React.createElement(Sidebar_1.default, null),
            React.createElement("div", { className: "page__content" },
                React.createElement("div", { className: "page__header-container" },
                    React.createElement(Header_1.default, null)),
                React.createElement("div", null,
                    React.createElement("ul", { "data-uk-tab": "true" },
                        React.createElement("li", { className: "uk-active" },
                            React.createElement("a", { href: "#", style: { padding: '20px 0' } },
                                "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
                                React.createElement("span", { className: "prof__counter-point", style: { margin: '0 10px' } }, "\u2022"),
                                React.createElement("span", { className: "prof__counter" }, "28"))),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#", style: { padding: '20px 0' } },
                                "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u044B",
                                React.createElement("span", { className: "prof__counter-point", style: { margin: '0 10px' } }, "\u2022"),
                                React.createElement("span", { className: "prof__counter" }, "9"))),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#", style: { padding: '20px 0' } },
                                "\u041A\u0443\u0440\u0441\u044B",
                                React.createElement("span", { className: "prof__counter-point", style: { margin: '0 10px' } }, "\u2022"),
                                React.createElement("span", { className: "prof__counter" }, "85")))),
                    React.createElement("ul", { className: "uk-switcher" },
                        React.createElement("li", null, "test 1"),
                        React.createElement("li", null, "test 2"),
                        React.createElement("li", null, "test 3"))),
                React.createElement(Footer_1.default, null))));
    }
}
exports.default = default_1;
