const express = require('express');
const router = express.Router();

router.get('/foods', function(req, res) {
    res.render('hastes/foods', {title: 'Favorite Foods', foods: ['coconut', 'avocado']});
  });
  
router.get('/animals', function(req, res) {
    res.render('hats/animals', {title: 'hated foods', animals: ['sand crab', 'spiders']})
  });
  module.exports= router;