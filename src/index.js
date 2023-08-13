// Импорт модулей
import './app';
import './firebase';

// Импорт React 
import React from 'react';
import { createRoot } from 'react-dom/client';

// Импорт Router
import { BrowserRouter } from 'react-router-dom';

// Импорт App
import App from './App';

// Проверка на среду выполнения
if (typeof window !== 'undefined') {
  require('./firebase');
}

// Инициализация React
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);