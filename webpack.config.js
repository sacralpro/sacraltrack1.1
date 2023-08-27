const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] 
      }
    ]
  },
  resolve: {
    fallback: {
      "fs": false,
      "path": "path-browserify",
      "http": "stream-http",
      "url": require.resolve("url/"), 
      "crypto": require.resolve("crypto-browserify"),
      "util": "util/",
      "zlib": "browserify-zlib",
      "mime": false
      // другие модули
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  }
};
