const path = require('path');

module.exports = {

  // Режим разработки 
  mode: 'development',

  // Создание source maps
  devtool: 'inline-source-map',

  // Слежение за изменениями
  watch: true,

  // Входная точка приложения
  entry: './src/index.js',
  
  // Выходная директория и имя файла
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // Настройки модулей
  module: {

    // Правила для загрузчиков
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};