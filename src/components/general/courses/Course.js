"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const link_1 = require("next/link");
const Course = ({ href, img, name, description }) => (React.createElement("article", { className: "course" },
    React.createElement(link_1.default, { href: href },
        React.createElement("a", { className: "course__link" },
            React.createElement("div", { className: "uk-flex" },
                React.createElement("div", { className: "left-column uk-width-1-4" },
                    React.createElement("figure", { className: "course__img-container" },
                        React.createElement("img", { src: img, alt: name, className: "course__img", width: "100", height: "100" }))),
                React.createElement("div", { className: "right-column uk-width-1-1" },
                    React.createElement("header", { className: "course__header" },
                        React.createElement("h3", { className: "course__title" }, name)),
                    React.createElement("section", { className: "course__body" },
                        React.createElement("p", { className: "course__text" }, description))))))));
exports.default = Course;
