"use strict";

// Импорты модулей
var express = require('express');
var morgan = require('morgan');
var helmet = require('helmet');
var cors = require('cors');
var app = express();
var _require = require('react-router-dom'),
  Route = _require.Route;

// Импорт модуля multer
var multer = require('multer');

// Импорты роутеров, контроллеров
var usersRouter = require('../backend/routes/users');
var tracksRouter = require('../backend/routes/tracks');
var commentsCtrl = require('../backend/controllers/comments');
var likesCtrl = require('../backend/controllers/likes');
var repostsCtrl = require('../backend/controllers/reposts');
var uploadCtrl = require('../backend/controllers/upload');
var apiCtrl = require('../backend/controllers/api');

// Настройки безопасности
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());

// Маршрутизация(Роуты)
app.use('/users', usersRouter);
app.use('/tracks', tracksRouter);

// Настройка Multer для загрузки файлов
var upload = multer({
  storage: multer.memoryStorage()
});

// Роуты для внешних API
app.get('/api/spotify/top', apiCtrl.getSpotifyTopHits);

// Валидация
var _require2 = require('express-validator'),
  check = _require2.check,
  validationResult = _require2.validationResult;
app.use([check('param').isEmail(), check('param2').isLength({
  min: 5
})]);
app.post('/purchase', [
  // Валидация параметров здесь
], function (req, res) {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  // Логика для обработки запроса при успешной валидации
  // ...
});

// Обработка ошибок
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send('Ошибка сервера');
});

// Запуск сервера
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Server started on http://localhost:' + (process.env.PORT || 3000));
});

// Конфигурация CORS и логгирования
app.use(cors());
app.use(morgan('dev'));

// CORS - Разрешаем запросы с указанного origin
var allowedOrigins = ['https://www.example.com'];
app.use(cors({
  origin: function origin(_origin, callback) {
    if (!_origin) return callback(null, true);
    if (allowedOrigins.includes(_origin)) {
      return callback(null, true);
    } else {
      var msg = "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 origin: ".concat(_origin);
      return callback(new Error(msg), false);
    }
  }
}));
module.exports = app;