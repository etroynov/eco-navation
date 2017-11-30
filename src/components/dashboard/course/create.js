"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const fetch = require("isomorphic-fetch");
class Create extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: '',
            description: '',
            departament: '',
            departaments: [],
        };
    }
    async componentDidMount() {
        const res = await fetch('/dashboard/departaments/all');
        const departaments = await res.json();
        this.setState({
            departaments,
        });
    }
    submitCourse() { }
    render() {
        return (React.createElement("form", { className: "uk-container" },
            React.createElement("fieldset", { className: "uk-fieldset" },
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", { htmlFor: "departament-name", className: "uk-form-label" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                    React.createElement("div", { className: "uk-form-controls" },
                        React.createElement("input", { type: "text", id: "departament-name", className: "uk-input", name: "name", value: this.state.name }))),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", { htmlFor: "departament-description", className: "uk-form-label" }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"),
                    React.createElement("div", { className: "uk-form-controls" },
                        React.createElement("textarea", { name: "description", id: "departament-description", rows: 5, className: "uk-textarea", value: this.state.description }))),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", { htmlFor: "course-departament", className: "uk-form-label" }, "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442"),
                    React.createElement("div", { className: "uk-form-controls" },
                        React.createElement("select", { name: "departament", id: "course-departament", className: "uk-select" },
                            React.createElement("option", { key: 0, value: 0 }, "\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442...")))),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("label", { htmlFor: "departament-image", className: "uk-form-label", "data-uk-form-custom": "true" }, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430")),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("div", { "uk-form-custom": "true" },
                        React.createElement("input", { type: "file", name: "image", id: "departament-image" }),
                        React.createElement("button", { className: "uk-button uk-button-default", type: "button", tabIndex: -1 }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C"))),
                React.createElement("hr", null),
                React.createElement("div", { className: "uk-margin" },
                    React.createElement("input", { type: "submit", className: "uk-button uk-button-primary", value: "сохранить" })))));
    }
}
exports.default = Create;
