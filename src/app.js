// Импорты модулей
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { check, validationResult } = require('express-validator');
const app = express();


import { Route } from 'react-router-dom';




// Импорт модуля multer
const multer = require('multer');

// Импорты роутеров, контроллеров
const usersRouter = require('../backend/routes/users');
const tracksRouter = require('../backend/routes/tracks');
const commentsCtrl = require('../backend/controllers/comments');
const likesCtrl = require('../backend/controllers/likes');
const repostsCtrl = require('../backend/controllers/reposts');
const uploadCtrl = require('../backend/controllers/upload');
const apiCtrl = require('../backend/controllers/api');



// Импорт модели Track
const track = require('../backend/models/tracks');


// Настройки безопасности
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff()); 


// Конфигурация CORS, логгирования 
app.use(cors());
app.use(morgan('dev'));  


// Маршрутизация(Роуты)
app.use('/users', usersRouter(app));
app.use('/tracks', tracksRouter(app));


// Настройка Multer для загрузки файлов
const upload = multer({storage: multer.memoryStorage()});

// Настройка треков

const tracksCtrl = require('../backend/controllers/tracks');

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

app.get('/tracks', (req, res) => {
  // Логика для обработки GET-запроса на /tracks
  // Например, получение всех треков из базы данных и отправка их в ответе
  Track.find({}, (err, tracks) => {
    if (err) {
      // Обработка ошибки
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
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
const {validate} = require('express-validator');

app.use([
  check('param').isEmail(),
  check('param2').isLength({ min: 5 }),
]);


// Обработка ошибок
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Ошибка сервера');
});

// Запуск сервера
const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on http://localhost:' + (process.env.PORT || 3000));
});


// CORS Разрешаем запросы с этого origin
const allowedOrigins = ['https://www.example.com'];

// Настройка CORS
app.use(cors({
  origin: (origin, callback) => {
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
       const msg = 'Недопустимый origin: ${origin}';
       return callback(new Error(msg), false);
    }
    callback(null, true);
  }  
}));