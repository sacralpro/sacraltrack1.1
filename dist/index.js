"use strict";

require("./app");
require("./firebase");
var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _reactRouterDom = require("react-router-dom");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Импорт модулей

// Импорт React 

// Импорт Router

// Импорт App

// Проверка на среду выполнения
if (typeof window !== 'undefined') {
  require('./firebase');
}

// Инициализация React
var rootElement = document.getElementById('root');
var root = (0, _client.createRoot)(rootElement);
root.render( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)));