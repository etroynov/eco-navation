"use strict";
/**
 * Libs
 */
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const React = require("react");
const redux_1 = require("redux");
/**
 * Components
 */
const head_1 = require("next/head");
const react_redux_1 = require("react-redux");
/*!
 * Components
 */
const Header_1 = require("../../../components/dashboard/common/Header");
const Footer_1 = require("../../../components/dashboard/common/Footer");
const Sidebar_1 = require("../../../components/dashboard/common/Sidebar");
/*!
 * Expo
 */
const courses = redux_1.createStore((state = []) => state);
class Courses extends React.Component {
    componentDidMount() {
        UIkit.switcher($('.tabs__header'), { connect: '.uk-switcher' });
        UIkit.tab($('.tabs__header'), { connect: '.tabs__content' });
    }
    render() {
        return (React.createElement(react_redux_1.Provider, { store: courses },
            React.createElement("div", { className: "page" },
                React.createElement(head_1.default, null,
                    React.createElement("title", null, "\u041A\u0443\u0440\u0441\u044B")),
                React.createElement(Sidebar_1.default, null),
                React.createElement("div", { className: "page__content" },
                    React.createElement("div", { className: "page__header-container" },
                        React.createElement(Header_1.default, null)),
                    React.createElement("div", { className: "tabs" },
                        React.createElement("ul", { "data-uk-tab": "true", "data-uk-switcher": "true", className: "tabs__header uk-tab" },
                            React.createElement("li", { className: "uk-active" },
                                React.createElement("a", { href: "#", className: "tabs__link" },
                                    "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
                                    React.createElement("span", { className: "prof__counter-point", style: { margin: '0 10px' } }, "\u2022"),
                                    React.createElement("span", { className: "prof__counter" }, "28"))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#", className: "tabs__link" },
                                    "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u044B",
                                    React.createElement("span", { className: "prof__counter-point", style: { margin: '0 10px' } }, "\u2022"),
                                    React.createElement("span", { className: "prof__counter" }, "9"))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#", className: "tabs__link" },
                                    "\u041A\u0443\u0440\u0441\u044B",
                                    React.createElement("span", { className: "prof__counter-point", style: { margin: '0 10px' } }, "\u2022"),
                                    React.createElement("span", { className: "prof__counter" }, "85"))),
                            React.createElement("li", { style: { float: 'right' } },
                                React.createElement("a", { className: "tabs__link" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442")),
                            React.createElement("li", { style: { float: 'right' } },
                                React.createElement("a", { className: "tabs__link" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0443\u0440\u0441"))),
                        React.createElement("ul", { className: "tabs__content uk-switcher" },
                            React.createElement("li", null, "test 1"),
                            React.createElement("li", null, "test 2"),
                            React.createElement("li", null, "test 3"))),
                    React.createElement(Footer_1.default, null)))));
    }
}
exports.default = Courses;
