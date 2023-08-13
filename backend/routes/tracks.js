const express = require('express');
const router = express.Router();

// Обработчик GET запроса на /tracks
router.get('/', (req, res) => {
  // Логика для обработки GET запроса на /tracks
  res.send('GET request to /tracks');
});

// Обработчик POST запроса на /tracks
router.post('/', (req, res) => {
  // Логика для обработки POST запроса на /tracks
  res.send('POST request to /tracks');
});

// Обработчик GET запроса на /tracks/:id
router.get('/:id', (req, res) => {
  const trackId = req.params.id;
  // Логика для обработки GET запроса на /tracks/:id
  res.send(`GET request to /tracks/${trackId}`);
});

// Обработчик PUT запроса на /tracks/:id
router.put('/:id', (req, res) => {
  const trackId = req.params.id;
  // Логика для обработки PUT запроса на /tracks/:id
  res.send(`PUT request to /tracks/${trackId}`);
});

// Обработчик DELETE запроса на /tracks/:id
router.delete('/:id', (req, res) => {
  const trackId = req.params.id;
  // Логика для обработки DELETE запроса на /tracks/:id
  res.send(`DELETE request to /tracks/${trackId}`);
});

module.exports = router;
