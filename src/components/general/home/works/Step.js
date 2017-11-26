"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Step = ({ name, description, img }) => (React.createElement("section", { className: "step" },
    React.createElement("div", { className: "uk-flex" },
        React.createElement("div", { className: "uk-width-1-2 uk-text-right" },
            React.createElement("div", { className: "step__description" },
                React.createElement("header", { className: "step__header" },
                    React.createElement("h2", { className: "step__title" }, name)),
                React.createElement("section", { className: "step__body" },
                    React.createElement("p", { className: "step__text" }, description)))),
        React.createElement("div", { className: "step__timeline step__timeline--circle uk-width-1-2" },
            React.createElement("figure", { className: "step__img-container" },
                React.createElement("img", { src: img, alt: "", className: "step__img" }))))));
exports.default = Step;
