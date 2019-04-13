const express = require('express');
const router = express.Router();

//Models

const Movie = require('../models/Movie');

router.post('/', (req, res, next) => {
 //const { title, imdb_score, category, country, year } = req.body;

  const movie = new Movie(req.body);

  movie.save((err, data) => {
    if (err)
      res.json(err);

    res.json(data);
  })

});

module.exports = router;
