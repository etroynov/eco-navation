"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Step_1 = require("./Step");
const Works = () => (React.createElement("div", { className: "works" },
    React.createElement("div", { className: "uk-container" },
        React.createElement("header", { className: "works__header" },
            React.createElement("h2", { className: "works__title" }, "\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C")),
        React.createElement("div", { className: "steps" },
            React.createElement(Step_1.default, { name: "Обучение", description: "Опытные, приветливые инструкторы проводят шаг за шагом по материалам курса в наших высококачественных видео уроках.", img: "../../static/img/work_step_1.svg" }),
            React.createElement(Step_1.default, { name: "Практика", description: "Опытные, приветливые инструкторы проводят шаг за шагом по материалам курса в наших высококачественных видео уроках.", img: "../../static/img/work_step_2.svg" }),
            React.createElement(Step_1.default, { name: "Тестирование", description: "Опытные, приветливые инструкторы проводят шаг за шагом по материалам курса в наших высококачественных видео уроках.", img: "../../static/img/work_step_3.svg" }),
            React.createElement(Step_1.default, { name: "Отслеживание прогресса", description: "Опытные, приветливые инструкторы проводят шаг за шагом по материалам курса в наших высококачественных видео уроках.", img: "../../static/img/work_step_4.svg" })))));
exports.default = Works;
