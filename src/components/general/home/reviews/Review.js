"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Review = ({ avatar, name, text }) => (React.createElement("section", { className: "review" },
    React.createElement("img", { src: avatar, alt: "" }),
    React.createElement("section", { className: "review__body" }, text),
    React.createElement("header", { className: "review__header" },
        React.createElement("h3", { className: "review__title" }, name))));
exports.default = Review;
