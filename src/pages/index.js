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
const Slider_1 = require("../components/general/home/widget/Slider");
const Courses_1 = require("../components/general/courses/Courses");
const Works_1 = require("../components/general/home/works/Works");
const Reviews_1 = require("../components/general/home/reviews/Reviews");
const Footer_1 = require("../components/general/common/Footer");
/*!
 * Expo
 */
exports.default = () => [
    React.createElement(Header_1.default, { key: "header" }),
    React.createElement(Slider_1.default, { key: "slider" }),
    React.createElement(Courses_1.default, { key: "courses" }),
    React.createElement(Works_1.default, { key: "works" }),
    React.createElement(Reviews_1.default, { key: "reviews" }),
    React.createElement(Footer_1.default, { key: "footer" }),
];
