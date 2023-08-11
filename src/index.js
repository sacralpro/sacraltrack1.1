// импортируем модули приложения
import './app'; 
import './firebase';

// импорт React 
import React from 'react';
import { createRoot } from 'react-dom/client';

// корневой компонент App
import App from './App';

// подключаем React к DOM
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);