// controllers/users.js



exports.register = (req, res) => {
    // регистрация пользователя 
  }
  
  exports.login = (req, res) => {

exports.login = [

  validate({
    body: {
      email: 'required|email',
      password: 'required|min:6'
    }  
  }),

  async (req, res) => {
     // ...логика аутентификации
  }
];

    // авторизация
  }
  
  exports.getProfile = (req, res) => {
    // возвращает данные профиля
  }


  
  // controllers/users.js

const User = require('../backend/controllers/Users');

async function register(req, res) {
  // код регистрации с использованием модели User 
}



// Валидация пользователей

const {validate} = require('../validators/auth'); 

exports.register = [

  validate({ 
    body: {
      email: 'required|email',
      password: 'required|min:6'
    }
   }),

  async (req, res) => {
    // ...логика регистрации
  }

];


// Логин

exports.login = [

    validate({
      body: {
        email: 'required|email',
        password: 'required|min:6'
      }  
    }),
  
    async (req, res) => {
       // ...логика аутентификации
    }
  ];

// Добавляем поле пользователи 
  const UserSchema = new Schema({
    username: String,
    roles: [String] 
  });

  // Проверка роли вв контроллере

  exports.updateUser = (req, res) => {
    if(!req.user.roles.includes('admin')) {
      return res.status(403).send('Нет доступа');
    }
    
    // обновление пользователя
  }


  // Роуты по сущностям -->

  // Пользователи
app.post('/users', usersCtrl.register); 

// Треки
app.get('/tracks/:id', tracksCtrl.getTrack);