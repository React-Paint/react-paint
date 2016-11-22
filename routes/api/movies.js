const express = require('express');
const router = express.Router();
const { getMovies, deleteMovie, saveMovie } = require('../../models/movies');

router.get('/:id', (req, res) => {
  res.json(res.movie || []);
});

router.get('/', getMovies, (req, res) => {
  res.json(res.movie || []);
});

router.post('/save', saveMovie, (req, res) => {
  res.json({ message: 'you posted'});
});

router.delete('/delete/:id', deleteMovie, (req, res) => {
  res.json;
})

module.exports = router;
