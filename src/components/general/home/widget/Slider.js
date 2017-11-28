"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const link_1 = require("next/link");
const Slider = () => (React.createElement("div", { className: "slider" },
    React.createElement("div", { className: "uk-container" },
        React.createElement("section", { className: "slider__item" },
            React.createElement("header", { className: "slider__header" },
                React.createElement("h4", { className: "slider__title" }, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435.")),
            React.createElement("section", { className: "slider__body" },
                React.createElement("p", { className: "slider__text" }, "\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0443\u0447\u0435\u0431\u043D\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445 \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044E\u0449\u0438\u0445 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E")),
            React.createElement("section", { className: "slider__control" },
                React.createElement(link_1.default, { href: "/registration" },
                    React.createElement("a", { className: "uk-button uk-button-default uk-button-secondary uk-button-large" }, "\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")),
                React.createElement(link_1.default, { href: "/courses" },
                    React.createElement("a", { className: "uk-button uk-button-default uk-button-primary uk-button-large" }, "\u043D\u0430\u0448\u0438 \u043A\u0443\u0440\u0441\u044B")))))));
exports.default = Slider;
