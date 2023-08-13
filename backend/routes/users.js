const express = require('express');
const router = express.Router();

// Обработчик GET запроса на /users
router.get('/', (req, res) => {
  // Логика для обработки GET запроса на /users
  res.send('GET request to /users');
});

// Обработчик POST запроса на /users
router.post('/', (req, res) => {
  // Логика для обработки POST запроса на /users
  res.send('POST request to /users');
});

// Обработчик GET запроса на /users/:id
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  // Логика для обработки GET запроса на /users/:id
  res.send(`GET request to /users/${userId}`);
});

// Обработчик PUT запроса на /users/:id
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  // Логика для обработки PUT запроса на /users/:id
  res.send(`PUT request to /users/${userId}`);
});

// Обработчик DELETE запроса на /users/:id
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  // Логика для обработки DELETE запроса на /users/:id
  res.send(`DELETE request to /users/${userId}`);
});

module.exports = router;
