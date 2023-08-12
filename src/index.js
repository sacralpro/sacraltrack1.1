// Импортируем модули
import './app';
import './firebase'; 

// Импортируем React и React Router 
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Импортируем корневой компонент App
import App from './App';

//...другие импорты

if (typeof window !== 'undefined') {
  require('./firebase'); 
}

// Подключаем React к DOM
const container = document.getElementById('root');
const root = createRoot(container);

// Оборачиваем приложение в BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

