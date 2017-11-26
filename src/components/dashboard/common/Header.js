"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const head_1 = require("next/head");
const Header = () => (React.createElement("header", { className: "header" },
    React.createElement(head_1.default, null,
        React.createElement("link", { rel: "stylesheet", href: "/static/css/uikit.min.css" }),
        React.createElement("link", { rel: "stylesheet", href: "/static/css/dashboard.css" }),
        React.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.35/js/uikit.min.js" }),
        React.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.35/js/uikit-icons.min.js" }),
        React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", key: "viewport" })),
    React.createElement("h2", { className: "header__title" }, "\u041A\u0443\u0440\u0441\u044B"),
    React.createElement("ul", { className: "header__menu menu nav" },
        React.createElement("li", { className: "menu__item" },
            React.createElement("a", null,
                React.createElement("svg", { width: "32", height: "32", className: "svg-icon icon-search " },
                    React.createElement("svg", { viewBox: "0 0 32 32", width: "100%", height: "100%" },
                        React.createElement("path", { d: "M14 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C8.477 24 4 19.523 4 14S8.477 4 14 4s10 4.477 10 10-4.477 10-10 10zM21.043 22.457l5.25 5.25a1 1 0 0 0 1.414-1.414l-5.25-5.25a1 1 0 0 0-1.414 1.414z" }))))),
        React.createElement("li", { className: "menu__item" },
            React.createElement("a", null,
                React.createElement("svg", { width: "32", height: "32", className: "svg-icon icon-voice-of-marketing" },
                    React.createElement("svg", { id: "icon-notice", viewBox: "0 0 1024 1024", width: "100%", height: "100%" },
                        React.createElement("path", { d: "M849.92 709.44s-81.92-57.28-81.92-135.040c0.302-7.419 0.473-16.128 0.473-24.876 0-70.551-11.175-138.492-31.853-202.149-28.007-88.895-113.878-155.566-215.322-155.566-3.27 0-6.525 0.069-9.761 0.207-2.382-0.144-5.718-0.217-9.071-0.217-101.387 0-187.197 66.691-215.955 158.598-19.842 60.726-31.036 128.772-31.036 199.432 0 9.204 0.19 18.363 0.566 27.475l31.957-1.304h-32c0 76.8-80.96 132.8-81.92 133.44-8.535 5.835-14.064 15.522-14.064 26.501 0 6.443 1.904 12.44 5.18 17.462 9.525 14.597 52.085 58.437 218.805 73.477-0.065 0.767-0.103 1.659-0.103 2.56s0.037 1.793 0.11 2.676c-0.008 70.577 57.3 127.884 127.992 127.884s128-57.308 128-128c0.065-0.767 0.103-1.659 0.103-2.56s-0.037-1.793-0.11-2.676c167.688-14.924 210.248-58.124 219.848-73.484 3.026-4.798 4.822-10.636 4.822-16.893 0-11.264-5.82-21.169-14.617-26.872zM576 832c0 35.346-28.654 64-64 64s-64-28.654-64-64 0 0 0 0c20.16 0 41.28 0 64 0s44.16 0 64 0c0 0 0 0 0 0zM512 768c-155.52 0-232-20.48-266.88-34.88 41.811-35.879 71.568-92.727 74.857-156.571l0.023-2.149c-0.315-7.264-0.495-15.785-0.495-24.348 0-62.796 9.657-123.337 27.568-180.218 18.882-64.627 81.424-114.106 155.522-114.106 3.309 0 6.594 0.099 9.854 0.293 2.335-0.191 5.59-0.288 8.867-0.288 74.213 0 136.834 49.633 156.479 117.516 17.059 53.971 26.724 114.722 26.724 177.73 0 8.799-0.189 17.555-0.562 26.262 1.7 57.676 30.225 115.207 74.723 155.38-35.32 15.217-111.8 35.377-266.68 35.377z" }),
                        React.createElement("path", { d: "M413.12 145.92c0.051 0 0.111 0 0.172 0 4.81 0 9.373-1.061 13.466-2.963 24.964-8.595 53.958-13.605 84.123-13.605s59.159 5.010 86.196 14.244c2.302 1.584 7.239 2.838 12.468 2.838 17.673 0 32-14.327 32-32 0-13.629-8.521-25.268-20.526-29.881-31.411-13.042-67.643-20.574-105.634-20.574-1.19 0-2.378 0.007-3.565 0.022-1.855-0.056-4.252-0.087-6.656-0.087-38.189 0-74.556 7.797-107.598 21.885-8.978 4.623-16.259 15.522-16.259 28.121 0 17.607 14.22 31.893 31.803 31.999z" }))))),
        React.createElement("li", { className: "menu__item" },
            React.createElement("svg", { width: "32", height: "32", className: "svg-icon icon-like" },
                React.createElement("svg", { id: "icon-like", viewBox: "0 0 1024 1024", width: "100%", height: "100%" },
                    React.createElement("path", { d: "M923.84 512c-4.818-32.625-29.599-64.048-63.299-79.080 65.892 25.613-23.045-15.895-118.502-41.463 87.4-143.457 65.96-221.857 51.24-250.337-12.364-26.833-39.028-45.124-69.963-45.124-0.266 0-0.532 0.001-0.797 0.004-39.857 3.264-74.819 31.066-88.684 69.024 21.576-33.403-11.81 34.851-58.485 91.793-55.030 72.463-223.35 161.423-298.87 191.183-12.121 4.738-20.55 16.325-20.55 29.881 0 0.745 0.025 1.485 0.076 2.218l-0.005 319.901c0 0.020 0 0.043 0 0.067 0 12.295 6.934 22.971 17.105 28.329 96.756 53.118 237.987 93.626 388.106 99.547l10.789 0.057c32.77-0.634 62.179-18.606 78.804-45.352-84.273 138.52 7.273 8.58 70.838-136.416-12.715 18.596 15.545-49.466 56.779-107.69 28.324-25.899 46.59-64.756 46.59-107.88 0-6.579-0.425-13.058-1.249-19.412zM832 597.44c9.626-21.87-35.28 41.267-62.923 112.981 57.411-128.233 4.234 16.247-73.38 144.264-2.878 3.575-12.618 9.256-23.689 9.315-114.955-0.845-242.947-32.265-357.332-87.434l5.323-275.446c85.12-37.76 244.16-123.84 306.56-205.44-27.555 41.412 26.295-24.228 62.63-99.874 4.785-17.32 17.143-30.263 33.035-35.078 5.757 0.503 10.557 4.425 12.462 9.728 12.833 25.065 10.913 99.305-78.367 219.305-3.928 5.253-6.289 11.876-6.289 19.051 0 14.673 9.876 27.040 23.343 30.815-61.23-20.037 56.788 8.105 165.769 53.577 6.112 1.778 18.016 14.635 21.908 30.629 0.231 2.363 0.325 4.732 0.325 7.124 0 26.308-11.298 49.978-29.307 66.421z" }),
                    React.createElement("path", { d: "M144 416c-26.51 0-48 21.49-48 48v352c0 26.51 21.49 48 48 48s48-21.49 48-48v-352c0-26.51-21.49-48-48-48z" })))),
        React.createElement("li", { className: "menu__item" },
            React.createElement("svg", { width: "32", height: "32", className: "svg-icon icon-messages" },
                React.createElement("svg", { id: "icon-messages", viewBox: "0 0 1024 1024", width: "100%", height: "100%" },
                    React.createElement("path", { d: "M832 192h-640c-53.019 0-96 42.981-96 96v448c0 53.019 42.981 96 96 96h640c53.019 0 96-42.981 96-96v-448c0-53.019-42.981-96-96-96zM160 301.12l177.28 178.88-177.28 153.6v-332.48zM205.12 256h613.76l-274.88 276.16c-7.87 7.844-18.729 12.694-30.72 12.694s-22.85-4.85-30.721-12.695zM864 301.12v332.48l-177.28-153.6zM832 768h-640c-17.673 0-32-14.327-32-32v-17.6l224-194.88 52.16 52.48c19.454 19.441 46.323 31.464 76 31.464s56.546-12.023 76.001-31.464l51.839-52.159 224 194.88v17.28c0 17.673-14.327 32-32 32z" })))),
        React.createElement("li", { className: "menu__item" },
            React.createElement("a", null,
                React.createElement("img", { src: "data:image/jpeg;base64,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", alt: "", width: "56", height: "56" }),
                React.createElement("svg", { width: "32", height: "32", className: "svg-icon icon-more-icon " },
                    React.createElement("svg", { viewBox: "0 0 128 1024", width: "100%", height: "100%" },
                        React.createElement("path", { d: "M128 288c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z" }),
                        React.createElement("path", { d: "M128 512c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z" }),
                        React.createElement("path", { d: "M128 736c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z" }))))))));
exports.default = Header;
