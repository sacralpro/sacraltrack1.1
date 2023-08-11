"use strict";

require("../firebase");
// Импорты модулей
var express = require('express');
var morgan = require('morgan');
var helmet = require('helmet');
var cors = require('cors');
var _require = require('express-validator'),
  check = _require.check,
  validationResult = _require.validationResult;

// Импорт firebase

// инициализировать Firebase

function App() {
  return /*#__PURE__*/React.createElement("h1", null, "Sacral Track");
}

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

// Импорт модели Track
var track = require('../backend/models/tracks');

// Настройки безопасности
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());

// Конфигурация CORS, логгирования 
app.use(cors());
app.use(morgan('dev'));

// Маршрутизация(Роуты)
app.use('/users', usersRouter);
app.use('/tracks', tracksRouter);

// Настройка Multer для загрузки файлов
var upload = multer({
  storage: multer.memoryStorage()
});

// Настройка треков

var tracksCtrl = require('../backend/controllers/tracks');

// Роуты для загрузки треков
app.post('/tracks', upload.single('track'), uploadCtrl.uploadTrack);
app.get('/tracks', tracksCtrl.getAll);
app.get('/tracks/:id', tracksCtrl.getById);
app.post('/purchase', tracksCtrl.purchase);
// Роуты для получения треков пользователя
app.get('/user/tracks', uploadCtrl.getUserTracks);

// взаимодействие пользоватлей с треками
app.post('/tracks/:id/reposts', repostsCtrl.repostTrack);
app.get('/tracks/:id/download', tracksCtrl.downloadTrack);
app.get('/tracks/:id/play', tracksCtrl.playTrack);
app.get('/tracks', function (req, res) {
  // Логика для обработки GET-запроса на /tracks
  // Например, получение всех треков из базы данных и отправка их в ответе
  Track.find({}, function (err, tracks) {
    if (err) {
      // Обработка ошибки
      console.error(err);
      res.status(500).json({
        error: 'Internal Server Error'
      });
    } else {
      // Отправка треков в ответе
      res.json(tracks);
    }
  });
});
module.exports = app;

// Роуты для внешних API

app.get('/api/spotify/top', apiCtrl.getSpotifyTopHits);

//Валидация 
var _require2 = require('express-validator'),
  validate = _require2.validate;
app.use([check('param').isEmail(), check('param2').isLength({
  min: 5
})]);

// Обработка ошибок
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send('Ошибка сервера');
});

// Запуск сервера
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Server started on http://localhost:' + (process.env.PORT || 3000));
});

// CORS Разрешаем запросы с этого origin
var allowedOrigins = ['https://www.example.com'];

// Настройка CORS
app.use(cors({
  origin: function origin(_origin, callback) {
    if (!_origin) return callback(null, true);
    if (allowedOrigins.indexOf(_origin) === -1) {
      var msg = 'Недопустимый origin: ${origin}';
      return callback(new Error(msg), false);
    }
    callback(null, true);
  }
}));

// Загрузка трека
app.post('/tracks', uploadCtrl.uploadTrack);

// Получение треков пользователя  
app.get('/tracks/my', uploadCtrl.getUserTracks);